/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalEl = document.querySelectorAll(".services__modal");
const modalBtnsEl = document.querySelectorAll(".services__button");
const modalCloseBtnsEl = document.querySelectorAll(".services__modal-close");

let showModal = function (index) {
  modalEl[index].classList.add("active-modal");
};

let hideModal = function (nodelist) {
  nodelist.forEach((modal) => {
    modal.classList.remove("active-modal");
  });
};

modalBtnsEl.forEach((button, index) => {
  button.addEventListener("click", () => {
    showModal(index);
  });
});

modalCloseBtnsEl.forEach((button) => {
  button.addEventListener("click", () => {
    hideModal(modalEl);
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".portfolio__work-container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */

const linkActiveWork = document.querySelectorAll(".work__item");
function activeWork() {
  linkActiveWork.forEach((link) => link.classList.remove("active-work"));
  this.classList.add("active-work");
}
linkActiveWork.forEach((link) => link.addEventListener("click", activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".portfolio__testimonial-container", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    570: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== LIGHT DARK THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
