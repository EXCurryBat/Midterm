var filevar;
var activedisp = document.getElementById("dispBG");
var activetitle;
var activecolor;
var bgleft=0;
var bgtop=0;
var dispheight = 300/*parseInt(activedisp.style.height)*/;

function changefilevar(){
    var val = document.getElementById("fileInp").value;
    if(val == "horse"){
        filevar = "img/bg1.jpg";
    } else if(val == "night"){
        filevar = "img/bg2.jpg";    
    } else if(val == "mountain"){
        filevar = "img/bg3.jpg";  
    } else if(val.indexOf("epic") != -1){
        filevar = "img/bg4.jpg"
    } else {
        filevar = document.getElementById("fileInp").value;
    }
}

function expandMenu(){
    document.getElementById("controls").style.bottom = "0px";
};

function changeColor(){
    document.getElementById("disptitle").style.color = activecolor;
    document.getElementById("dispdesc").style.color = activecolor;
};

function changeDescription(){
    document.getElementById("dispdesc").innerHTML = activedesc;
};

function changeTitle(){
    document.getElementById("disptitle").innerHTML = activetitle;
};

function changeBG(){
    
    changefilevar();
    document.getElementById("dispBG").style.backgroundImage = "url("+filevar+")";
};

function moveBG(keyCode){
    if(keyCode == 37){
        bgleft = bgleft - 10;
        activedisp.style.backgroundPosition = bgleft+"px "+bgtop+"px";
    } else if(keyCode == 39){
        bgleft = bgleft + 10;
        activedisp.style.backgroundPosition = bgleft+"px "+bgtop+"px";
    } else if(keyCode == 38){
        bgtop = bgtop - 10;
        activedisp.style.backgroundPosition = bgleft+"px "+bgtop+"px";
    } else if(keyCode == 40){
        bgtop = bgtop + 10;
        activedisp.style.backgroundPosition = bgleft+"px "+bgtop+"px";
    }
};

function changeheight(keyCode){
    if(keyCode==107){
        dispheight = dispheight +10;
        activedisp.style.height = dispheight+"px";
    } else if(keyCode==109){
        dispheight = dispheight -10;
        activedisp.style.height = dispheight+"px";
    }
};

function createChild(){
    var ndiv = document.createElement("div");
    var ndiv2 = document.createElement("div");
    var ndiv3 = document.createElement("div");
    
    activedisp = ndiv;
    ndiv.appendChild(ndiv2);
    ndiv.appendChild(ndiv3);
    ndiv.className="col-12 col-sm-6 col-md-4 col-lg-3 thumbdiv";
    ndiv2.className="thumbtitle";
    ndiv3.className="thumbdesc";
    
    document.getElementById("display").appendChild(ndiv);
    
    ndiv.style.cssText = document.getElementById("dispBG").style.cssText;
    ndiv2.style.cssText = document.getElementById("disptitle").style.cssText;
    ndiv2.innerHTML = activetitle;
    ndiv3.style.cssText = document.getElementById("dispdesc").style.cssText;
    ndiv3.innerHTML = activedesc;
};

document.getElementById("menubut").addEventListener("click", function(){
    expandMenu();
});

document.getElementById("fileInp").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeBG();
    }
});

document.getElementById("textInp1").addEventListener("keydown", function(ev){
    activetitle = document.getElementById("textInp1").value;
    changeTitle();
});

document.getElementById("textInp2").addEventListener("keydown", function(ev){
    activedesc = document.getElementById("textInp2").value;
    changeDescription();
});

document.getElementById("colorinp").addEventListener("change", function(){
    activecolor = document.getElementById("colorinp").value;
    changeColor();
});

document.addEventListener("keydown", function(ev){
   moveBG(ev.keyCode); 
});

document.addEventListener("keydown", function(ev){
    if(ev.keyCode == 109){
        changeheight(109); 
    } else if(ev.keyCode ==107){
        changeheight(107);
    }
});

document.getElementById("addimage").addEventListener("click", function(){
    createChild();
});