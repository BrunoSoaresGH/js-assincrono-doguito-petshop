import { clienteService } from '../service/cliente-service.js';

const getURL = new URL(window.location);
const id = getURL.searchParams.get('id');

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");

clienteService.detalhaCliente(id).then(response => {
    inputNome.value = response.nome;
    inputEmail.value = response.email;
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
    .then(() => {window.location.href = "../telas/edicao_concluida.html"})
});