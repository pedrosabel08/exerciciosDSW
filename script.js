function validaCampos() {
    let elemento = document.getElementById("nome");
    let elemento2 = document.getElementById("sobrenome");
    let elemento3 = document.getElementById("email");
    if (elemento.value.length < 3) {
        elemento.focus();
        elemento.style.border = "2px solid red";
        elemento.style.outline = "0";
    } else {
        elemento.style.border = "2px solid green"
    }

    if (elemento2.value.length < 3) {
        elemento2.focus();
        elemento2.style.border = "2px solid red";
        elemento2.style.outline = "0";
    } else {
        elemento2.style.border = "2px solid green"
    }

    if ((elemento3.value.length < 3) || elemento3.value.indexOf('@') == -1 || elemento3.value.indexOf('.com') == -1) {
        elemento3.focus();
        elemento3.style.border = "2px solid red";
        elemento3.style.outline = "0";
    } else {
        elemento3.style.border = "2px solid green"
    }

}

function mascaraTelefone(elemento) {
    let valor = elemento.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");

    elemento.value = valor;
}
