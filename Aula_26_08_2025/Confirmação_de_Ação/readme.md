Objetivo: Fazer uma pergunta de "Sim" ou "Não" ao usuário e mostrar na tela qual botão ele apertou.

### **Conceitos Aplicados:**

* **HTML:** Similar ao anterior, ele apenas cria a `div` com o `id="mensagem"`, que servirá como um painel para exibir a resposta do usuário.
* **CSS:** Estiliza e posiciona o "painel" no centro da tela para dar destaque à resposta.
* **JavaScript (O Cérebro):**
    * **Interação (`confirm`):** Usa `confirm()` para fazer uma pergunta que só tem duas respostas possíveis: OK (que para o código significa `true`, ou "verdadeiro") e Cancelar (que significa `false`, ou "falso").
    * **Variáveis:** A resposta do usuário (`true` ou `false`) é armazenada na variável `resultado`.
    * **Lógica Condicional (`if/else`):** Aqui está o ponto principal. O código toma uma decisão: SE (`if`) o valor na variável `resultado` for `true`, ele prepara uma mensagem. SENÃO (`else`), ele prepara outra mensagem.
    * **Manipulação do DOM (`innerHTML`):** Após decidir qual mensagem usar, ele encontra a `div` `mensagem` e a exibe na tela.
