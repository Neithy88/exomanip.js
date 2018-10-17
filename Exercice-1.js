



var texte = document.getElementById("text");
texte.style.FontSize = "20px";

texte.addEventListener("click", function () {

    if (texte.style.FontSize === "20px") {
        texte.style.FontSize = "30px";
    }


    else {
        texte.style.FontSize = "20px";


        console.log(text.style.FontSize);

    }

});














