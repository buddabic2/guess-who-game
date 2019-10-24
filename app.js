const characteristic = [["Jean-Claude",["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"]],
["Pierre",["Male","Mustache","Brown eyes","Brown hair","Big mouth","Small nose"]],
["Jean",["Male","White hair","Big nose","Big mouth","Blue eyes"]],
["Amelie",["Female","Hat","Brown hair","Small mouth","Long hair","Brown eyes","Small nose"]],
["Mirabelle",["Female","Black hair","Earrings","Small mouth","Brown eyes","Big nose"]],
["Isabelle",["Female","Blonde hair","Glasses","Hat","Small mouth","Small nose","Brown eyes"]],
["Antonin",["Male","Brown eyes","Black hair","Small nose","Big mouth"]],
["Bernard",["Male","Brown eyes","Brown hair","Small nose","Hat"]],
["Owen",["Male","Blue eyes","Blonde hair","Small nose","Small mouth"]],
["Dylan",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Bald","Beard"]],
["Herbert",["Male","Brown eyes","Blonde hair","Big nose","Small mouth","Bald"]],
["Christine",["Female","Blue eyes","Blonde hair","Small nose","Small mouth","Long hair"]],
["Luc",["Male","Brown eyes","White hair","Small nose","Small mouth","Glasses"]],
["Cecilian",["Male","Brown eyes","Ginger hair","Small nose","Small mouth"]],
["Lionel",["Male","Brown eyes","Brown hair","Big nose","Big mouth","Mustache"]],
["Benoit",["Male","Brown eyes","Brown hair","Small mouth","Small nose","Mustache","Beard"]],
["Robert",["Male","Blue eyes","Brown hair","Big nose","Big mouth"]],
["Charline",["Female","Brown hair","White hair","Small nose","Big mouth"]],
["Renaud",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Mustache"]],
["Michel",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Beard"]],
["Pierre-Louis",["Male","Blue eyes","Brown hair","Small nose","Small mouth","Bald","Glasses"]],
["Etienne",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Glasses"]],
["Henri",["Male","Brown eyes","White hair","Small nose","Big mouth","Hat"]],
["Damien",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Hat"]]]

const maleBtn = document.querySelector('.male')
const femaleBtn = document.querySelector('.female')

const brownEyesBtn = document.querySelector('.brown-eyes')
const blueEyesBtn = document.querySelector('.blue-eyes')

const baldBtn = document.querySelector('.bald')
const whiteHairBtn = document.querySelector('.white-hair')
const brownHairBtn = document.querySelector('.brown-hair')
const blackHairBtn = document.querySelector('.black-hair')
const blondeHairBtn = document.querySelector('.blonde-hair')
const gingerHairBtn = document.querySelector('.ginger-hair')
const longHairBtn = document.querySelector('.long-hair')

const smallMouthBtn = document.querySelector('.small-mouth')
const glassesBtn = document.querySelector('.glasses')
const mustacheBtn = document.querySelector('.mustache')
const smallNoseBtn = document.querySelector('.small-nose')
const hatBtn = document.querySelector('.hat')
const earringsBtn = document.querySelector('.earrings')
const beardBtn = document.querySelector('.beard')

const buttonsForValues = [maleBtn, femaleBtn, brownEyesBtn, blueEyesBtn, baldBtn, whiteHairBtn, brownHairBtn, blackHairBtn, blondeHairBtn, gingerHairBtn, longHairBtn, smallMouthBtn, glassesBtn, mustacheBtn, smallNoseBtn, hatBtn, earringsBtn, beardBtn]

let computersChoice = Math.floor(Math.random()*24)
let computersChoiceCharacteristics = characteristic[computersChoice][1]

let currentBtnValue

let x = true

let cardsToBeTurnedOver = []

// double counts are possible
function ifUserGuessedCorrectly (){
    characteristic.forEach(array=>{
        if (!array[1].includes(currentBtnValue)){
            cardsToBeTurnedOver.push(array[0])
        }
    })
}

function ifUserGuessedIncorrectly (){
    characteristic.forEach(array=>{
        if (array[1].includes(currentBtnValue)){
            cardsToBeTurnedOver.push(array[0])
        }
    })
}

//gets users choice

buttonsForValues.forEach(button =>{
    button.addEventListener('click', () =>{
        currentBtnValue = button.value
        checkIfUserChoseACHaracteristicsThatComputersChoiceHas()
        if (x===true){
            console.log('yee')
            // turn cards that do not have my characteristic
            ifUserGuessedCorrectly()
        } else {
            console.log('nee')
            // turn cards that have my characteristic
            ifUserGuessedIncorrectly()
        }
    })
    
})

// Check if the user chose the characteristic that computers choice has

function checkIfUserChoseACHaracteristicsThatComputersChoiceHas(){
    x = computersChoiceCharacteristics.includes(currentBtnValue)
    return x
}
