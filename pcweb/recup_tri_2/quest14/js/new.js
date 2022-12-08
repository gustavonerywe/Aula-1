const arrOne = ["GO", "MG", "SP", "RJ", "AM", "PA"]
arrOrganized = arrOne.sort();
const spaceElement = []
const organizeArr = spaceElement =>{
    for(let i = 0; i < arrOrganized; i++){
        arrOrganized[i] = spaceElement
    }
    return spaceElement;
}

const showElementsOne = document.getElementById("showElementsOne").innerHTML = organizeArr(arrOrganized[0])
const showElementsTwo = document.getElementById("showElementsTwo").innerHTML = organizeArr(arrOrganized[1])
const showElementsThree = document.getElementById("showElementsThree").innerHTML = organizeArr(arrOrganized[2])
const showElementsFour = document.getElementById("showElementsFour").innerHTML = organizeArr(arrOrganized[3])
const showElementsFive = document.getElementById("showElementsFive").innerHTML = organizeArr(arrOrganized[4])
const showElementsSix = document.getElementById("showElementsSix").innerHTML = organizeArr(arrOrganized[5])
