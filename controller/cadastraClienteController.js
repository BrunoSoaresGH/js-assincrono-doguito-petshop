import { clienteService } from '../service/cliente-service.js';

const form = document.getElementById("data-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = event.target.querySelector("#nome").value;
    const email = event.target.querySelector("#email").value;

    clienteService.criaCliente(nome, email).then(() => {
        window.location.href = '../telas/cadastro_concluido.html';
    })
});