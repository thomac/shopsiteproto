// JavaScript Slider for Products
const products = document.querySelectorAll('.product');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
let currentIndex = 0;

function showProduct(index) {
  products.forEach((product) => {
    product.style.display = 'none';
  });
  products[index].style.display = 'block';
}

function slidePrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = products.length - 1;
  }
  showProduct(currentIndex);
}

function slideNext() {
  currentIndex++;
  if (currentIndex >= products.length) {
    currentIndex = 0;
  }
  showProduct(currentIndex);
}

prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

// Show the initial product
showProduct(currentIndex);

const navItems = document.querySelectorAll('.nav-item');

function activateNavItem() {
  navItems.forEach((item) => {
    item.classList.remove('active');
  });
  this.classList.add('active');
}

navItems.forEach((item) => {
  item.addEventListener('click', activateNavItem);
});