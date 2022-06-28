const btn = document.querySelector('#menuBtn')
const menu = document.querySelector('#menu')

btn.addEventListener('click', (event) =>{
    btn.classList.toggle('open')
    
    menu.classList.toggle('hidden')
})
