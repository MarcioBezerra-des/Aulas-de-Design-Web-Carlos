**Objetivo:**
Exibir uma lista de textos na tela, criando dinamicamente os elementos HTML necessários.

* **Como Funciona:**
  * **Array (`[]`):** Uma lista de textos é armazenada em uma variável chamada `textos`. Em programação, uma lista como essa é chamada de array.
  * **Laço de Repetição (`forEach`)**: O código usa `forEach` para "visitar" cada item do array, um por um, e executar uma tarefa.
  * **Criação de Elementos (`createElement`):** Para cada texto na lista, um novo elemento de parágrafo (`<p>`) é criado na memória.
  * **Anexar Elementos (`appendChild`):** O parágrafo recém-criado é inserido (anexado) dentro da `div` `output` na página, tornando-o visível para o usuário.
