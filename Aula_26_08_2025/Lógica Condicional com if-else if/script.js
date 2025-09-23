var vidas = 3;
var status = "";

if (vidas == 3) {
    status = "Jogador vivo";
} else if (vidas == 2) {
    status = "Jogador ferido";
} else if (vidas == 1) {
    status = "Jogador muito ferido";
} else if (vidas == 0) {
    status = "Jogador morto";
}

document.getElementById("status").innerHTML = status;