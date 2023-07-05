//This is to show the hidden box, and hide the first one
function changeOpacity1(){
    let box1 = document.getElementById("slide2Text");
    let box2 = document.getElementById("slide2HiddenTxt");
    let btn1 = document.getElementById("slide2Btn");
    let btn2 = document.getElementById("slide2BtnSpecial");
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    btn1.style.opacity = 0;
    btn2.style.opacity = 1;
    btn1.style.zIndex = 99;
    btn2.style.zIndex = 100;
}
//This is to show the original box, and re-hide the second one
function changeOpacity2(){
    let box1 = document.getElementById("slide2Text");
    let box2 = document.getElementById("slide2HiddenTxt");
    let btn1 = document.getElementById("slide2Btn");
    let btn2 = document.getElementById("slide2BtnSpecial");
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    btn1.style.opacity = 1;
    btn2.style.opacity = 0;
    btn1.style.zIndex = 100;
    btn2.style.zIndex = 99;
}