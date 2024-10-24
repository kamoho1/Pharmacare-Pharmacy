// limit slider paragraph text characters and add "..." + read more button wiith a link.
document.addEventListener("DOMContentLoaded", function() {
  //limit paragraph text
  const slideParagraphs = document.querySelectorAll(".slide-paragraph");
  slideParagraphs.forEach((slideParagraph) => {
    const textLimit = 100;
    const fullText = slideParagraph.innerText;
    const aTag = slideParagraph.querySelector(".paragraph-anchor-tag");

    if (slideParagraph.innerText.length > textLimit) {
      slideParagraph.innerHTML = fullText.substring(0,textLimit) + "..." + aTag.innerHTML;
    }
  });
});

// Load first slide
window.addEventListener("DOMContentLoaded", () => {
const firstSlide = document.querySelector(".first-slide")
const firstSlideBtn = document.querySelector(".first-slide-btn");
const firstIndicatorBar = document.querySelector(".first-indicator-bar");

setTimeout(() =>{
firstSlide.classList.add("active");
}, 300);

firstSlideBtn.classList.add("active");
firstIndicatorBar.classList.add("active");



});
// Javascript for slider
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const numberOfSlides = slides.length;
const slideBtns = document.querySelectorAll(".slide-btn");
const slideIndicatorBars = document.querySelectorAll(".indicator-bar");
var slideNumber = 0;

//slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
  
    });
  
    slideBtns.forEach((slideBtn) => {
      slideBtn.classList.remove("active");
  
    });
  
    slideIndicatorBars.forEach((slideIndicatorBar) => {
      slideIndicatorBar.classList.remove("active");
  
    });
  
    slideNumber++;
    if (slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }
  
    slides[slideNumber].classList.add("active");
    slideBtns[slideNumber].classList.add("active");
    slideIndicatorBars[slideNumber].classList.add("active"); 
  }, 8500);
}

repeater();

// slideer next/prev buttons navigation.
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// slider next button navigation
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");

  });

  slideBtns.forEach((slideBtn) => {
    slideBtn.classList.remove("active");

  });

  slideIndicatorBars.forEach((slideIndicatorBar) => {
    slideIndicatorBar.classList.remove("active");

  });

  slideNumber++;
  if (slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideBtns[slideNumber].classList.add("active");
  slideIndicatorBars[slideNumber].classList.add("active");

  clearInterval(playSlider);
  repeater();

});

// Slider previous button navigation
prevBtn.addEventListener("click", () =>{
  slides.forEach((slide) => {
    slide.classList.remove("active");

  });

  slideBtns.forEach((slideBtn) => {
    slideBtn.classList.remove("active");

  });

  slideIndicatorBars.forEach((slideIndicatorBar) => {
    slideIndicatorBar.classList.remove("active");

  });

  slideNumber--;
  if (slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideBtns[slideNumber].classList.add("active");
  slideIndicatorBars[slideNumber].classList.add("active");

  clearInterval(playSlider);
  repeater();
});

//Slider pagination
var slideBtnNav = function(slideBtnClick) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

  });

  slideBtns.forEach((slideBtn) => {
    slideBtn.classList.remove("active");

  });

  slideIndicatorBars.forEach((slideIndicatorBar) => {
    slideIndicatorBar.classList.remove("active");

  });


  slides[slideBtnClick].classList.add("active");
  slideBtns[slideBtnClick].classList.add("active");
  slideIndicatorBars[slideBtnClick].classList.add("active");
}

slideBtns.forEach((slideBtn, i) => {
  slideBtn.addEventListener("click", () => {
    slideBtnNav(i);
    clearInterval(playSlider);
    repeater();
    slideNumber = i;
  });
});

//responsive nav bar to screen size
const responsiveMenuButton = document.getElementById("responsiveMenuToggleButton");

const navBarLinks = document.querySelector(".nav-menu ul");

responsiveMenuButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("open");
  responsiveMenuButton.classList.toggle("open");
});
