# 1. **Medindo a Janela (inner.html)**
**Objetivo do Código**
Este código cria uma página que, ao clicar em um botão, mede a largura e a altura exatas da área visível do navegador (a viewport) e exibe essas medidas na tela.

### **Conceitos Aplicados**
* **HTML:** Define a estrutura com um título `<h2>`, um parágrafo `<p>` (com a identidade `id="demo"`) para mostrar o resultado, e um botão `<button>`.
* **JavaScript (O Cérebro):**
  * **Funções (`function myFunction()`):** Uma função é um bloco de código que só é executado quando é "chamado". Aqui, criamos a função `myFunction` para realizar a medição.
  * **Propriedades do Objeto `window`:** O JavaScript enxerga o navegador como um objeto chamado `window.` Usamos `window.innerWidth` e `window.innerHeight` para pegar a largura e a altura da janela, respectivamente.
  * **Variáveis:** Os valores de largura e altura são guardados nas variáveis `w` e `h`.
  * **Manipulação do DOM:** O código encontra o parágrafo com `id="demo"` e usa `.innerHTML` para escrever o resultado das medições dentro dele.
  * **Eventos (`onclick`):** O atributo `onclick="myFunction()"` no botão é o gatilho. Ele diz ao navegador: "Quando este botão for clicado, execute a função `myFunction`".

# 2. **Eventos Diretos no HTML (events.html)**
**Objetivo do Código**
Demonstrar a forma mais direta de usar um evento em JavaScript: colocar a ação diretamente dentro da tag HTML. Ao clicar em um título `<h1>`, o próprio texto do título é alterado.

### **Conceitos Aplicados**
* **HTML:** A estrutura é mínima, contendo apenas um título `<h1>` com um texto inicial.
* **JavaScript e Eventos (Tudo junto!):**
  * **Evento `onclick` direto:** O código JavaScript `this.innerHTML = '...'` está embutido diretamente no atributo `onclick` do `<h1>`.
  * **A Palavra-chave `this`:** Neste contexto, `this` é uma palavra especial que significa "este próprio elemento". Portanto, `this.innerHTML` se traduz como "o conteúdo HTML deste `<h1>`".
  * **Ação Imediata:** Quando o `<h1>` é clicado, o navegador executa o código que está no `onclick`, trocando o texto original pelo novo texto. É uma forma rápida e simples de adicionar interatividade, mas é menos organizada para códigos mais complexos.

# 3. **Adicionando "Ouvintes" de Eventos (`event_Listener.html`)**
**Objetivo do Conceito**
A forma mais robusta e recomendada de lidar com eventos é separar completamente o JavaScript do HTML usando `addEventListener`. Em vez de colocar `onclick` no HTML, nós usamos JavaScript para "escutar" por eventos que acontecem em um elemento.

### **Como Funcionaria com `addEventListener`**
Vamos reescrever o código do `events.html` usando a forma correta para ilustrar o conceito.

* **HTML (mais limpo):**
~~~hmtl
<h1 id="meuTitulo">Clique nesse link para testar o evento</h1>
~~~

* **JavaScript (separado):**
~~~js
// 1. Encontra o elemento no HTML
const titulo = document.getElementById("meuTitulo");

// 2. Adiciona um "ouvinte" de eventos a ele
titulo.addEventListener("click", function() {
    // 3. Define o que acontece quando o evento 'click' ocorrer
    this.innerHTML = "Isso acontece quando usamos um Event Listener.";
});
~~~
### **Conceitos Aplicados (Método Moderno)**
* **Separação de Responsabilidades:** O HTML cuida apenas da estrutura, enquanto o JavaScript cuida de todo o comportamento. Isso deixa o código muito mais organizado e fácil de manter.
* **`addEventListener()`:** Este é um método que "conecta" um "ouvinte" a um elemento HTML. Ele precisa de dois argumentos principais:
  * O nome do evento que ele deve escutar (ex: `"click"`, `"mouseover"`, `"keydown"`).
  * A função que deve ser executada quando aquele evento acontecer.
* **Flexibilidade:** Com `addEventListener`, você pode adicionar múltiplos "ouvintes" para o mesmo evento no mesmo elemento, algo que não é possível com o `onclick` direto no HTML.
