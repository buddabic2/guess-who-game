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

let currentBtnValue 

buttonsForValues.forEach(button =>{
    button.addEventListener('click', () =>{
        currentBtnValue = button.value
    })
})


// write a loop nested in a loop which is checking if an element belongs to the set of characteristics and add the logic to the game