"use strict";
let nomeFormulario;
let emailFormulario;
let idadeFormulario;
let botaoFormulario;
let mensagemFormulario;
nomeFormulario = document.querySelector("body > div > div.main-agileinfo > div > form > input:nth-child(1)");
emailFormulario = document.querySelector("body > div > div.main-agileinfo > div > form > input.text.email");
idadeFormulario = document.querySelector("body > div > div.main-agileinfo > div > form > input:nth-child(3)");
botaoFormulario = document.querySelector("body > div > div.main-agileinfo > div > form > input[type=submit]:nth-child(4)");
mensagemFormulario = document.getElementById('salvo');
botaoFormulario.addEventListener('click', function (event) {
    event.preventDefault();
    let alunoFormulario = {
        nome: nomeFormulario.value,
        email: emailFormulario.value,
        idade: parseInt(idadeFormulario.value)
    };
    nomeFormulario.value = '';
    emailFormulario.value = '';
    idadeFormulario.value = '';
    mensagemFormulario.innerText = "Usuário salvo com sucesso!";
    setTimeout(function () {
        mensagemFormulario.innerText = "";
    }, 3000);
    console.log(alunoFormulario);
});
