const modal = document.querySelector('.modal-container');
const btnCalcular = document.getElementById('botao');
const resultado = document.querySelector('#result');
var n1 = document.getElementById("priUnidade");
var n2 = document.getElementById("segUnidade");
var n3 = document.getElementById("terUnidade");

var nome;

while (!nome || nome.trim() === "") {
    nome = window.prompt('Digite seu nome para entrar no sistema:');
}

btnCalcular.addEventListener('click', calcular);

function calcular(event) {
    
    var nota1 = parseFloat(n1.value);
    var nota2 = parseFloat(n2.value);
    var nota3 = parseFloat(n3.value);

    var media = (nota1 + nota2 + nota3) / 3;

    var saudacao = getMensagemSaudacao();

    if (media >= 7) {
        resultado.innerHTML = `${saudacao}, ${nome}, você está Aprovado!! A média dos valores é de: ${media}`;
    } else if (media >= 4) {
        resultado.innerHTML = `${saudacao}, ${nome}, você está Reprovado, com direito à prova final!! A média dos valores é de: ${media}`;
    } else {
        resultado.innerHTML = `${saudacao}, ${nome}, você está REPROVADO!! A média dos valores é de: ${media}`;
    }

    modal.style.display = 'flex';
    event.preventDefault();
}

// Função para obter a mensagem de saudação com base no horário
function getMensagemSaudacao() {
    var horaAtual = new Date().getHours();
    if (horaAtual >= 0 && horaAtual < 12) {
        return 'Bom Dia';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        return 'Boa Tarde';
    } else {
        return 'Boa Noite';
    }
}

function closeModal(event) {
    modal.style.display = 'none';
    event.preventDefault();
}