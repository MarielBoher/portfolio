const cambiarColor = document.querySelector('.style-switcher-toggler')
cambiarColor.addEventListener('click', () =>  {
    document.querySelector('.style-switcher').classList.toggle('open')
})

window.addEventListener("scroll", () =>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
        document.querySelector('.style-switcher').classList.remove('open')
    }
})

const estiloAlternativo = document.querySelectorAll('.alternative-style')
const activarEstilo = (color) => {
    estiloAlternativo.forEach((estilo) => {
        if(color === estilo.getAttribute('title')){
            estilo.removeAttribute('disabled')
        }
        else{
            estilo.setAttribute('disabled', 'true')
        }
    });
}

const diaNoche = document.querySelector('.day-night')
diaNoche.addEventListener('click', () => {
    diaNoche.querySelector('i').classList.toggle('fa-sun')
    diaNoche.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark')
})

window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')){
        diaNoche.querySelector('i').classList.add('fa-sun')
    }else{
        diaNoche.querySelector('i').classList.add('fa-moon')
    }
})
