//pegar todos os os butões do HTML
document.getElementsByClassName('black');
document.getElementsByClassName('orange');
document.getElementsByClassName("gray")

//button delete
const del = document.getElementById('AC')

const display = document.getElementById('display')
let firstDigits = new Array
let secondsDigits = new Array
let allNumber



//pick up number from keyboard
let getNumber = (number) => {
    let digitsTotal = firstDigits.length 
    if (digitsTotal <= 7) {
        firstDigits.push(number)
        console.log(firstDigits)
        allNumber = firstDigits.join('')
        console.log(allNumber)
        display.innerHTML = allNumber
    }
    
    
    //call function to turn button
    turnButton(firstDigits[0])
    
    return firstDigits
}
    //function to turn button from AC to C
    const turnButton = (number) => {
        if (number > 0) {
            del.innerHTML = "C"
    }
}

//functio delete number
function deleteNumber(){
    firstDigits.pop()
    allNumber = firstDigits.join('')
    display.innerHTML = allNumber
    if (allNumber <= 0) {
        display.innerHTML = 0
    }
}



let getOperation = (operation) => {
    
}



//criar o display que incrementa com o resultado

//criar função calcular usa uma variavel que receber o valor do DOM para definir qual sera a operação

//criar função para deletar so um numero

//criar função apagar tudo
