const sexBtn = document.querySelector('.sex-btn');
const eyesBtn = document.querySelector('.eyes-btn');
const hairBtn = document.querySelector('.hair-btn');
const otherBtn = document.querySelector('.other-btn');
const sex = document.querySelector('.sex');
const eyes = document.querySelector('.eyes');
const hair = document.querySelector('.hair');
const other = document.querySelector('.else');

const buttonForMenu = [sexBtn, eyesBtn, hairBtn, otherBtn]
// write a for each loop to add the menu some interactive features
// buttonForMenu.forEach(button =>{
//     button.addEventListener('click', ()=>{

//     })
// })


 sexBtn.addEventListener('click', ()=>{
     sex.style.display="block"
     eyes.style.display="none"
     hair.style.display="none"
     other.style.display="none"
 })