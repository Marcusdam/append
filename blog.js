
let menuIcon = document.getElementById('menu-btn');
let menuBox = document.getElementById('menu');

function menuBtn() {
    menuBox.classList.toggle("open-menu");

    if(menuBox.classList.contains("open-menu")){
        menuIcon.src="img/close.png"
    }

    else{
        menuIcon.src="img/open (1).png"
    }
    console.log("clicked")
};