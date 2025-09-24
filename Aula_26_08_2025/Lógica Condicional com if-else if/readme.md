**Objetivo:** Evoluir o sistema anterior para mostrar mensagens diferentes para cada quantidade de vida que o jogador possui.

### **Conceitos Aplicados:**

* **HTML e CSS:** A função deles é exatamente a mesma do projeto anterior: criar e estilizar o "placar de status". A mudança está toda na inteligência do código.
* **JavaScript (O Cérebro):**
  * **Variáveis:** Começa da mesma forma, definindo var vidas = 3;.
  * **Lógica Condicional Avançada (if / else if / else):** Esta é a grande diferença. Em vez de uma única pergunta, o código faz uma "entrevista" com a variável vidas:
    * Primeiro ele pergunta: "O valor de vidas é igual a 3?". SE (if) sim, define o status como "Jogador vivo".
    * Se a resposta for não, ele parte para a próxima pergunta: "SENÃO, SE" (else if) o valor for igual a 2, define como "Jogador ferido".
    * Ele continua essa sequência de verificações (else if) para cada possibilidade.
  * **Manipulação do DOM (innerHTML):** Depois de passar pela "entrevista" e decidir qual é a mensagem de status correta, ele a exibe na div status na tela.
