'use strict';

const cart = document.querySelector('.nav--logo--content');
const navigation = document.querySelector('.nav--items');
const sectionImage = document.querySelector('.onclick-image');
const plusBtn = document.querySelector('.section--plus');
const minusBtn = document.querySelector('.section--minus');
const cartBtn = document.querySelector('.btn-cart');
const previousSlide = document.querySelector('.icon-previous');
const nextSlide = document.querySelector('.icon-next');
const deleteBtn = document.querySelector('.btn--close');
const imageLists = document.querySelectorAll('.list-images');
const modal = document.querySelector('.modals');
const modalCart = document.querySelector('.modal-cart');
const modalCartUpdated = document.querySelector('.modal-cart-updated');
const overlay = document.querySelector('.overlay');
const text = document.querySelector('.text--content');
const numberOfCart = document.querySelector('.movement');
const deleteIcon = document.querySelector('.delete-btn');
const checkoutBtn = document.querySelector('.checkout');
let cartCount = 0;
let currentValue = 1;
let startvalue = 0;

const openCart = function (e) {
  e.preventDefault();
  modalCart.classList.remove('hidden');
};
const closeOpenCart = function () {
  modalCart.classList.add('hidden');
};
// const openCartUpdated = function (e) {
//   e.preventDefault();
// };

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hdden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

cart.addEventListener('click', openCart);
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key === 'Escape' && !modalCart.classList.contains('hidden')) {
    closeOpenCart();
  }
});

// text.innerHTML = currentValue;
// console.log(parseInt(text.innerHTML));

plusBtn.addEventListener('click', function () {
  text.innerHTML = parseInt(text.innerHTML) + 1;
});
minusBtn.addEventListener('click', function () {
  if (text.innerHTML >= 2) {
    text.innerHTML = parseInt(text.innerHTML) - 1;
  }
});

cartBtn.addEventListener('click', function () {
  modalCartUpdated.classList.remove('hidden');
  numberOfCart.classList.remove('hidden');
  cartCount += 1;
  numberOfCart.innerHTML = parseInt(numberOfCart.innerHTML) + 1;
});
deleteIcon.addEventListener('click', function () {
  modalCartUpdated.classList.add('hidden');
  numberOfCart.innerHTML = parseInt(numberOfCart.innerHTML) - 1;
});
checkoutBtn.addEventListener('click', function () {
  numberOfCart.classList.add('hidden');

  modalCartUpdated.classList.add('hidden');
});
sectionImage.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
deleteBtn.addEventListener('click', function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
// document.addEventListener('keydown', function (e) {
//   // console.log(e);
//   if (e.key === 'Escape' && !modalCartUpdated.contains('overlay')) {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   }
// });

// console.log(parseInt(numberOfCart.innerHTML));

localStorage.setItem('cartCount', JSON.stringify(cartCount));

const store = localStorage.getItem('cartCount');

cartCount = JSON.parse(store);

// console.log(cartCount, 'cartCount');

const slideImage = document.querySelectorAll('.list-image-click');

let currentSLide = 0;
const maxSlide = slideImage.length;

console.log(maxSlide);

const activeImage = function () {
  document
    .querySelectorAll('.list-image-click')
    .forEach(image => image.classList.remove('active-img'));
};

const goToSlide = function (slide) {
  document
    .querySelectorAll('.section--image')
    .forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};

const nextBtn = function () {
  if (currentSLide === maxSlide - 1) {
    currentSLide = 0;
  } else {
    currentSLide++;
  }
  goToSlide(currentSLide);
  activeImage(currentSLide);
};

const prevBtn = function () {
  if (currentSLide === 0) {
    currentSLide === maxSlide - 1;
  } else {
    currentSLide--;
  }
  goToSlide(currentSLide);
  activeImage(currentSLide);
};
const init = function () {
  goToSlide(0);
  activeImage();
};
init();

nextSlide.addEventListener('click', nextBtn);
previousSlide.addEventListener('click', prevBtn);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevBtn();
  if (e.key === 'ArrowRight') nextBtn();
});
