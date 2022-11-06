//função sem parâmetro
var operacoes = function(){console.log('\nVamos Somar e Multiplicar!')}

//função tradicional com retorno
function somar(n1,n2){
    var soma = parseFloat(n1) + parseFloat(n2)
    resultado = 'O resultado da soma é ' + soma
    return resultado
}

//arrow function
var multiplicar = (n3,n4)=>'O resultado da multiplicação é ' + n3*n4

operacoes()
console.log('\nVamos começar SOMANDO!\n')
var readlineSync = require('readline-sync')
var n1 = readlineSync.question('Digite o primeiro valor: ');
var n2 = readlineSync.question('Digite o segundo valor: ');
console.log(somar(n1,n2));

console.log('\nAgora vamos MULTIPLICAR!\n')
var n3 = readlineSync.question('Digite o primeiro valor: ');
var n4 = readlineSync.question('Digite o segundo valor: ');
console.log(multiplicar(n3,n4));
