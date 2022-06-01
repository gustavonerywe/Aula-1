
const btn=document.getElementById("botao");

const verifyNumber = num =>{
    num = parseFloat(num)
    return (!num || isNaN(num))? 0: num
}

const somar = (first=0, second=0)=>{
    first = verifyNumber(first)
    second = verifyNumber(second)
    return first + second;
}
btn.addEventListener("click", ()=>{
    const first=document.getElementById("firstInput");
    const second=document.getElementById("secondInput");
    const getValue=document.getElementById("getValue");
    const maxNumber=document.getElementById("maxNumber");

     getValue.innerHTML = somar(first.value, second.value);
     maxNumber.innerHTML = Math.max(first, second)
})

