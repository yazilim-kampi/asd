var kutu = document.querySelector(".header");
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        kutu.classList.add("headerkucuk");
    } else {
        kutu.classList.remove("headerkucuk");
    }
});

function menuac() {
    var header = document.querySelector(".header");
    header.classList.toggle("header-active");
    var nav = document.querySelector(".nav");
    nav.classList.toggle("nav-active");
    var ikon = document.querySelector(".ikon");
    ikon.classList.toggle("ikon-active");
}