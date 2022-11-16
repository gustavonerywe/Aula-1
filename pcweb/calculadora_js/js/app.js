let calculadora = document.querySelector(".calc");

let display = document.querySelector(".calc_display");

const adicionaDigito = (digito, display) => {
    
        //adicionando valores no display

        /*
        se número:
            valor do display = valor do display + valor da tecla

        */
    display.textContent = display.textContent == "0"?digito :display.textContent + digito
}

const somar = (operador1, operador2) =>{
    operador1 + operador2
}

calculadora.addEventListener("click", function(event){
    let elementoClicado = event.target
    if(elementoClicado.tagName.toLowerCase() == "button"){
        console.log(`Botão clicado: ${elementoClicado.textContent}`)
    adicionaDigito(elementoClicado.textContent, display)
      
    }   
})

/*
desafios
número decimal
    adicionar o ponto

Operações
Soma

*/