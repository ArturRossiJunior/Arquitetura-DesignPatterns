# 🏗️ Arquitetura com Design Patterns em React Native

Este repositório documenta a aplicação de um **Design Pattern** na arquitetura de um aplicativo mobile moderno, construído com **React Native, Expo e TypeScript**. O foco principal é a implementação do padrão **Factory Method** para desacoplar e escalar a criação de componentes de UI.

---

## 📌 Introdução

**Design Patterns** (Padrões de Projeto) são soluções arquiteturais testadas e aprovadas para problemas recorrentes no ciclo de vida do desenvolvimento de software. Sua aplicação resulta em um código mais coeso, legível e de fácil manutenção.

Neste projeto, o padrão **Factory Method**, da categoria **Criacional**, foi selecionado por sua notável capacidade de abstrair a lógica de instanciação de componentes, tornando a UI mais flexível e organizada.

---

## 🎯 Padrão de Projeto: Factory Method

### 🧱 Categoria

**Criacional**: Padrões que abstraem o processo de criação de objetos.

### ✅ Motivação

A necessidade de construir uma biblioteca de **componentes visuais reutilizáveis** — como botões com diferentes estilos (`primary`, `outline`) e dimensões (`small`, `large`) — motivou a escolha. O **Factory Method** nos permitiu centralizar a lógica de criação, evitando a duplicação de código e promovendo um sistema de design consistente.

---

## 🧩 Estrutura da Implementação

A solução foi estruturada em torno de um componente `Button` que delega a responsabilidade de criar seus estilos para uma função "fábrica". Essa função utiliza as `props` `variant` e `size` como parâmetros para determinar qual variação de estilo deve ser retornada.

### 🗂️ Arquivos Principais

-   `components/Button.tsx`: O componente que serve como interface para o cliente. Ele consome a fábrica de estilos.
-   `components/styles/button.styles.ts`: A implementação do **Factory Method**. Contém a lógica que gera os estilos dinamicamente com base nos parâmetros recebidos.

---

## 🧠 Lógica de Aplicação do Padrão

O componente `Button` atua como uma **fábrica de variações visuais**. Ao invés de conter múltiplas lógicas condicionais de estilo (`if/else` ou `switch`), ele solicita a variação desejada diretamente à "fábrica" de estilos. Essa abordagem simplifica o componente e isola a lógica de criação.

### 💡 Exemplo de Uso Genérico

A API do componente permanece simples e declarativa, enquanto a complexidade da criação de estilos fica encapsulada na fábrica.

```tsx
// 1. Botão primário e grande
<Button variant="primary" size="large">
  Confirmar Ação
</Button>

// 2. Botão secundário (outline) e pequeno
<Button variant="outline" size="small">
  Cancelar
</Button>

// 3. Botão com valores padrão (default) definidos na fábrica
<Button>
  Saiba Mais
</Button>
```

### 📱 Exemplo Prático de Uso no Projeto

No código da tela `IndexScreen`, podemos observar como o componente `Button` é utilizado na prática. A mesma interface é chamada para criar botões com aparências completamente diferentes, apenas alterando a `prop` **`variant`**.

```tsx
// ...código da tela IndexScreen

<Card>
  {/* ...outros elementos do card */}
  
  {/* ✨ Botão 1: Variante "game" */}
  {/* A fábrica de estilos cria um botão com a aparência vibrante de jogo. */}
  <Button
    variant="game"
    size="default"
    onPress={() => navigation.navigate('Login')}
  >
    Começar
  </Button>
</Card>

<Card>
  {/* ...outros elementos do card */}

  {/* ✨ Botão 2: Variante "soft" */}
  {/* A fábrica de estilos cria um botão com uma aparência mais suave. */}
  <Button
    variant="soft"
    size="default"
    onPress={() => Alert.alert('...')}
  >
    Saber Mais
  </Button>
</Card>

// ...resto do código
```

#### 🔧 Análise Direta

1.  **Componente Único:** Usamos o mesmo componente `<Button>` em ambos os casos.
2.  **Variação por Propriedade:** Ao passar `variant="game"` no primeiro e `variant="soft"` no segundo, a "fábrica" interna do componente gera os estilos corretos para cada variação.
3.  **Código Limpo:** A tela `IndexScreen` não precisa saber a lógica de como um botão "game" ou "soft" é estilizado. Ela apenas solicita o tipo que deseja, tornando o código mais declarativo e de fácil manutenção.

Essa abordagem demonstra o poder do **Factory Method**: uma interface simples para criar uma família de objetos (neste caso, variações de estilo) de forma desacoplada.
