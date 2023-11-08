/*- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~*/


let firstNumber = prompt("Digite o primeiro numero")
let secondNumber = prompt("Digite o segundo numero")

let sum = Number(firstNumber) + Number(secondNumber)
alert(sum)

let sub = Number(firstNumber) - Number(secondNumber)
alert(sub)

let mult = Number(firstNumber) * Number(secondNumber)
alert(mult)

let div = Number(firstNumber) / Number(secondNumber)
alert(div)

let rest = Number(firstNumber) % Number(secondNumber)
alert(rest)

if(sum % 2 ==0){
  alert("A soma dos dois numeros é par")
}else{
  alert("A soma dos dois numeros é impar")
}

if(firstNumber == secondNumber){
  alert("Os dois numeros são iguais")
}else{
  alert("Os numeros não sao iguais")
}
