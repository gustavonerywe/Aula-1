window.onload = async() => {
    await fetch('https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json')
    .then(async response => await response.json())
    .then(async responseJSON =>{
        responseJSON.forEach((item)=>{
            criaItem(item)
        })
    })
}

const criaItem = food =>{
    const show = document.querySelector('.restaurant-contain')
    const showThis = `
        <section class="restaurant-contain">
        <div class="main">
        <p class="name">${food.name}</p>
        <p class="preco">${food.price}</p>
        <p class="descricao">${food.details}</p>
        <img class="food-img" src="https://rafaelescalfoni.github.io/desenv_web/restaurante/${food.photo}">
        <section class="btn-align">
        <p class="food-code">${food.code}</p>
        <br>
        <span class="alert-client">Digite o código da comida no espaço disponibilizado no final da página!</span>
        <hr>
        </section>
    </div>
    
    </section>
    </body>
    </html>`

    show.innerHTML += showThis
}



const arrCodesOfEveryFood =  "B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, B13, B14, B15, B16, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, C17, C18, C19, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12,V1, V2, V3, V4, V5, V6, V7, DK1, DK2, DK3, VG1, VG2, VG3, VG4, VG5, VG6, VG7, VG8, VG9, VG10, VG11, VG12, VGC13, VGC14, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19,  L20, L21, L22, L23, L24, L25, L26, L27, L28, SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, DS1, DS2, NL1, NL2, NL3, NL4, NL5, NF10, NF11, NF12, NF13, CU21, CU22, CU23, PF1, PF2, PF3, PF4, PF5"

const arrThatContainsEveryPrice = [3.00, 3.00, 2.25, 6.25, 6.25, 5.95, 5.75, 7.95, 8.55, 8.90, 7.95, 4.95, 13.95, 18.95, 6.95, 2.55, 2.25, 2.75, 3.55, 3.00, 2.55, 2.55, 3.00, 3.25, 4.25, 11.95, 10.95, 10.95, 10.95, 10.95, 10.95, 10.95, 10.95, 10.95, 10.95, 10.95, 10.95, 11.95, 10.95, 10.95, 10.95, 10.95, 11.95, 10.95, 11.95, 11.45, 11.45, 11.45, 11.45, 11.45, 11.45, 11.45, 11.45, 11.45, 11.45, 11.45, 11.45, 12.45, 12.45, 12.45, 12.45, 12.45, 12.45, 12.45, 28,95, 30.95, 30.95, 9.45, 9.45, 9.45, 9.45, 9.45, 9.45, 9.45, 9.45, 9.45, 9.45, 9.45, 9.45, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75, 9.75 , 18.95, 18.95, 15.95, 19.95, 19.95, 19.95, 19.95, 19.95, 4.25, 4.25, 8.95, 9.95, 9.95, 10.95, 11.95, 12.95, 14.95, 15.95, 17.95, 11.95, 12.95, 12.95, 12.45, 16.45, 16.45, 17.45, 18.45 ]

const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const arrJustifyOfEveryFood = arrCodesOfEveryFood.split(',')
const buyItemUl = document.querySelector('#buyItem')
const form = document.querySelector('#form')
let inputBuyItemName = document.querySelector('#text')
let inputBuyItemAmount = document.querySelector('#amount')


const localStorageBuy = JSON.parse(localStorage.getItem('buyItem'))
let buyItem = localStorage.getItem('buyItem') !== null ? localStorageBuy : []


const removeBuyList = ID => {
    buyItem = buyItem.filter(buyIt => buyIt.id !== ID)
    updateLocalStorage()
    init()
    
}


setTimeout(()=>{
    const button = document.querySelector('#remove')
    button.innerHTML = ""
}, 1000 * 5) 


const addBuyListIntoDom = buyIt =>{
    const CSSclass = buyIt.amount < 0 ? 'minus' : 'plus'
    const li = document.createElement('li')

    li.classList.add(CSSclass)
    li.innerHTML = `
    ${buyIt.name} 
    <button class="delete-btn" onClick="removeBuyList(${buyIt.id})">
       x
    </button>
    `
    buyItemUl.append(li)
}


const updateBalanceValues = ()=>{
    const buyAmounts = buyItem.map(buy => buy.amount)
    const total = buyAmounts.reduce((accumulator, buy) => accumulator + buy, 0) 
    const income = buyAmounts.filter(value => value > 0).reduce((acc, value) => acc + value, 0).toFixed(2) 
    const expense = Math.abs(buyAmounts.filter(value => value < 0).reduce((acc, value) => acc + value, 0)).toFixed(2) 
    var percentOfTen = 0.1
    var improveOfTotal = total * percentOfTen
    var newTotal = (total + improveOfTotal).toFixed(2)

    balanceDisplay.textContent = `R$ ${newTotal}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
   
}

const init = ()=>{
    buyItemUl.innerHTML = ''
    buyItem.forEach(addBuyListIntoDom)
    updateBalanceValues()
}
init()

const updateLocalStorage = ()=>{
    localStorage.setItem('buyItem', JSON.stringify(buyItem))
}

const randomIdGenerator = ()=> Math.round(Math.random() * 1000)

form.addEventListener('submit', event =>{
    event.preventDefault()
        
        const buyAmount = inputBuyItemAmount.value.trim()
        const buyName = inputBuyItemName.value.trim()
        if(inputBuyItemName.value.trim() === ''){
            alert('Preencha o campo com o código do prato que deseja.')
            return
        }

        const buyIt = {
            id: randomIdGenerator(),
            name: buyName, 
            amount: Number(buyAmount)
        }
        buyItem.push(buyIt)
        init()
        updateLocalStorage()

        inputBuyItemName.value = ''
        inputBuyItemAmount.value = ''
        
})
