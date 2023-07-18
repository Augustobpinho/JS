/*//console.log() serve para mostrar na tela algo

console.log("Hello World, no arquivo JS");

//concatenação
console.log(1 + "1");
//JS entendeu que era uma substituição mesmo sendo uma strig e um tipo numérioco
console.log(1 * "1");

//declaração de var´vel com a palavra reservada var
console.log(1 - "1");

var x = 10;
let y = 11;
 var x = 11; //- variáveis criadas com var podem ser sobreescritas novamente
//let y = 11; variáveis criadas com o comando let não permitem serem sobreescritas


console.log(typeof(x));
//alguns casos o JS não consegue calcular string com númericom retornando NaN(número não númerico)
console.log("aula" * 2);
//JS não necessia colocar um tipo de dado
//mas caso queira usamos o tipo number ppara numericos(int ou float/double)
let numero = Number("50");
let numeroString = String(50);
let casasDecimais = 10.9988;

console.log(typeof(numero));
console.log(typeof(numeroString));
//exemplo onde o typeof retorna tipo Number para um número com casas decimais.

console.log(typeof(casasDecimais));

console.log(Math.pow(2,2)); //potência de números pow = potência

//raandom, para entregar número aleatório // parseInt serve para converter em número inteiro
console.log(Math.random());
console.log(parseInt(Math.random()*20));

document.querySelector("h1").innerHTML = "Meu título no JS";
document.getElementById("tituloId").innerHTML = "Meu Título alterado com id no JS";
document.querySelector(".tituloClass").innerHTML = "Meu título alterado com querySelector class"*/


//vetor em JS, segue mesmo padrão java, os dados tem que ser tipo
var vetorNumerico = [1, 2, 3, 4, 5];

//recupera o indice do vetor e retorna o valor no indice
console.log(vetorNumerico[0]);

function multiplicar(a, b){
        console.log(a * b)
}
multiplicar(10, 10);

function funcaoComRetorno(x, y){
    return x * y;
}
//ArrowFuntion => função de seta 
var mensagemOla = () => {
    return"Olá novamente"
}

console.log(mensagemOla());


document.getElementById("recebeuFoco").onfocus = function(){
    focado()
}
function focado(){
    document.getElementById("recebeuFoco").style.background = "green"
}
function valorDigitado(){
    let recebido = document.getElementById("recebeuFoco").value; 
    alert("valor recebido via input: " + recebido);
}