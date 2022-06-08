const numberOne = document.getElementById("numberOne");
const btn = document.getElementById("botao");
const btnn = document.getElementById("btn");

const fatorial = (numberOne) =>{
    let result = numberOne
    for(let i = 1; i < numberOne; i++){
        result = result * i;
    }
    return result
}
const pares = ()=>{
    let num = 1000;
    for(let i = 1; i < num; i++){
        if(i % 2 == 0){
            return i +;
        }
    }
}
btn.addEventListener("click", ()=>{
    const showFatorial=document.getElementById("fatorial");
    showFatorial.innerHTML = fatorial(numberOne.value);
})

btnn.addEventListener("click", ()=>{
    const showPares=document.getElementById("pares");
    showPares.innerHTML = pares();
})