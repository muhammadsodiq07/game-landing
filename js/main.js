
let elBtn = document.querySelector('.header__burger');
let elNav = document.querySelector('.header__nav') 
let elBtnToggle = document.querySelector('.header__burger')

elBtn.addEventListener('click', function(){
  elNav.classList.toggle('show');
  elBtnToggle.classList.toggle('active')
})
