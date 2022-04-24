//pegar todos os os butões do HTML
document.getElementsByClassName('black');
document.getElementsByClassName('orange');
document.getElementsByClassName("gray")

class makeNumber01 {
    constructor (numbers01) {
        this.values = numbers01
    }
}

class makeNumber02 {
    constructor (numbers01) {
        this.values = numbers01
    }
}



//button delete
const del = document.getElementById('AC')

const display = document.getElementById('display')

//chamar uma função para limpar essas variaveis
let numberInserted = new Array ();
let numbers01;
let n1;
let n2;


//pick up number from keyboard
function getNumber (number){
    const numInsert = new Array();
    if (numberInserted.length < 8){
    numInsert.pop()
    numInsert.push(number)
    numberInserted.push(numInsert[0])

    //transform string to number
    numbers01 = parseInt(numberInserted.join('')) 
    displayNumbers()
    console.log(numInsert[0])
    }
    else {
        alert("Numero maximo alcançado")
    }
}

//first digits
function makeN1() {
    n1 = new makeNumber01(numbers01).values
    console.log(n1)
}

//seconds digits
function makeN2(){
    n2 = new makeNumber02 (numbers01).values
    console.log(n2)
}

//display numbers
function displayNumbers () {
    display.innerHTML = numberInserted.join('')

    if (numberInserted.length > 0){
        del.innerHTML = "C" 
    }
    else {
        del.innerHTML = "AC"
    }
}

//delete button
function deleteNumber(){
    numberInserted.pop()
    displayNumbers()
    if (numberInserted.length <= 0) {
        display.innerHTML = 0
    }
}

/*let getNumber = (number) => {
    let digitsTotal = firstDigits.length 
    if (digitsTotal <= 7) {
        firstDigits.push(number)
        console.log(firstDigits)
        allNumber = firstDigits.join('')
        console.log(allNumber)
        display.innerHTML = allNumber
    } */
    
 
/*
    //call function to turn button
    turnButton(firstDigits[0])
    
    return firstDigits

    //function to turn button from AC to C
    const turnButton = (number) => {
    if (allNumber > 0) {
            del.innerHTML = "C"
    }
    else {
        del.innerHTML = "AC"
    }
}
*/
//functio delete number

//criar o display que incrementa com o resultado

//criar função calcular usa uma variavel que receber o valor do DOM para definir qual sera a operação

//criar função para deletar so um numero

//criar função apagar tudo
