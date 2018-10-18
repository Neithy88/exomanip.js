



var texte = document.getElementById("text");
texte.style.fontSize = "20px";

var square = document.getElementById("rectangle");


square.style.height="100px";
square.style.width="100px";
square.style.left="45%";
square.style.backgroundColor="blue";
square.style.position="relative";
square.style.top="100px";
square.style.display="block";
square.style.marginBottom="50px";


var boutontaille = document.getElementById("boutontaille")
var boutonrectvert = document.getElementById("boutonrectvert")
var boutoncouleurinit = document.getElementById("boutoncouleurinit")
var boutondisparait = document.getElementById("boutondisparait")
var boutonapparait = document.getElementById("boutonapparait")



texte.addEventListener("click", function () {
    console.log(texte.style.fontSize);
    if (texte.style.fontSize === "20px") {
        texte.style.fontSize = "30px";
        console.log(texte.style.fontSize);
    }
    else {
        texte.style.fontSize = "20px";
        console.log(texte.style.fontSize);
    }
});





boutontaille.addEventListener("click", function(){


    console.log(square.style.height);
    if (square.style.height >="300px"){
    square.style.height ="100px"
    console.log(square.style.height);
    }
    else{
    square.style.height =parseInt(square.style.height) + 10 + "px";
    }
    
    
});



boutonrectvert.addEventListener("click", function () {
    
    
    console.log(square.style.backgroundColor);
    if (square.style.backgroundColor === "blue") {
        square.style.backgroundColor = "green";
        console.log(texte.style.backgroundColor);
    }
  
});



boutoncouleurinit.addEventListener("click", function () {
    console.log(square.style.backgroundColor);
    if (square.style.backgroundColor === "green") {
        square.style.backgroundColor = "blue";
        console.log(texte.style.backgroundColor);
    }
  
});



boutondisparait.addEventListener("click", function () {

    if (square.style.display === "block"){
        square.style.display = "none";
        console.log(square.style.display);
    }
    
});


boutonapparait.addEventListener("click", function () {

    if (square.style.display === "none"){
        square.style.display = "block";
        console.log(square.style.display);
    }
    
});


document.addEventListener("keydown", keypress);
document.addEventListener("keyup", keyclear);



function keypress(e){

    if (e.keyCode === 38) {
       square.style.top ="0px";
        console.log(square.style.Bottom);
    }
    
    
}


function keyclear(e){

    if (e.keyCode === 38) {
       square.style.top ="100px";
        console.log(square.style.Bottom);
    }
    
    
}















