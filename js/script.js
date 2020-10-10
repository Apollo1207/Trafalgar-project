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

$(window).scroll(function() {
    if ($(window).scrollTop() > 475) {
        $(".about__inner").css('display', 'block').addClass('animate__animated').addClass('animate__fadeInRight');
    }

    if ($(window).scrollTop() > 1450) {
        $(".services__blocks-top").css('display', 'flex').addClass('animate__animated').addClass('animate__fadeInLeft');
    }

    if ($(window).scrollTop() > 1450) {
        $(".services__blocks-bottom").css('display', 'flex').addClass('animate__animated').addClass('animate__fadeInRight');
    }
});