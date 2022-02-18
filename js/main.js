
let elBtn = document.querySelector('.header__burger');
let elNav = document.querySelector('.header__nav') 
let elBtnToggle = document.querySelector('.header__burger')

elBtn.addEventListener('click', function(){
  elNav.classList.toggle('show');
  elBtnToggle.classList.toggle('active')
})



//Get the button
var topbutton = document.getElementById("id-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbutton.style.opacity = "1";
    topbutton.style.transition = "all 0.5s linner";
  } else {
    topbutton.style.opacity = "0";
    topbutton.style.transition = "all 0.5s linner";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
