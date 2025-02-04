const addToCart = document.getElementById("addToCart");
const buyBtn = document.getElementById("buyBtn");

addToCart.onclick = function(){
    alert("you added this to cart");
};

buyBtn.onclick = function(){
    alert("you bought this");
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElemnets = document.querySelectorAll(".hidden");
hiddenElemnets.forEach((el) => observer.observe(el));


const observerVideo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.play();
        }
    });
});

const videos = document.querySelectorAll(".videoLoader");
videos.forEach((el) => observerVideo.observe(el));


document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".logo");

    logos.forEach(logo => {
        logo.addEventListener("transitionend", () => {
            logo.style.transitionDelay = "0ms";
        });
    });
});
