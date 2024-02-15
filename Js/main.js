const mobileNav = document.querySelector(".mnav");
const closeBtn = document.querySelector(".mnav__close-btn");
const closeBtnIcn = document.querySelector(".mvav__close-btn-icon");

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line";
const arrowRightClass = "ri-arrow-right-s-line";

closeBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);
  }

  closeBtnIcn.classList.toggle(arrowLeftClass);
  closeBtnIcn.classList.toggle(arrowRightClass);
});

let index = 0;

document.querySelector(".prev").addEventListener("click", function () {
  changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", function () {
  changeSlide(1);
});
function changeSlide(step) {
  const slidesContainer = document.querySelector(".slides");
  const slide = document.querySelector(".slide");
  const slideWidth = slide.clientWidth;

  const totalSlides = slidesContainer.children.length;

  index = (index + step + totalSlides) % totalSlides;

  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}
