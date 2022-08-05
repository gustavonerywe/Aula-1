const searchInput = document.getElementById("search")
const btn = document.getElementById("btn")
const replaceInput = document.getElementById("replace")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const justText = document.getElementById("justText")
const numWords = document.getElementById("numWords")
const numLetters = document.getElementById("numLetters")

const textRef = justText => justText.value.replace(/[,.?"!':;`/\\]/g, "").toLowerCase() 

const countWords = (justText)=>{
    
}

const splitText = text => text.split(" ")
    
btn2.addEventListener("click", ()=>{
    const ref =  textRef(justText)    
    const sep = splitText(ref)
   
    console.log("show de bola")
})