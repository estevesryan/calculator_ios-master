//pegar todos os os butões do HTML
document.getElementsByClassName('black');
document.getElementsByClassName('orange');
document.getElementsByClassName("gray")

//operation buttons 
document.getElementById('porcent').innerHTML
document.getElementById('resulted')

//to turn numbers to negative
negativeButton = document.getElementById('negativeButton')

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
let result;

//pick up number from keyboard
function getNumber (number){
    const numInsert = new Array();
    if (numberInserted.length < 8){
    numInsert.pop()
    numInsert.push(number)
    numberInserted.push(numInsert[0])

    //transform string to number
    numbers01 = parseInt(numberInserted.join('')) 
    displayNumbers(numbers01)
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
function displayNumbers (which) {
    display.innerHTML = which

    if (numberInserted.length > 0){
        del.innerHTML = "C" 
    }
    else {
        del.innerHTML = "AC"
    }
}

//delete button
function deleteNumber(){
    if (numberInserted.length > 0){
    numberInserted.pop()
    numbers01 = parseInt(numberInserted.join(''))
    if (numbers01 < 0){
        numbers01 = parseInt(numberInserted.join(''))
        turnNegative()
        }
    }
    else{
        clearAll()
        numbers01 = parseInt(numberInserted.join(''))
    }
    displayNumbers(numbers01)
    if (numberInserted.length <= 0) {
        display.innerHTML = 0
    }
}

function turnNegative () {
    numbers01 = numbers01 * -1
    displayNumbers(numbers01)
}

function clearAll () {
     numberInserted = new Array ();
     numbers01 = 0
}

function porcent () {
    alert("em breve disponivel")
}

const operadores = new Array()

function getOperadores (ope) {
    operadores.pop()
    operadores.push(ope)

    makeN1();
    clearAll()
    displayNumbers(numbers01)

}

function somar() {
    result = n1 + n2 
    displayNumbers(result)
}

function subtrair (){
    result = n1 - n2
    displayNumbers(result)
}

function multiple() {
    result = n1 * n2 
    displayNumbers(result)
}

function divided() {
    result = n1 / n2 
    displayNumbers(result)
}

function resulted() {
    makeN2()
    clearAll()
    
    if (n1 == 0){
        n1 = result
        verify()
    }
    else {
        verify()
    }

function verify(){
        if (operadores[0] == "+"){
            somar()
            n1 = 0 
        }
        else if (operadores[0] == "-"){
            subtrair()
        }
        else if (operadores[0] == "*"){
            multiple()
        }
        else {
            divided()
        }
    }
}
//criar função calcular usa uma variavel que receber o valor do DOM para definir qual sera a operação

//criar função para deletar so um numero

//criar função apagar tudo
