import { clienteService } from '../service/cliente-service.js';

const form = document.getElementById("data-form");

form.addEventListener("submit", async (event) => {

    event.preventDefault();
    try {
        const nome = event.target.querySelector("#nome").value;
        const email = event.target.querySelector("#email").value;
    
        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html';
    } catch (e) {
        console.log(e);
        window.location.href = '../telas/erro.html';
    }

});