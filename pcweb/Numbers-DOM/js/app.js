const btn=document.getElementById("botao");
const btnz=document.getElementById("botaoz");
const btnzz=document.getElementById("botaozz");
const firstNote=document.getElementById("nota1");
const secondNote=document.getElementById("nota2");
const thirdNote=document.getElementById("nota3");
const fahr=document.getElementById("fahr");
const first=document.getElementById("firstInput");
const second=document.getElementById("secondInput");
const btn1=document.getElementById("submit");
const prime=document.getElementById("prime");


const verifyNumber = num =>{
    num = parseFloat(num)
    return (!num || isNaN(num))? 0: num
}

const somar = (first=0, second=0)=>{
    first = verifyNumber(first)
    second = verifyNumber(second)
    return first + second;
}
const whoMax = (first=0, second=0)=>{
    first = verifyNumber(first)
    second = verifyNumber(second)
    if (first > second)
    {
        return first;
    }
    if (second > first)
    {
        return second;
    }
    if (first == second)
    {
        return first || second;
    }
}
function isPrimeOrNot(prime){
    if(prime < 1) return false;
    if (prime <= 3) return true;
    if (prime % 2 == 0 || prime % 3 == 0) return false; 

    for(let i = 5; i * i <= prime; i += 6){
        if (prime % i == 0 || prime % (i + 2) == 0) return false;
    }
    return true;
}
const pitagoras = (first=0, second=0)=>{
    let hip = Math.sqrt(first * first+second*second);
    return hip;
}
const converse = (fahr=0) =>{
    let cel = (fahr - 32) / 9;
    return cel;
}
const finalMedia = (firstNote=0, secondNote=0, thirdNote=0 )=>{
     let media = (firstNote * 2 + secondNote * 3 + thirdNote * 5) / 10;
    return media;
}
btn.addEventListener("click", ()=>{
    const getValue=document.getElementById("getValue");
    const maxNumber=document.getElementById("maxNumber");
    const calcHip=document.getElementById("calcHip");

    getValue.innerHTML = somar(first.value, second.value);
    maxNumber.innerHTML = whoMax(first.value, second.value);
    calcHip.innerHTML = pitagoras(first.value, second.value);
})

btnz.addEventListener("click", ()=>{
    const converseCelsius=document.getElementById("converseFahrenheitToCelsius");
    converseCelsius.innerHTML = converse(fahr.value);   
})
btnzz.addEventListener("click", ()=>{
    const mediaFinal=document.getElementById("mediaFinal");
    mediaFinal.innerHTML = finalMedia(firstNote.value, secondNote.value, thirdNote.value);
})
btn1.addEventListener("click", ()=>{
    const numPrimo=document.getElementById("numPrimo");
    numPrimo.innerHTML = isPrimeOrNot(prime.value);
})
