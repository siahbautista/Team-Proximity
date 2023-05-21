
/** share button for news page */
const shareButtons = document.querySelectorAll('.container .share-button');

shareButtons.forEach(function (shareButton) {
  shareButton.addEventListener('click', function () {
    this.classList.toggle('active');
    const shareOption = this.closest('.container').querySelector('.share .share-option');
    shareOption.classList.toggle('active');
  });
});


$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})

 /* typing animation script */
 var typed = new Typed(".typing", {
  strings: ["Outplay Your Opponents", "Outlast Your Rivals"],
  typeSpeed: 100, 
  backSpeed: 60,
  loop: true

});









