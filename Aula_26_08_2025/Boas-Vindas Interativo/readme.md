# **Saudação Personalizada**
Objetivo: Criar uma página que pergunta o nome do usuário e o cumprimenta de forma personalizada.

### Conceitos Aplicados:

* **HTML**: Define a estrutura mais básica. Ele cria um título (`<h1>`) e, mais importante, uma `div` vazia com um "crachá de identificação" (`id="resultado`"). Essa `div` é o palco onde o JavaScript irá atuar.
* **CSS**: Cuida da aparência. Ele centraliza o conteúdo na tela e estiliza a `div` `resultado` para parecer uma caixa cinza-escura, tornando a mensagem mais visível e agradável.
* **JavaScript** (O Cérebro):
  * Interação (``prompt): A primeira coisa que ele faz é usar ``prompt() para exibir uma janela e pedir uma informação ao usuário (o nome).
  * Variáveis: O nome digitado pelo usuário é guardado em uma "caixinha" de memória, a variável ``nome.
  * Manipulação do DOM (`innerHTML`): O JavaScript então procura pelo palco (a `div` com `id="resultado"`) e usa o `.innerHTML` para escrever a mensagem de boas-vindas lá dentro, utilizando o valor que guardou na variável `nome`.
