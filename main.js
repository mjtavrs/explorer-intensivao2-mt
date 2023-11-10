//First Question
alert('Hello World!')

//Second Question
let firstNumber = Number(prompt('Digite o valor do primeiro número para somar'))
let secondNumber = Number(prompt('Digite o valor do segundo número para somar'))

alert(firstNumber + secondNumber)

//Third Question
let thirdQuestionVariable = prompt('Entre com um valor para checarmos se é um número')
let checkIfIsNumber = (thirdQuestionVariable >= 0 && thirdQuestionVariable <= 999999999999999999999999999) ? Number(thirdQuestionVariable) : thirdQuestionVariable

alert(typeof checkIfIsNumber === 'number' ? 'É um número' : 'Não é um número')

//Fourth Question
let fourthQuestionVariable = prompt('Entre com um valor para checarmos se é uma string')

alert(typeof fourthQuestionVariable === 'string' ? 'É uma string' : 'Não é uma string')

//Fifth Question
let fifthQuestionVariable = prompt('Entre com um valor para checarmos se é um boolean')

alert(fifthQuestionVariable == 'true' || fifthQuestionVariable == 'false' ? 'É um boolean' : 'Não é um boolean')

//Sixth Question
let newFirstNumber = Number(prompt('Digite o novo primeiro número'))
let newSecondNumber = Number(prompt('Digite o novo segundo número'))

alert(`A subtração entre ${newFirstNumber} e ${newSecondNumber} é igual a ${newFirstNumber - newSecondNumber}`)

//Seventh Question
alert(`A multiplicação entre ${newFirstNumber} e ${newSecondNumber} é igual a ${newFirstNumber * newSecondNumber}`)

//Eigth Question
alert(`A divisão entre ${newFirstNumber} e ${newSecondNumber} é igual a ${newFirstNumber / newSecondNumber}`)

//Ninth Question & Tenth Question
let ninthQuestionVariable = prompt('Digite um número para checarmos se é par ou ímpar')

if (ninthQuestionVariable % 2 === 0) {
    alert('Número par')
} else {
    alert('Número ímpar')
}
