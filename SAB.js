var k = 0;
var j = 0;

function conditionL() {
    var like=document.getElementById("like");
    var conL = new Array('Images/Like.svg', 'Images/bLike.svg');
    k++;
    k %= conL.length;
    like.src = conL[k];
}

function conditionMB() {
    var markbook=document.getElementById("mb");
    var conMB = new Array('Images/bm.svg', 'Images/bbm.svg');
    j++;
    j %= conMB.length;
    markbook.src = conMB[j];
}

function getURL() {
    navigator.clipboard.writeText(window.location);
}