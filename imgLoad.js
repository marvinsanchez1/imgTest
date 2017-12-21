var img = document.querySelector('#detectImg');
var btn = document.querySelector('#btnReload');
var title = document.querySelector('#titlePage');
var count = 0;


function setColourBody(colour){
    document.body.style.backgroundColor = colour;
}
function setColourFont(font){
    document.getElementById("titlePage").style.color = font;
}

img.onload = function loaded() {
    count++;
    console.log("begins" + count);
    if(count<=1){
        //Single load call
        setColourBody('#221E1F');
        setColourFont('#D1301B');
        title.innerHTML ='Something is wrong around here !! why this page load ONCE ??';
        img.src = "privateinvestocat.jpg";
    }
    else if(count<15000){
        //Multiple load calls
        setColourBody('#F0F1F3');
        setColourFont('#221E1F');
        title.innerHTML ='Onload is happening on this PAGE!! ' + count;
        img.src = "privateinvestocat.jpg";
        console.log("Reload image " + count);
    }
    else {
        //Stop load calls
        title.innerHTML = "Onload page STOP!!";
        setColourBody('#221E1F');
        setColourFont('#D1301B');
    }
}
img.src = "privateinvestocat.jpg";

btn.onclick = function (){
    img.src = "privateinvestocat.jpg";
}
