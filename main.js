let hamburgerAppear = document.querySelector(".hamburger-menu");
let btnClose = document.querySelector(".close");
let btnHamburger = document.querySelector(".header-right > a");


btnHamburger.addEventListener('click', function(){
    hamburgerAppear.style.display = "block";
});

btnClose.addEventListener("click", function(){
    hamburgerAppear.style.display = "none";
});