//fazer uma função que armazene a idade de uma pessoa

//Método com arguments:

function agePerson(){
    let qtdMaioresDeIdade = 0
    let qtdDeMulheres = 0;
    let qtdDeHomens = 0;    
    let acumulador = 0;
    let totalIdade = 0;

    for(let i = 0; i < arguments.length; i++){
        acumulador += arguments[i]
        if(arguments[i].age >= 18) {
            qtdMaioresDeIdade++
        }
        if(arguments[i].gender == 'F'){
            qtdDeMulheres++
        }
        else if (arguments[i].gender == 'M'){
            qtdDeHomens++
        }
        totalIdade = acumulador / arguments[i]
    }
    return `A quantidade de pessoas que são maiores de idade é: ${qtdMaioresDeIdade}, a quantidade de pessoas do gênero masculino é ${qtdDeHomens}, a quantidade de pessoas do gênero feminino é ${qtdDeMulheres}, a média das idades é${totalIdade}`
}
agePerson();
console.log(agePerson(Person(18,'M'), Person(55,'F'), Person(3,'M')))

function Person (age, gender) {
    return {age:age, gender:gender}
}

//Programa para receber uma frase (string) que retorne qual a letra mais repetida e quantas vezes ela apareceu
function countWord(frase){
    let arr = frase.split = ""
    let occur = 0
    let commonLetter = ''

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != " "){
            //contar ocorrencias da letra da vez
        let occurCurrentLetter = occurrencyCount(arr, arr[i])
        // se a letra da vez tiver mais ocorrencias, substituir commonLetter e occor
        if(occur < occurCurrentLetter){
            occur = occurCurrentLetter
            commonLetter = arr[i]
        }
        }
    }
    console.log(occur)
    //return occur
}

function occurrencyCount(listaLetra, letter) {
    let occur=0
    for(let i=0; i<listaLetra.length; i++){
        if(listaLetra[i]==letter) {
            occur++
        }
    }
    return occur
}
countWord("guzubuoupu");

function orderNumber(...order){
    let acumulador = 0; 
    order.forEach(elementos =>{
        order.sort()
    })   
 return order
}   

console.log(orderNumber(9, 8, 4, 5, 8, 1, 3, 2, 6, 7, 93))



