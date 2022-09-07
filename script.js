const cookie = document.querySelector(".cookie-msg");
const cookieButton = document.querySelector(".cookie-button");

cookieButton.addEventListener("click", function (e) {
  cookie.classList.add("hidden");
});

const step1 = document.querySelector(".step-1-content");
const step2 = document.querySelector(".step-2-content");
const step3 = document.querySelector(".step-3-content");
const plan1 = document.querySelector(".plan-1");
const plan2 = document.querySelector(".plan-2");
const ctaBtnFree = document.querySelector(".btn-free");
const ctaBtnGlad = document.querySelector(".btn-glad");
const buttonContainer = document.querySelector(".table-grid-container");

buttonContainer.addEventListener("click", function (e) {
  //console.log(e);
  const target = e.target;
  console.log(target);
  if (target.classList.contains("step-1")) {
    step1.classList.remove("hidden");
    step2.classList.add("hidden");
    step3.classList.add("hidden");
  }
  if (target.classList.contains("step-2")) {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
    step3.classList.add("hidden");
  }
  if (target.classList.contains("step-3")) {
    step1.classList.add("hidden");
    step2.classList.add("hidden");
    step3.classList.remove("hidden");
  }
});

console.log(plan1, plan2, ctaBtnFree, ctaBtnGlad);

plan1.addEventListener("mouseover", function () {
  ctaBtnFree.style.backgroundColor = "#85608e";
  ctaBtnFree.style.color = "#fff";
  ctaBtnFree.style.transition = " all 0.3s ease-in-out";
  plan1.style.scale = "1.05";
});
plan1.addEventListener("mouseleave", function () {
  ctaBtnFree.style.backgroundColor = "#f5f1f5";
  ctaBtnFree.style.color = "black";
  plan1.style.scale = "1";
});

plan2.addEventListener("mouseover", function () {
  ctaBtnGlad.style.textDecoration = "underline";
  ctaBtnGlad.style.transition = " text-decoration 0.9s ease-in-out";
  plan2.style.scale = "1.1";
});
plan2.addEventListener("mouseleave", function () {
  ctaBtnGlad.style.textDecoration = "none";

  plan2.style.scale = "1";
});

const tableSection = document.querySelector(".table-section");
const btnLearnMore = document.querySelector(".btn-learn-more");
const crucials = document.querySelector(".crucials");
const stopCrucials = document.querySelector(".how-to-stop-crucials");
btnLearnMore.addEventListener("click", function () {
  tableSection.scrollIntoView({ behavior: "smooth" });
});

const rickRoll = new Audio("surprise.mp3");

crucials.addEventListener("click", function () {
  rickRoll.play();
});

stopCrucials.addEventListener("click", function () {
  rickRoll.pause();
  rickRoll.currentTime = 0;
});
const cookieMessage = document.querySelector(".cookie-message");
const heroSection = document.querySelector(".hero-section");
