"use strict";

document.querySelector(".links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("dot-active"));

    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("dot-active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlideByTime = function () {
    nextSlide();
    setTimeout(nextSlideByTime, 3500);
  };

  setTimeout(nextSlideByTime, 3500);

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);

    activateDot(0);
  };
  init();

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

const guessMyNumber = document.querySelector(".guess-my-number");
const alrajhiBank = document.querySelector(".alrajhi-bank");
const mapty = document.querySelector(".mapty");

guessMyNumber.addEventListener("click", function () {
  window.location.assign(
    "https://mohdalmahmud.github.io/Guess-My-Number-Game/"
  );
});

alrajhiBank.addEventListener("click", function () {
  window.location.assign("https://mohdalmahmud.github.io/Alrajhi-Bank/");
});

mapty.addEventListener("click", function () {
  window.location.assign("https://mohdalmahmud.github.io/Mapty/");
});
