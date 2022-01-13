let menuButton = document.querySelector('nav .menu-bars')
let menu = document.querySelector('nav ul')

menuButton.addEventListener('click', function() {
    menu.classList.toggle('on')
})
