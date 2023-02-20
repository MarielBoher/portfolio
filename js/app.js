let typed = new Typed(".typing",{
    strings: ["Frontend Developer", "Frontend Developer", "Frontend Developer"],
    typeSpeed:100,
    BackSpeed:100,
    loop: true
});

navbar = document.querySelector('.nav').querySelectorAll('a')

navbar.forEach(element => {
    element.addEventListener('click', function(){
        navbar.forEach(nav => nav.classList.remove("active"))
        sidebar.classList.remove('open')
        this.classList.add('active')
    })
});



let sidebar = document.querySelector('.aside')
let sidebarBtn = document.querySelector('.nav-toggler')
let contenido = document.querySelector('.main-content')
console.log(sidebarBtn)

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle('open')
    contenido.classList.toggle('left')
})

window.addEventListener("scroll", () =>{
    if(document.querySelector('.aside').classList.contains('open')){
        document.querySelector('.aside').classList.remove('open')
    }
})
