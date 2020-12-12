// mobile navbar
const navbarBtn = document.querySelector('.navbar-button');
navbarBtn.addEventListener('click', () => {
  const nav = document.querySelector('.nav-list');
  navbarBtn.classList.toggle('open');
  nav.classList.toggle('shown-flex');
  nav.classList.toggle('navbar-mobile');

  if (navbarBtn.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'visible';
  }
})

//
let stepsItemCounter = 1;
const stepsItems = document.querySelectorAll(".steps-item");
NodeList.prototype.indexOf = Array.prototype.indexOf; 
setInterval(() => {
  if (stepsItemCounter >= stepsItems.length) { stepsItemCounter = 0; }
  for (let a = 0; a < stepsItems.length; a++) {
    stepsItems[a].classList.remove('steps-item--active');
  }
  stepsItems[stepsItemCounter].classList.add('steps-item--active');
  stepsItemCounter++;
}, 4000);

// Якорь в section presentation
$(document).ready(function(){
  $(".presentation-scroll__link").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
});

// AOS
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Посимвольное отображение текста
// const servicesQuoteText = '“Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.”';
// const servicesQuoteField = document.querySelector(".services-quote .quote-text");
// function showServicesQuote() {
//   const symbols = servicesQuoteText.split('');
//   console.log(symbols);
//   for (let i = 0; i < symbols.length; i++) {
//     setTimeout(() => {
//       servicesQuoteField.textContent += symbols[i];
//       if (!symbols[i]) {
//         console.log('space')
//       }
//     }, 10 * i);
//   }
// }

// showServicesQuote();