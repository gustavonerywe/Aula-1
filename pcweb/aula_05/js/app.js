const btn=document.getElementById("submit");
const birthday=document.getElementById("birthday");
const timeLived=document.getElementById("timeLived");

const hoursLived = (timeLived)=>{
    let today = new Date();
    timeLived = new Date(birthday);
    let diff = today - timeLived
    return diff;
}

btn.addEventListener("click", ()=>{
    timeLived.innerHTML = hoursLived(birthday.value)  
})