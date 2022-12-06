const message = document.querySelector('.message');
const button = document.querySelector('button');
const directions = document.querySelector('.directions');
const game = document.querySelector('.game');


function showMessage(notification) {
    message.innerHTML = `<h3>${notification}</h3>`;
}


showMessage('The sky needs your help!');

button.addEventListener('click', function () {
    //hide the button
    button.style.display = 'none';
    
    directions.style.display = 'none';
    //notify user of start
    showMessage('Click the paint brushes to learn the order of the rainbow! TURN ON SOUND!');
})

function showGame() {
    var gameBrushes = document.getElementById("showGame");
    gameBrushes.style.display = "block"; 
}

//When the user clicks on finished? button, it opens the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function gameReset() {
    location.reload();
}

document.getElementById("blue").onmouseover = function () { mouseOver() };
document.getElementById("blue").onmouseout = function () { mouseOut() };

document.getElementById("green").onmouseover = function () { mouseOver() };
document.getElementById("green").onmouseout = function () { mouseOut() };

document.getElementById("indigo").onmouseover = function () { mouseOver() };
document.getElementById("indigo").onmouseout = function () { mouseOut() };

document.getElementById("orange").onmouseover = function () { mouseOver() };
document.getElementById("orange").onmouseout = function () { mouseOut() };

document.getElementById("red").onmouseover = function () { mouseOver() };
document.getElementById("red").onmouseout = function () { mouseOut() };

document.getElementById("violet").onmouseover = function () { mouseOver() };
document.getElementById("violet").onmouseout = function () { mouseOut() };

document.getElementById("yellow").onmouseover = function () { mouseOver() };
document.getElementById("yellow").onmouseout = function () { mouseOut() };


function blueBrush() {
    document.getElementById('image1').src = "imgs/BluePaintBrush.png";
    var audio = new Audio('sounds/blue.mp3');
    audio.play();
}

function greenBrush() {
    document.getElementById('image2').src = "imgs/GreenPaintBrush.png";
    var audio = new Audio('sounds/green.mp3');
    audio.play();
}

function indigoBrush() {
    document.getElementById('image3').src = "imgs/IndigoPaintBrush.png";
    var audio = new Audio('sounds/indigo.mp3');
    audio.play();
}

function orangeBrush() {
    document.getElementById('image4').src = "imgs/OrangePaintBrush.png";
    var audio = new Audio('sounds/orange.mp3');
    audio.play();
}

function redBrush() {
    document.getElementById('image5').src = "imgs/RedPaintBrush.png";
    var audio = new Audio('sounds/red.mp3');
    audio.play();
}

function violetBrush() {
    document.getElementById('image6').src = "imgs/VioletPaintBrush.png";
    var audio = new Audio('sounds/violet.mp3');
    audio.play();
    { alert("W I N N E R!!!! Click button below!"); }
}

function yellowBrush() {
    document.getElementById('image7').src = "imgs/YellowPaintBrush.png";
    var audio = new Audio('sounds/yellow.mp3');
    audio.play();
}

function playRainbow() {
    var rainbow = document.getElementById("rainbow")
    rainbow.play();
}