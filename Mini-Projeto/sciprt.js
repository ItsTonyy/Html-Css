const hamburguer = document.querySelector(".hamburguer")
const headernav = document.querySelector(".headernav")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    headernav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburguer.classList.remove("active");
    headernav.classList.remove("active");
    
}))