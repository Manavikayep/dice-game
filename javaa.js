var i=Math.floor(Math.random()*6)+1;
//<img class="img1" src="./images/dice6.png" />
var ranvar1="./images/dice"+i+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",ranvar1);

var j=Math.floor(Math.random()*6)+1;
var ranvar2="./images/dice"+j+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",ranvar2);

if(i>j){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(i<j){
    document.querySelector("h1").innerHTML="Player 2 won";
}
