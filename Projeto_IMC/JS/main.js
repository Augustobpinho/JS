const form = document.querySelector('#form');

form.addEventListener('submit', function (e)){
    //previne o recarregamento da página
    e.preventDefault();
    console.log('evento prevenido');


    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(peso){
        inserirResultado("Peso inválido", false);
        return;
    }
    if(altura){
        inserirResultado("Peso inválido", false);
        return;
    }
}

const imc = obterImc(peso, altura);
const classificaImc = classificacaoImc(imc);

const mensagemResultado = `Seu IMC é ${imc}, classificado como: ${classificaImc}`;
inserirResultado(mensagemResultado, true);

function classificacaoImc(imc){

    const classificacao = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];
    if(imc >=40) return classificacao[5];
    if(imc >=35) return classificacao[4];
    if(imc >=30) return classificacao[3];
    if(imc >=25) return classificacao[2];
    if(imc >=18.5) return classificacao[1];
    if(imc < 18.5) return classificacao[0];
}

function obterImc(x,y){
    return(x / y **2).toFixed(2);
}

function criarSpan(){
    const span = document.createElement('span');
    return span;
}

function inserirResultado(msg, valido){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const span = criarSpan();
    if(valido == true){
        document.getElementById('resultado').style.background = '#198754';
    }else {
        document.getElementById('resultado').style.background = '#dc3545'
    }
    span.innerHTML = msg;
    resultado.appendChild(span);
    }

