const OPEN_CLASSNAME = "open";

const navLinks = document.getElementById("nav-links");

function toggleMenu() {
    if (navLinks.classList.contains(OPEN_CLASSNAME)) {
        navLinks.classList.remove(OPEN_CLASSNAME);
    } else {
        navLinks.classList.add(OPEN_CLASSNAME);
    }
}

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        navLinks.classList.remove(OPEN_CLASSNAME);
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



$(function() {
    $("#clickable").click(function() {
        $(".header__nav").addClass("animate__animated animate__fadeInLeft");
    });
});