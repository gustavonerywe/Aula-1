//Questão 01
const arrOne = [5, 2];
const demo1 = document.getElementById("demo1").innerHTML = `<em>Antes da função de ordenação: ${arrOne}</em>`

const sortFunc = arrOne =>{
    //Percorrendo o array
    for(let i = 0; i < arrOne.length; i++){
        //Verificando se o numero que antecede é maior do que o número que procede
        if(arrOne[i] > arrOne[i+1]){
            const aux = arrOne[i]
            arrOne[i] = arrOne[i+1]
            arrOne[i+1] = aux;
        }
    }
    return arrOne
}

//Antes da função
console.log(arrOne)
sortFunc(arrOne)
//depois da função
console.log(arrOne)


const demo2 = document.getElementById("demo2").innerHTML = `<strong>Depois da função de ordenação: ${sortFunc(arrOne)}</strong>`







//Questão 02

const arrTwo = [4, 1, 2];

const demo3 = document.getElementById("demo3").innerHTML = `<em>Antes da função de ordenação: ${arrTwo}</em>`

//Antes da função
console.log(arrTwo)
sortFunc(arrTwo)
//depois da função
console.log(arrTwo)

const demo4 = document.getElementById("demo4").innerHTML = `<strong>Depois da função de ordenação: ${sortFunc(arrTwo)}</strong>`





//Questão 04

const btn = document.getElementById("btn");
const arrayInput = document.getElementById("arrayInput")


const arrUserInput = arrayInput.value.split('');

const sortFuncReverse = arrUserInput =>{
    const lenUser = arrUserInput.length
    let j = lenUser - 1;
    for(let i = 0; i < Math.ceil(lenUser/lenUser); i++){
        [arrUserInput[i], arrUserInput[j]] =  [arrUserInput[j], arrUserInput[i]]
    }
    return arrUserInput
}

//Antes da função
console.log(arrUserInput)
//depois da função
console.log(sortFuncReverse(arrUserInput))

btn.addEventListener("click", function(){
    const demo5 = document.getElementById("demo5").innerHTML = `A sequência digitada em formato de array é: <br> <em>arrInputUser</em> => [${arrayInput.value.split('')}]`
    const demo6 = document.getElementById("demo6").innerHTML = `<strong>Depois da função de ordenação reversa: <br> <em>arrInputUser</em> => [${arrUserInput}]</strong>`
})





//Questão 03:

const arrThree = [3, 2, 1]

//Antes da função
console.log(arrThree)
//depois da função
console.log(sortFuncReverse(arrThree))


const demo9 = document.getElementById("demo9").innerHTML = `<em>Antes da função de ordenação reversa: ${arrThree}</em>`
const demo10 = document.getElementById("demo10").innerHTML = `<strong>Depois da função de ordenação reversa: ${sortFuncReverse(arrThree)}</strong>`



//Questão 05

const btn2 = document.getElementById("btn2");
const arrayInputTwo = document.getElementById("arrayInputTwo")

const arrInput = arrayInputTwo.value.split('');

const sortFunction = arrInput =>{
    //Percorrendo o array
    for(let i = 0; i < (arrInput.length); i++){
        //Verificando se o numero que antecede é maior do que o número que procede
        if(arrInput[i] > arrInput[i+1]){
            const aux = arrInput[i]
            arrInput[i] = arrInput[i+1]
            arrInput[i+1] = aux;
        }
    }
    return arrInput
}

//Antes da função
console.log(arrInput)
sortFunction(arrInput)
//depois da função
console.log(arrInput)

const demo7 = document.getElementById("demo7").innerHTML = `<strong>Depois da função de ordenação: ${sortFunction(arrInput)}</strong>`
