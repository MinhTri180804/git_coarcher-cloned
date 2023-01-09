var body = document.querySelector("body");

function notScroll() {
    body.style = "height: 100%; overflow: hidden"
}

function scroll() {
    body.style = "height: auto"
}
// modal Register

var clickregister = document.querySelector('.box_info-register');
var modalRegister = document.querySelector('.modal_register');
var closeModalRegister = document.querySelector('.icon_close-register');
var contentModalLogin = document.querySelector('.modal_login-content');


function showRegister() {
    modalRegister.classList.add('open');
}

function hiddenRegister() {
    modalRegister.classList.remove('open');
}

clickregister.addEventListener("click", showRegister);
closeModalRegister.addEventListener("click", hiddenRegister);
clickregister.addEventListener("click", notScroll);
closeModalRegister.addEventListener("click", scroll);

//modal Login 

var clickLogin = document.querySelector(".box_info-login");
var modalLogin = document.querySelector(".modal_login");
var closeModalLogin = document.querySelector(".icon_close-login")

function showLogin() {
    modalLogin.classList.add('open');
}

function hiddenLogin() {
    modalLogin.classList.remove('open');
}

clickLogin.addEventListener("click", showLogin);
closeModalLogin.addEventListener("click", hiddenLogin)
clickLogin.addEventListener("click", notScroll);
closeModalLogin.addEventListener("click", scroll);

//modal search

var clickSearch = document.querySelector(".btn_item-search");
var modalSearch = document.querySelector(".modal_search");
var closeModalSearch = document.querySelector(".icon_close-search");
var searchContent = document.querySelector(".search_content")

function showSearch() {
    modalSearch.classList.add('open');
}

function hiddenSearch() {
    modalSearch.classList.remove('open');
}

clickSearch.addEventListener("click", showSearch);
closeModalSearch.addEventListener("click", hiddenSearch)
modalSearch.addEventListener("click", hiddenSearch);
clickSearch.addEventListener("click", notScroll);
closeModalSearch.addEventListener("click", scroll);


