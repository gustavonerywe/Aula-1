const inputRaio = document.getElementById("raio")
const inputAltura = document.getElementById("altura")
const btn = document.getElementById("btn")

const calcLitro = (r, h) =>{
    const pi = Math.PI
    const litro = (pi * Math.pow(r, 2) * h) / 1000
    return litro
}


btn.addEventListener("click", ()=>{
    const demo = document.getElementById("demo")
    demo.innerHTML = `A capacidade desse corpo cilíndrico é: ${calcLitro(inputRaio.value, inputAltura.value).toFixed(2)} litros.`
    console.log(inputRaio.value)
    console.log(inputAltura.value)   
})