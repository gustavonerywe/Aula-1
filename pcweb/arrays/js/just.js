//Questão 01:
const btn = document.getElementById("btn")

console.log("Primeiro Instrumento - Funções Numéricas")

let sum = [1, 2, 3, 7, 8, 17];
let sumElements = 0;
for(let i = 0; i < sum.length; i++){
    sumElements += sum[i]
}
for(let k = 0; k < sum.length; k++){
   console.log(`Elemento de índice ${k}: ${sum[k]};`) 
}
console.log(`A soma desses elementos é: ${sumElements}`)
console.log("------------------------------")

let sumOdds = [0, 1, 2, 3, 4, 5];
let sumImpElements = 0;
for(let j = 0; j < sumOdds.length; j++){
    if(j % 2 == 1){
        sumImpElements += sumOdds[j]
    }
}
for(let h = 0; h < sumOdds.length; h++){
    console.log(`Elemento de índice ${h}: ${sumOdds[h]}`)
}
console.log(`A soma dos elementos ímpares é :${sumImpElements}`)
console.log("------------------------------")

let product = [6, 9, 2, 4];
let productElement = 1;
for(let q = 0; q < product.length; q++){
    productElement *= product[q];
}
for(let b = 0; b < product.length; b++){
    console.log(`Elemento de índice ${b}: ${product[b]}`)
}
console.log(`A multiplicação desses elementos é: ${productElement}`)

btn.addEventListener("click", ()=>{
    const fab = `<em>Há mais informações no console!</em>
    <p></p>
    <li>A soma dos elementos do primeiro vetor é: ${sumElements}</li>
    <li>A soma dos elementos ímpares do primeiro vetor é: ${sumImpElements}</li>
    <li>A multiplicação dos elementos do terceiro vetor é: ${productElement}</li>`
    const receive = document.getElementById("receive")
    receive.innerHTML = fab
})

//Questão 2:
const btn1 = document.getElementById("btn1")
const arrayInput = document.getElementById("arrayInput")

btn1.addEventListener("click", ()=>{
    const receive2 = document.getElementById("receive2")
    const kek = `Não consegui :-(`
    receive2.innerHTML = kek
})

//Questão 3:
const btn2 = document.getElementById("btn2")
const romanNum = document.getElementById("romanNum")

function convRoman(romanNum){
    let x = ""
    while(romanNum > 0){
        if (romanNum >= 900 && romanNum <= 1000){
            romanNum -= 900
            x += "CM"
        }
        else if(romanNum >= 400 && romanNum <= 499){
            romanNum -= 400
            x += "CD"
        }
        else if(romanNum <= 99 && romanNum >= 90){
            romanNum -= 90
            x += "XC"
        }
        else if(romanNum >= 40 && romanNum <= 49){
            romanNum -= 40
            x += "XL"
        }
        else if(romanNum == 9){
            romanNum -= 9
            x += "IX"
        }
        else if(romanNum == 4){
            romanNum -= 4
            x = "IV"
        }
        else if(romanNum >= 1000){
            romanNum -= 1000
            x += "M"
        }
        else if(romanNum >= 50 && romanNum <= 999){
            romanNum -= 500
            x += "D"
        }
        else if(romanNum >= 100 && romanNum <= 499){
            romanNum -= 100
            x += "C"
        }
        else if(romanNum >= 50 && romanNum <= 99){
            romanNum = 50
            x += "L"
        }
        else if(romanNum >= 10 && romanNum <= 49){
            romanNum -= 10
            x += "X"
        }
        else if(romanNum >= 5 && romanNum <= 9){
            romanNum -= 5
            x += "V"
        }
        else if(romanNum >= 1 && romanNum <= 4){
            romanNum -= 1
            x += "I"
        }
    }
    return x;
}
btn2.addEventListener("click", ()=>{
    const receive3 = document.getElementById("receive3")
    receive3.innerHTML = convRoman(parseInt(romanNum.value))
})

//Questão 04

const btn3 = document.getElementById("btn3")
const saqNum = document.getElementById("saqNum")

let i = ""
function saqMin(saqNum){
    while(saqNum > 0){
        if(saqNum >= 100){
            saqNum -=100
            i += "100 /"
        }
        else if(saqNum <= 99 && saqNum >= 50){
            saqNum -=50
            i += "50 /"
        }
        else if(saqNum <= 49 && saqNum >= 20){
            saqNum -=20
            i += "20 /"
        }
        else if(saqNum <= 19 && saqNum >= 10){
            saqNum -= 10
            i += "10 /"
        }
        else if(saqNum <= 9 && saqNum >= 5){
            saqNum -= 5
            i += "5 /"
        }
        else if(saqNum <= 4 && saqNum >= 2){
            saqNum -= 2
            i += "2 /"
        }
        else if(saqNum == 1){
            saqNum -= 1
            i += "1"
        }
    }
    return i;
}

btn3.addEventListener("click", ()=>{
    const receive4 = document.getElementById("receive4")
    receive4.innerHTML = saqMin(saqNum.value)
})


