🏗️ Arquitetura e Design Patterns em React Native
Este repositório demonstra a aplicação prática de um Design Pattern na arquitetura de um aplicativo mobile desenvolvido com React Native + Expo + TypeScript. A implementação foca no padrão Factory Method para a criação de um componente de botão reutilizável e configurável.

📌 Introdução
Design Patterns (Padrões de Projeto) são soluções consolidadas e reutilizáveis para problemas comuns no desenvolvimento de software. A adoção desses padrões promove um código mais legível, desacoplado e de fácil manutenção.

Neste projeto, o padrão Factory Method, pertencente à categoria Criacional, foi escolhido por se alinhar perfeitamente à necessidade de organizar e reutilizar componentes visuais de forma escalável.

🎯 Padrão Aplicado: Factory Method
🧱 Categoria: Criacional
O padrão Factory Method define uma interface para criar um objeto, mas permite que as subclasses alterem o tipo de objetos que serão criados. No contexto de componentes, ele permite a criação de variações de um mesmo elemento sem expor a lógica de criação ao cliente.

✅ Justificativa da Escolha
Durante o desenvolvimento do aplicativo, surgiu a necessidade de criar múltiplos componentes visuais reutilizáveis, como botões com diferentes aparências (cores, bordas) e tamanhos. Para evitar a duplicação de código e manter uma arquitetura limpa e centralizada, aplicamos o padrão Factory Method ao nosso componente Button.

🧩 Estrutura do Componente
O componente Button funciona como uma "fábrica" que recebe as props variant e size. Com base nesses parâmetros, uma função createButtonStyles gera dinamicamente os estilos apropriados, desacoplando a lógica de estilização da implementação do componente.

🔨 Arquivos Principais
components/Button.tsx: Componente React que atua como a interface da fábrica, recebendo as configurações.

components/styles/button.styles.ts: Arquivo que contém a lógica de criação (a "fábrica" de estilos) com base nas variantes e tamanhos.

🧠 Como o Factory Method foi Aplicado?
O componente Button delega a responsabilidade de criar os estilos para a função createButtonStyles, que atua como nossa "fábrica". Isso permite que, com uma única interface (<Button />), possamos gerar inúmeras combinações de estilo e tamanho de forma limpa e previsível.

Exemplos de Uso
A seguir, exemplos de como a "fábrica" é utilizada para criar diferentes tipos de botões:

// Cria um botão primário e grande
<Button variant="primary" size="large">
  Salvar
</Button>

// Cria um botão com bordas e pequeno
<Button variant="outline" size="small">
  Cancelar
</Button>

// Utiliza os valores padrão definidos na fábrica
<Button>
  Default
</Button>
