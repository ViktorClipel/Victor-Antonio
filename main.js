let saldo = 1000;
let apostaInput = document.getElementById('aposta');
let saldoDisplay = document.getElementById('saldo');
let roda = document.querySelector('.roda');
let botao = document.querySelector('.botao');
let valor = Math.ceil(Math.random() * 3600);

botao.onclick = function() {
    let aposta = parseInt(apostaInput.value);
    if (aposta > saldo) {
        alert("Saldo insuficiente para essa aposta.");
        return;
    }

    valor += Math.ceil(Math.random() * 3600); 
    roda.style.transform = "rotate(" + valor + "deg)";

    setTimeout(() => {
        let angle = valor % 360;
        let index = Math.floor(angle / 45);
        let numberElements = document.querySelectorAll('.number span');
        let ganho = parseInt(numberElements[index].textContent);

        let totalGanho = ganho * aposta;

        saldo += totalGanho - aposta;
        saldoDisplay.textContent = "Saldo: R$" + saldo;

        alert("Você ganhou R$" + totalGanho + "!");
    }, 5000);
};

let CADASTRO = document.querySelector(".cadastro");
CADASTRO.onclick = () => {
    const cadastro_input_e_mail = prompt("digite seu e-mail");
    const cadastro_input_senha = prompt("digite sua senha");
};

let ENTRAR = document.querySelector(".entrar");
ENTRAR.onclick = () => {
    const entrar_input_email = prompt("digite seu e-mail");
};

const dio_clash = document.querySelector(".dio-clash");
function teste() {
    alert("DIONATAN");
}
