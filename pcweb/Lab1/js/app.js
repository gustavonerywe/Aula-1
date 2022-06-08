const numberOne = document.getElementById("numberOne");
const btn = document.getElementById("botao");
const btnn = document.getElementById("btn");
const btn1 = document.getElementById("botao1");
const numberTwo = document.getElementById("numberTwo")
const getSum = document.getElementById("getSum");
const btn2 = document.getElementById("botao2");
const numberThree = document.getElementById("numberThree")

const fatorial = (numberOne) =>{
    let result = numberOne
    for(let i = 1; i < numberOne; i++){
        result = result * i;
    }
    return result
}

const potencia = (numberTwo) =>{
    let resultOfPow = numberTwo
    for(let i = 1; i <= 30; i++){
        resultOfPow =  Math.pow(numberTwo, i)
    }
    return resultOfPow;
}

const pares = (getSum) =>{
    let num = getSum;
    let aux;
    for(let i = 1; i<=num;i++){
        if(i % 2 == 0) {
            aux = aux++;
        }
    }
    return aux;
}

function fibo(numberThree){
    if (numberThree === 1) return 1;
    if (numberThree === 2) return 2;
    fibo(numberThree - 1) + fibo(numberThree - 2);
    return fibo;
}

btn.addEventListener("click", ()=>{
    const showFatorial=document.getElementById("fatorial");
    showFatorial.innerHTML = fatorial(numberOne.value);
})

btnn.addEventListener("click", ()=>{
    const showPares=document.getElementById("pares");
    showPares.innerHTML = pares(getSum.value);
})
btn1.addEventListener("click", ()=>{
    const showPow=document.getElementById("showPow");
    showPow.innerHTML = potencia(numberTwo.value)
})
btn2.addEventListener("click", ()=>{
    const showFibo=document.getElementById("showFibo");
    showFibo.innerHTML = fibo(numberThree)
})