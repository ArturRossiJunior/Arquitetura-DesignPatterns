import { colors } from './colors';
import { shadows } from './shadows';
import { createCommonStyles } from './common.styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

/**
 * @description
 * Define as variantes visuais dos botões. Cada variante possui estilos específicos
 * para o seu contêiner (`container`) e para o seu texto (`text`).
 * Essa abordagem (semelhante ao padrão de design Factory) permite que o componente `Button`
 * solicite um estilo (ex: "destructive") sem precisar saber os detalhes de implementação.
 */
const buttonVariants = {
  default: {
    container: { backgroundColor: colors.primary },
    text: { color: colors.primaryForeground },
  },
  destructive: {
    container: { backgroundColor: colors.destructive },
    text: { color: colors.destructiveForeground },
  },
  outline: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: colors.outlineBorder,
      elevation: 0,
      shadowOpacity: 0,
    },
    text: { color: colors.primary },
  },
  secondary: {
    container: { backgroundColor: colors.secondary, elevation: 0, shadowOpacity: 0 },
    text: { color: colors.secondaryForeground },
  },
  ghost: {
    container: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0 },
    text: { color: colors.linkText },
  },
  link: {
    container: { backgroundColor: 'transparent', elevation: 0, shadowOpacity: 0, paddingHorizontal: 4 },
    text: { color: colors.linkText, textDecorationLine: 'underline', fontWeight: '500' },
  },
  // Variantes customizadas para contextos específicos da aplicação
  game: {
    container: { 
      backgroundColor: colors.calmBlue,
      borderRadius: 16,
      elevation: 4,
      shadowOpacity: 0.2,
    },
    text: { color: colors.primaryForeground, fontWeight: '700' },
  },
  calm: {
    container: { 
      backgroundColor: colors.softGreen,
      borderRadius: 12,
      elevation: 3,
      shadowOpacity: 0.15,
    },
    text: { color: colors.primaryForeground, fontWeight: '600' },
  },
  soft: {
    container: { 
      backgroundColor: colors.gentlePurple,
      borderRadius: 12,
      elevation: 3,
      shadowOpacity: 0.15,
    },
    text: { color: colors.primaryForeground, fontWeight: '600' },
  },
}

/**
 * @function buttonSizes
 * @description
 * Uma função fábrica que retorna um objeto com os estilos para diferentes tamanhos de botão.
 * Ela recebe um booleano `isTablet` para ajustar as dimensões (padding, fontes, etc.)
 * de forma responsiva, utilizando a biblioteca `react-native-responsive-screen` (wp, hp).
 * @param {boolean} isTablet - Indica se o dispositivo é um tablet.
 * @returns Um objeto contendo os estilos para cada tamanho de botão.
 */
const buttonSizes = (isTablet: boolean) => ({
  sm: {
    container: { 
      paddingVertical: isTablet ? hp('1.5%') : hp('1.2%'),
      paddingHorizontal: isTablet ? wp('4%') : wp('3.5%'), 
      borderRadius: isTablet ? 14 : 10 
    },
    text: { fontSize: isTablet ? wp('3%') : wp('3.5%') },
  },
  default: {
    container: { 
      paddingVertical: isTablet ? hp('1.5%') : hp('1.8%'),
      paddingHorizontal: isTablet ? wp('5%') : wp('5%'), 
      borderRadius: isTablet ? 16 : 12 
    },
    text: { fontSize: isTablet ? wp('2.8%') : wp('4%') },
  },
  lg: {
    container: { 
      paddingVertical: isTablet ? hp('2.2%') : hp('2%'),
      paddingHorizontal: isTablet ? wp('6%') : wp('6%'), 
      borderRadius: isTablet ? 18 : 14 
    },
    text: { fontSize: isTablet ? wp('4%') : wp('4.5%') },
  },
  xl: {
    container: { 
      paddingVertical: isTablet ? hp('2.5%') : hp('2.2%'),
      paddingHorizontal: isTablet ? wp('7%') : wp('7%'), 
      borderRadius: isTablet ? 20 : 16 
    },
    text: { fontSize: isTablet ? wp('4.5%') : wp('5%') },
  },
  icon: { // Tamanho específico para botões que contêm apenas um ícone.
    container: { 
      height: isTablet ? hp('7%') : hp('5.5%'), 
      width: isTablet ? hp('7%') : hp('5.5%'),
      paddingHorizontal: 0, 
      borderRadius: isTablet ? 16 : 12 
    },
    text: {}, // O texto de um botão de ícone geralmente é irrelevante.
  },
})

/**
 * @description
 * Define os estilos para os diferentes estados de um botão, como "pressionado" (`pressed`)
 * e "desabilitado" (`disabled`). Para o estado `pressed`, cada variante pode ter um feedback
 * visual diferente (ex: mudança de opacidade ou cor de fundo).
 */
const buttonStates = {
  pressed: {
    default: { container: { opacity: 0.8, transform: [{ scale: 0.98 }] } },
    destructive: { container: { opacity: 0.8, transform: [{ scale: 0.98 }] } },
    outline: { container: { backgroundColor: colors.subtleBackground, transform: [{ scale: 0.98 }] } },
    secondary: { container: { backgroundColor: '#CBD5E1', transform: [{ scale: 0.98 }] } },
    ghost: { container: { backgroundColor: colors.subtleBackground, transform: [{ scale: 0.98 }] } },
    link: { text: { opacity: 0.8 } },
    game: { container: { opacity: 0.8, transform: [{ scale: 0.98 }] } },
    calm: { container: { opacity: 0.8, transform: [{ scale: 0.98 }] } },
    soft: { container: { opacity: 0.8, transform: [{ scale: 0.98 }] } },
  },
  disabled: {
    container: { opacity: 0.5 },
    text: {},
  }
}

/**
 * @function createButtonStyles
 * @description
 * Função fábrica principal que constrói e exporta o objeto de estilos completo para o componente Button.
 * Ela combina estilos base (comuns a todos os botões) com as variantes, tamanhos e estados.
 * A função é parametrizada por `isTablet` para garantir que os estilos de tamanho sejam responsivos.
 * @param {boolean} isTablet - Indica se os estilos devem ser gerados para um layout de tablet.
 * @returns Um objeto consolidado com todos os estilos necessários para o componente Button.
 */
export const createButtonStyles = (isTablet: boolean) => {
  const commonStyles = createCommonStyles(isTablet);
  return {
    // Estilos base aplicados a todos os botões, independentemente da variante ou tamanho.
    baseContainer: {
      ...commonStyles.baseContainer,
      ...commonStyles.centerContent,
      flexDirection: 'row' as const, // Garante que ícones e texto fiquem lado a lado.
      ...shadows.shadowDefault,
    },

    baseText: {
      ...commonStyles.baseText,
    },

    // Exporta os objetos de variantes, tamanhos e estados para serem consumidos pelo componente.
    variants: buttonVariants,
    sizes: buttonSizes(isTablet), // Gera os estilos de tamanho responsivos.
    states: buttonStates,
  };
};

/**
 * @description
 * Tipagem TypeScript para garantir type safety.
 * `ButtonVariant` é um tipo que representa todas as chaves (nomes) possíveis do objeto `buttonVariants`.
 * Isso garante que apenas variantes válidas (ex: 'default', 'destructive') possam ser passadas como props.
 */
export type ButtonVariant = keyof typeof buttonVariants;

/**
 * @description
 * `ButtonSize` é um tipo que representa todas as chaves (nomes) possíveis do objeto retornado por `buttonSizes`.
 * Garante que apenas tamanhos válidos (ex: 'sm', 'default', 'lg') possam ser passados como props.
 * `ReturnType<typeof buttonSizes>` infere o tipo do objeto que a função `buttonSizes` retorna.
 */
export type ButtonSize = keyof ReturnType<typeof buttonSizes>;