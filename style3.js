

var square = document.getElementById("rectangle");

square.style.height="100px";
square.style.width="100px";
square.style.left="45%";
square.style.backgroundColor="blue";
square.style.position="relative";
square.style.top="100px";



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





