# **1. Exibição de Dados**
* **Objetivo:** Exibir uma lista de textos na tela, criando dinamicamente os elementos HTML necessários.
* **Como Funciona:**
  * **Array (`[]`):** Uma lista de textos é armazenada em uma variável chamada `textos`. Em programação, uma lista como essa é chamada de array.
  * **Laço de Repetição (`forEach`)**: O código usa `forEach` para "visitar" cada item do array, um por um, e executar uma tarefa.
  * **Criação de Elementos (`createElement`):** Para cada texto na lista, um novo elemento de parágrafo (`<p>`) é criado na memória.
  * **Anexar Elementos (`appendChild`):** O parágrafo recém-criado é inserido (anexado) dentro da `div` `output` na página, tornando-o visível para o usuário.

# **2. Saudação Personalizada**
* **Objetivo:** Perguntar o nome do usuário e exibir uma mensagem de boas-vindas na tela.
* **Como Funciona:**
  * Usa a função `prompt()` para capturar o nome digitado.
  * Armazena o nome em uma variável.
  * Usa `.innerHTML` para escrever a mensagem personalizada dentro de uma `div` no HTML.
    
# **3. Confirmação de Ação**
* **Objetivo:** Exibir uma caixa de diálogo com "OK" e "Cancelar" e mostrar qual opção o usuário escolheu.
* **Como Funciona:**
  * Usa a função `confirm()` para obter uma resposta `true` (OK) ou `false` (Cancelar).
  * Uma estrutura `if/else` verifica essa resposta.
  * A mensagem correspondente ("Clicou em OK!" ou "Clicou em Cancelar!") é exibida na tela com `.innerHTML`.

# **4. Status Simples do Jogador**
* **Objetivo:** Verificar se um jogador está vivo com base em um número de vidas.
* **Como Funciona:**
  * Uma variável `vidas` é definida (ex: `vidas = 3`).
  * Um `if/else` checa se `vidas` é maior que 0.
  * Exibe "Jogador vivo" ou "Jogador morto" dependendo do resultado da verificação.

# **5.Status Detalhado do Jogador**
* **Objetivo:** Exibir um status diferente para o jogador para cada quantidade de vida que ele possui (3, 2, 1 ou 0).
* **Como Funciona:**
  * Usa uma variável `vidas`.
  * Uma cadeia de `if / else if` verifica o valor exato da variável.
  * Para cada valor, uma mensagem de status diferente ("Jogador vivo", "Jogador ferido", etc.) é definida e exibida na tela.
