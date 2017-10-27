var cenImg = document.getElementById("center");
var xposition = 0;
var yposition = 0;

document.getElementById("rangeinput").addEventListener("change", function(){
    var imgwidth = document.getElementById("rangeinput").value;
    cenImg.style.width = imgwidth+"vw";
})

document.getElementById("ctrlbut").addEventListener("click", function () {
    document.getElementById("panel").style.top = "0px";
});

document.getElementById("bg1").addEventListener("click", function () {
    resetImg()
    cenImg.style.backgroundImage = "url(1.jpg)";
});

document.getElementById("bg2").addEventListener("click", function () {
    resetImg()
    cenImg.style.backgroundImage = "url(2.jpg)";
});

document.getElementById("bg3").addEventListener("click", function () {
    resetImg()
    cenImg.style.backgroundImage = "url(3.jpg)";
});

function resetImg() {
    xposition = 0;
    yposition = 0;
    cenImg.style.backgroundPosition = "0px 0px";
}

function moveImgx(xnum) {
    xposition = xposition + xnum;
    cenImg.style.backgroundPosition = xposition + "px" + " " + yposition + "px";
}

function moveImgy(ynum) {
    yposition = yposition + ynum;
    cenImg.style.backgroundPosition = xposition + "px" + " " + yposition + "px";
}

document.body.addEventListener("keydown", function(ev) {
    if(ev.keyCode == 37){
        moveImgx(-10);
    } else if(ev.keyCode == 39){
        moveImgx(10);
    } else if(ev.keyCode == 38){
        moveImgy(-10);
    } else if(ev.keyCode == 40){
        moveImgy(10);
    }
    
});