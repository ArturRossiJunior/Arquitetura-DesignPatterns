import React from 'react';
import { useIsTablet } from '../utils/useIsTablet';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
// Importa os tipos (ButtonSize, ButtonVariant) e a função fábrica (createButtonStyles)
import { ButtonSize, ButtonVariant, createButtonStyles } from './styles/button.styles';

/**
 * @interface ButtonProps
 * Define as propriedades que o componente Button aceita.
 * - Herda todas as propriedades de um `TouchableOpacity` padrão (`TouchableOpacityProps`).
 * - `variant`: Define a aparência visual do botão (ex: 'primary', 'soft', 'game'). É opcional.
 * - `size`: Define as dimensões do botão (ex: 'default', 'large'). É opcional.
 * - `children`: O conteúdo a ser exibido dentro do botão, como um texto ou um ícone.
 */
export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

// O componente é criado com `React.forwardRef` para permitir que o componente pai
// obtenha uma referência (`ref`) ao `TouchableOpacity` interno.
const Button = React.forwardRef<React.ComponentRef<typeof TouchableOpacity>, ButtonProps>(
  // Desestruturamos as props. `variant` e `size` recebem valores padrão ('default')
  // caso não sejam fornecidos pelo componente pai.
  ({ variant = 'default', size = 'default', children, style, ...props }, ref) => {
    
    // Hook customizado para detectar se o dispositivo é um tablet.
    // Isso permite que a fábrica de estilos crie variações responsivas.
    const isTablet = useIsTablet();
    
    // PONTO CENTRAL DO FACTORY METHOD
    // A função `createButtonStyles` é a nossa "fábrica". Ela é chamada uma única vez
    // e retorna um objeto contendo todas as possíveis variações de estilo.
    const styles = createButtonStyles(isTablet);
    
    // Monta o array de estilos para o container do botão.
    // O React Native mescla os estilos em ordem, permitindo a sobreposição.
    const containerStyle = [
      styles.baseContainer,                  // 1. Estilo base, comum a todos os botões.
      styles.variants[variant].container,    // 2. Estilo da variante específica (ex: 'game').
      styles.sizes[size].container,          // 3. Estilo do tamanho específico (ex: 'default').
      style,                                 // 4. Estilos customizados passados via prop `style`.
    ];

    // Monta o array de estilos para o texto do botão.
    const textStyle = [
      styles.baseText,                       // 1. Estilo base do texto.
      styles.variants[variant].text,         // 2. Estilo de texto da variante.
      styles.sizes[size].text,               // 3. Estilo de texto do tamanho.
    ];

    return (
      // `TouchableOpacity` é o componente base que fornece o feedback de toque.
      // A `ref` é encaminhada para ele.
      <TouchableOpacity ref={ref} style={containerStyle} activeOpacity={0.8} {...props}>
        {/*
         * Renderização condicional do conteúdo:
         * - Se `children` for uma string, ele é envolvido por um componente `Text`
         * que recebe os estilos de texto calculados.
         * - Caso contrário (ex: se for um ícone <Icon />), ele é renderizado diretamente,
         * permitindo maior flexibilidade.
         */}
        {typeof children === 'string' ? (
          <Text style={textStyle}>{children}</Text>
        ) : (
          children
        )}
      </TouchableOpacity>
    );
  }
);

// Define um nome de exibição para o componente, útil para depuração no React DevTools.
Button.displayName = 'Button';

// Exporta o componente para ser utilizado em outras partes da aplicação.
export { Button };