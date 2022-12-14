const btnAdd50 = document.getElementById("add50");
const remove30 = document.getElementById("remove30")

remove30.addEventListener("click", ()=>{
    let carteira = Number(localStorage.getItem("carteira"))
    carteira -= 30;
    localStorage.setItem('carteira', carteira)
    console.log(carteira)
})

btnAdd50.addEventListener("click", ()=>{
    let carteira = Number(localStorage.getItem("carteira"))
    carteira += 50;
    localStorage.setItem('carteira', carteira)
    //localStorage.setItem("KEY", VALUE)
    console.log(carteira)
})