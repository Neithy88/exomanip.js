



var texte = document.getElementById("text");
texte.style.fontSize = "20px";

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














