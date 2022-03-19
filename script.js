let controller;
let slideScene;

function animateSlides() {
  //Init controller
  controller = new ScrollMagic.Controller();
  //select some things
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //loop over each slide
  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");

    // GSAP
    // gsap.to(revealImg, 1, { x: "100%" });  //* left to right curtain animation
    // gsap.to(img, 1, { scale: 2 });  //* zooming in effect
    // but using the above method we can see that both the effects run together and not one after another. for that we can do another thing

    //* create a timeline for thode effects :
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}
animateSlides();
