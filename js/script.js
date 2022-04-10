let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")
let body = document.querySelector("body")

burger.addEventListener("click", function(){
    burgerMenu.classList.toggle("header__burger_list_active")
    burger.classList.toggle("header__burger_active")
    body.classList.toggle("lock")
})


window.addEventListener("scroll", function(){
    if (scrollY >= 100) {
        document.querySelector(".header").classList.add("header__active")
        document.querySelector(".main").classList.add("main__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
        document.querySelector(".main").classList.remove("main__active")
    }
})