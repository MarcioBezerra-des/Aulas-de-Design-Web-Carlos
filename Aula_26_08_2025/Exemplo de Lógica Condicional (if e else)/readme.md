**Objetivo:** Simular um sistema de videogame simples, verificando se o jogador está vivo ou morto com base em suas vidas.

### **Conceitos Aplicados:**

* **HTML:** Apenas cria o elemento `div` com `id="status"` para funcionar como um placar de status.
* **CSS:** Formata o placar para que ele tenha uma aparência de "interface de jogo", centralizado e com destaque.
* **JavaScript (O Cérebro):**
  * **Variáveis:** O código começa definindo o estado do jogo. Ele cria a variável `vidas` e define seu valor como `3`.
  * **Lógica Condicional (`if/else`):** O cérebro aqui faz uma verificação matemática simples: SE (`if`) o valor da variável `vidas` for maior que 0, ele conclui que o jogador está vivo. SENÃO (`else`), ele conclui que o jogador está morto. É uma decisão com apenas duas possibilidades.
  * **Manipulação do DOM (`innerHTML`):** Ele pega a conclusão da sua decisão ("Jogador vivo" ou "Jogador morto") e a escreve dentro da `div` `status`.
