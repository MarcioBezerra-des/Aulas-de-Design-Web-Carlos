const output = document.getElementById("output");

const textos = [
    "Marcio Bezerra Cavalcanti Junior",
    "4º Semestre de Ciência da Computação",
    "Aula de JavaScript",
    "Professor Carlos"
];

textos.forEach(texto => {
    const p = document.createElement("p");
    p.textContent = texto;
    output.appendChild(p);
});