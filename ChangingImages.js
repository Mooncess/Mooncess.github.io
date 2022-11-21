var i = 0;
var image=document.getElementById("image");
var l = document.getElementById("line");
var imgs=new Array('Images/Infinite_Darkness_Leon.jpg', 'Images/Leon3.jpg', 'Images/Leon4.jpg');

function imgsrc() {
    i++;
    i %= imgs.length;
    image.src = imgs[i];

    if (i == 0) {
        l.style.marginLeft = "0px";
    }

    if (i == 1) {
        l.style.marginLeft = "93px";
    }

    if (i == 2) {
        l.style.marginLeft = "186px";
    }
}