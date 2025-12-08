// Hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    //hamburger icon animation
    const bars = hamburger.querySelectorAll(".bar");
    if(navLinks.classList.contains("active")) {
        bars[0].style.transform = "translateY(8px) rotate(45deg)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "translateY(-8px) rotate(-45deg)";
    } 
    else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
});


// Testimonial Slider Logic 
let slideIndex = 0;
const slides = document.querySelectorAll(".testimonial");

const showSlides = (n) => {
    if (n >= slides.length) { 
        slideIndex = 0; 
    }
    else if (n < 0) { 
        slideIndex = slides.length - 1; 
    }
    else { 
        slideIndex = n; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

//Slide by button
const moveSlide = (n) => {
    showSlides(slideIndex + n);
    resetTimer();
}

let btnPrev = document.querySelector(".prev");
let btnNext = document.querySelector(".next");

btnPrev.addEventListener("click", () => moveSlide(-1));
btnNext.addEventListener("click", () => moveSlide(1));

showSlides(0);

// auto slide

let timer;
const startAutoSlide = () => {
    timer = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

const resetTimer = () => {
    clearInterval(timer);
    startAutoSlide();
}

startAutoSlide();