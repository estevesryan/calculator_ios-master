//pegar todos os os butões do HTML
document.getElementsByClassName('black');
document.getElementsByClassName('orange');
document.getElementsByClassName("gray")

const display = document.getElementById('display')
let digits = new Array


let newNumber;
let operation;

let getNumber = (number) => {
    let digitsTotal = digits.length + 1
    if (digitsTotal <= 8) {
        digits.push(number)
        console.log(digits)
        let allNumber = digits.join('')
        console.log(allNumber)
        display.innerHTML = allNumber
    }
    return newNumber;
}

let getOperation = (operation) => {

}



//criar o display que incrementa com o resultado

//criar função calcular usa uma variavel que receber o valor do DOM para definir qual sera a operação

//criar função para deletar so um numero

//criar função apagar tudo
