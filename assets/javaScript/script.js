const btnMenu = document.querySelector('.cabecalho-botao');
const navMenu= document.querySelector('.cabecalho-menu')
btnMenu.addEventListener('click',function (){
    navMenu.classList.toggle('aparecer')
    btnMenu.classList.toggle('aparecer-botao')
})  
window.sr = ScrollReveal({ reset:true});

sr.reveal('.inicio-img', {duration:1000});
sr.reveal('.titulo-menor', {duration:2000});
sr.reveal('.paragrafos', {duration:3000});
sr.reveal('.subtitulo', {duration:2000});
sr.reveal('.info', {duration:5000});
sr.reveal('.planos-card', {duration:2000});
sr.reveal('.planos-beneficios', {duration:2000});
sr.reveal('.turbinar-img', {duration:1000});
sr.reveal('.rodape', {duration:1000});
sr.reveal('.copy', {duration:2000});

sr.reveal('.card1', {duration: 2000});
sr.reveal('.card2', {duration: 2000});
sr.reveal('.card3', {duration: 2000});
sr.reveal('.card4', {duration: 2000});