const button = document.getElementById('menu')
const menu = document.getElementById('navbar')

button.addEventListener('click', () => {
    if (menu.style.left === '-100%'){
        menu.style.left = '0px';
        console.log('Menu mostrado');
    } else {
        menu.style.left = '-100%';
        console.log('Menu oculto');
    }
    
})