const btnMenu = document.querySelector('.cabecalho-botao');
const navMenu= document.querySelector('.cabecalho-menu')
btnMenu.addEventListener('click',function (){
    navMenu.classList.toggle('aparecer')
    btnMenu.classList.toggle('aparecer-botao')
})  
