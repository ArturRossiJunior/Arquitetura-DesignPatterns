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

### 💡 Exemplos de Uso

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
