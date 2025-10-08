// Importações Padrão e de Componentes
import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { IndexScreenProps } from '../navigation/types';
import { createStyles } from '../components/styles/index.styles';
import { View, Text, ScrollView, Alert, useWindowDimensions } from 'react-native';

/**
 * @component IndexScreen
 * Representa a tela inicial (principal) do aplicativo.
 * - Utiliza uma arquitetura baseada em componentes reutilizáveis (Header, Card, Button).
 * - Demonstra a composição de UI e o consumo de componentes criados com Design Patterns.
 * @param {IndexScreenProps} { navigation } - Propriedade de navegação para transitar entre telas.
 */
const IndexScreen = ({ navigation }: IndexScreenProps) => {
  // Lógica de Responsividade
  // O hook `useWindowDimensions` obtém as dimensões da tela em tempo real.
  const { width } = useWindowDimensions();
  // Determina se o dispositivo tem o tamanho de um tablet.
  const isTablet = width >= 768;

  // Consumo da Fábrica de Estilos da Tela
  // A função `createStyles` (outra implementação do padrão Factory) é chamada
  // com o booleano `isTablet` para gerar os estilos apropriados para o layout da tela.
  const styles = createStyles(isTablet);

  return (
    // Estrutura principal da tela com rolagem vertical.
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Header />

        {/* Grid de navegação que organiza os cards. */}
        <View style={styles.navigationGrid}>

          {/* Card 1: Navegação para a seção de jogos. */}
          <Card
            variant="default" // O componente Card também pode usar o padrão Factory para suas variantes.
            style={styles.navigationCard}
          >
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Início</Text>
                <Text style={styles.cardDescription}>
                  Acesse os jogos educativos e atividades interativas
                </Text>
              </View>

              {/* * CONSUMO DO COMPONENTE BUTTON
               * Aqui, solicitamos à "fábrica" de botões uma instância com a variante "game".
               * A tela não precisa saber como o botão "game" é estilizado, apenas o utiliza
               * de forma declarativa.
               */}
              <Button
                variant="game"
                size="default"
                style={styles.actionButton}
              >
                Começar
              </Button>
            </View>
          </Card>

          {/* Card 2: Navegação para a seção "Sobre". */}
          <Card
            variant="default"
            style={styles.navigationCard}
          >
            <View style={styles.cardContent}>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Sobre o App</Text>
                <Text style={styles.cardDescription}>
                  Conheça mais sobre nossa ferramenta e metodologia
                </Text>
              </View>
              
              {/* * CONSUMO DO COMPONENTE BUTTON (Outra Variante)
               * Novamente, utilizamos o mesmo componente <Button />, mas desta vez pedimos
               * a variante "soft". O Factory Method garante que o botão correto seja
               * renderizado, mantendo a consistência e a simplicidade no código da tela.
               */}
              <Button
                variant="soft"
                size="default"
                style={styles.actionButton}
              >
                Saber Mais
              </Button>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default IndexScreen;