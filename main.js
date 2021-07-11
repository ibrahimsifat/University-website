// navbar start here
let navs = document.getElementById('menu')
let show = document.getElementById('show')

function showmenu() {
    navs.style.right = '0'
    show.style.opacity = "0";
}

function closemenu() {
    navs.style.right = '-2000px'
    show.style.opacity = "1";

}