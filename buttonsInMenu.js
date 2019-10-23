const sexBtn = document.querySelector('.sex-btn');
const eyesBtn = document.querySelector('.eyes-btn');
const hairBtn = document.querySelector('.hair-btn');
const otherBtn = document.querySelector('.other-btn');
const sex = document.querySelector('.sex');
const eyes = document.querySelector('.eyes');
const hair = document.querySelector('.hair');
const other = document.querySelector('.other');

const buttonForMenu = [sexBtn, eyesBtn, hairBtn, otherBtn]
const options = [sex, eyes, hair, other]

// Here we make the interactive menu for questions about the character
buttonForMenu.forEach(button =>{
    button.addEventListener('click', ()=>{
        if(button===sexBtn){
            sex.style.display="block"
            eyes.style.display="none"
            hair.style.display="none"
            other.style.display="none"
        } else if(button===eyesBtn){
            sex.style.display="none"
            eyes.style.display="block"
            hair.style.display="none"
            other.style.display="none"           
        } else if(button===hairBtn){
            sex.style.display="none"
            eyes.style.display="none"
            hair.style.display="block"
            other.style.display="none"            
        } else if(button===otherBtn){
            sex.style.display="none"
            eyes.style.display="none"
            hair.style.display="none"
            other.style.display="block"  
        }
    })
})

