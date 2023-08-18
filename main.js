canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasaMarsImagesArray = ["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];

randomNumber = Math.floor(Math.random() * 4);
console.log(randomNumber);

roverWidth = 100;
roverHeight = 90;

backgroundImage = nasaMarsImagesArray[randomNumber];
console.log("backgroundImage = " + backgroundImage);
roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadrover;
    roverImgTag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (roverY >= 0) {
        roverY = roverY - 10;
        console.log("quando voce apertar a seta para cima X é = " + roverX + " e Y = " + roverY);
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if (roverY <= 500) {
        roverY = roverY + 10;
        console.log("quando voce apertar a seta para cima X é = " + roverX + " e Y = " + roverY);
        uploadBackground();
        uploadrover();
    }
}
function right() {
    if (roverX <= 700) {
        roverX = roverX + 10;
        console.log("quando voce apertar a seta para cima X é = " + roverX + " e Y = " + roverY);
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if (roverX >= 0) {
        roverX = roverX - 10;
        console.log("quando voce apertar a seta para cima X é = " + roverX + " e Y = " + roverY);
        uploadBackground();
        uploadrover();
    }
}