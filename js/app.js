const inputs = document.querySelectorAll(".contact--input");
const menuBtn = document.querySelector(".hamburger--menu");
const menuNav = document.querySelector(".mobile--nav");
const navLinks = document.querySelectorAll(".mobile--nav--link")

// Script - Hamburger Menu
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('is-active');
    menuNav.classList.toggle('is-active');
})

navLinks.forEach((eve) => {
    eve.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        menuNav.classList.remove('is-active');
        
    })
})
// Script para formulario
inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    })
    ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    })
})

