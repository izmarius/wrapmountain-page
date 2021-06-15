const showcase = document.querySelector('.showcase');
const activeMenu = document.querySelector('.toggle-active');
const hiddenMenu = document.querySelector('.toggle-hidden');

activeMenu.addEventListener('click', ()=> {
    showcase.classList.add('showcase-active');
    if(!activeMenu.classList.contains('hidden')) {
        activeMenu.classList.toggle('hidden');
        hiddenMenu.classList.toggle('hidden'); 
    }
})

hiddenMenu.addEventListener('click', ()=> {
    showcase.classList.remove('showcase-active');
    if(!hiddenMenu.classList.contains('hidden')) {
        activeMenu.classList.toggle('hidden');
        hiddenMenu.classList.toggle('hidden');
    }
})

