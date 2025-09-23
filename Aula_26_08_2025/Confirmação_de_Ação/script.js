const resultado = confirm("Você deseja continuar?");
const div = document.getElementById("mensagem");

if (resultado) {
    div.innerHTML = "<p>Você clicou em OK!</p>";
} else {
    div.innerHTML = "<p>Você clicou em Cancelar!</p>";
}