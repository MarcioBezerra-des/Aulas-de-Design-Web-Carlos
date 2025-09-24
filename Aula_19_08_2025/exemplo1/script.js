window.onload = function() {
    checkCookies();
};

function checkCookies() {
    const alertBox = document.getElementById('custom-alert');
    const alertMsg = document.getElementById('custom-alert-message');
    if (navigator.cookieEnabled) {
        alertMsg.textContent = "Cookies são permitidos neste navegador.";
    } else {
        alertMsg.textContent = "Cookies não são permitidos neste navegador.";
    }
    alertBox.style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('custom-alert').style.display = 'none';
    document.getElementById('mensagem-central').style.display = 'block';
}