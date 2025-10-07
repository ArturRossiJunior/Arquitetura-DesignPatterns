# \# 🏗️ Arquitetura-DesignPattern

# 

# Este repositório foi criado para demonstrar a aplicação de um \*\*Design Pattern (Padrão de Projeto)\*\* na arquitetura de um app mobile desenvolvido com \*\*React Native + Expo + TypeScript\*\*. A implementação foca no padrão \*\*Factory Method\*\*, aplicado ao componente de botão reutilizável.

# 

# ---

# 

# \## 📌 Introdução

# 

# \*\*Design Patterns\*\* são soluções reutilizáveis para problemas recorrentes no desenvolvimento de software. Eles ajudam a tornar o código mais legível, desacoplado e fácil de manter. Nesta atividade, foi selecionado o padrão \*\*Factory Method\*\*, da categoria \*\*Criacional\*\*, por se encaixar diretamente na forma como os componentes visuais são organizados e reutilizados no projeto.

# 

# ---

# 

# \## 🎯 Padrão de Projeto Aplicado: Factory Method

# 

# \### 🧱 Categoria: Criacional

# 

# \### ✅ Por que foi escolhido?

# 

# Durante o desenvolvimento do aplicativo, surgiu a necessidade de criar \*\*componentes visuais reutilizáveis\*\*, como botões com diferentes estilos e tamanhos. Para evitar duplicação de código e manter uma arquitetura limpa, aplicamos o padrão \*\*Factory Method\*\* ao componente `Button`.

# 

# ---

# 

# \## 🧩 Estrutura do Componente

# 

# O componente `Button` recebe as props `variant` e `size`, e utiliza uma função `createButtonStyles(isTablet)` para gerar dinamicamente os estilos com base nas configurações informadas.

# 

# \### 🔨 Arquivos principais:

# 

# \- `components/Button.tsx`: Componente reutilizável que age como uma "fábrica configurável"

# \- `components/styles/button.styles.ts`: Lógica de criação de estilos com base em variantes e tamanhos

# 

# ---

# 

# \## 🧠 Como o Factory Method foi aplicado?

# 

# O componente `Button` atua como uma \*\*fábrica de variações visuais\*\*, permitindo que, com uma única interface, sejam criados botões com diferentes combinações de estilo e tamanho:

# 

# \### Exemplo de uso:

# 

# ```tsx

# <Button variant="primary" size="large">Salvar</Button>

# <Button variant="outline" size="small">Cancelar</Button>

# <Button>Default</Button>



