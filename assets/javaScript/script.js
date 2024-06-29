const btnMenu = document.querySelector('.cabecalho-botao');
const navMenu= document.querySelector('.cabecalho-menu')
btnMenu.addEventListener('click',function (){
    navMenu.classList.toggle('aparecer')
    btnMenu.classList.toggle('aparecer-botao')
    navMenu.classList.remove('link-clicado')
})
window.sr = ScrollReveal({ reset:true});

sr.reveal('.inicio-img', {duration:500});
sr.reveal('.titulo-menor', {duration:1000});
sr.reveal('.paragrafos', {duration:2000});
sr.reveal('.subtitulo', {duration:1000});
sr.reveal('.info', {duration:4000});
sr.reveal('.planos-card', {duration:1000});
sr.reveal('.planos-beneficios', {duration:1000});
sr.reveal('.turbinar-img', {duration:500});
sr.reveal('.rodape', {duration:500});
sr.reveal('.copy', {duration:1000});
sr.reveal('.card', {duration: 1000});


const menuItems = document.querySelectorAll('.menu-nav-lista-itens');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.toggle('aparecer');
        btnMenu.classList.toggle('aparecer-botao');
    });
});