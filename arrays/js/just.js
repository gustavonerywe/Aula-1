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