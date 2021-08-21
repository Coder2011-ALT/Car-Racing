var car1Width = 100;
var car1Height = 90;
var car2Width = 100;
var car2Height = 90;
var car1X = 10;
var car1Y = 10;
var car2X = 10;
var car2Y = 510;
var bgImg = "bg.jpg";
var car1Img = "car1.png";
var car2Img = "car2.png";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function add() {
    console.log("INSIDE ADD");
    bgImgTag = new Image();
    bgImgTag.onload = uploadBackground();
    bgImgTag.src = bgImg;

    car1Tag = new Image();
    car1Tag.onload = uploadCar1();
    car1Tag.src = car1Img;

    car2Tag = new Image();
    car2Tag.onload = uploadCar2();
    car2Tag.src = car2Img;
}

function uploadBackground() {
    console.log("Uploading background");
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    console.log("Uploading Car 1");
    ctx.drawImage(car1Tag, car1X, car1Y, car1Width, car1Height);
}

function uploadCar2() {
    console.log("Uploading Car 2");
    ctx.drawImage(car2Tag, car2X, car2Y, car2Width, car2Height);
}

window.addEventListener("keydown", moveCar1);

function moveCar1(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38") {
        upCar1();
    }
    else if (keyPressed == "40") {
        downCar1();
    }
    else if (keyPressed == "37") {
        leftCar1();
    }
    else if (keyPressed == "39") {
        rightCar1();
    }
}

window.addEventListener("keydown", moveCar2);

function moveCar2(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "87") {
        upCar2();
    }
    else if (keyPressed == "83") {
        downCar2();
    }
    else if (keyPressed == "65") {
        leftCar2();
    }
    else if (keyPressed == "68") {
        rightCar2();
    }
}

function upCar2() {
    if (car2Y > 0) {
        car2Y -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function downCar2() {
    if (car2Y < 510) {
        car2Y += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function leftCar2() {
    if (car2X > 0) {
        car2X -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function rightCar2() {
    if (car2X < 700) {
        car2X += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    else if (car2X > 700) {
        document.getElementsByClassName("winner")[0].innerHTML = "Car 2 Won!";
    }
}

function upCar1() {
    if (car1Y > 0) {
        car1Y -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function downCar1() {
    if (car1Y < 510) {
        car1Y += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function leftCar1() {
    if (car1X > 0) {
        car1X -= 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function rightCar1() {
    if (car1X < 700) {
        car1X += 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
    if (car1X > 700) {
        document.getElementsByClassName("winner")[0].innerHTML = "Car 1 Won!";
    }
}
