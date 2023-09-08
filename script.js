let naam = window.prompt("Wat is uw naam?");
var foto = document.getElementById("welkom_foto");

if (naam == "") {
    document.getElementById("welkom").innerHTML = "Welkom!";
} else if (naam > -10000) {
    document.getElementById("welkom").innerHTML = "Welkom!";
} else if (naam == "charaf") {
    document.getElementById("welkom").innerHTML = "Welkom baas!";
} else if (naam == "Charaf") {
    document.getElementById("welkom").innerHTML = "Welkom baas!";
} else {
    document.getElementById("welkom").innerHTML = "Welkom " + naam + "!";
}

const image = ["media/charaf.jpg", "media/pipboy.png", "img3"];

function imageChange() {

    foto.src = image[0];
}

imageChange();

foto.addEventListener("click", function () {
    var foto = document.getElementById("welkom_foto");
    foto.src = image[1];
    console.log("klik")
});

