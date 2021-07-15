function difficulty(value) {
    var easy = document.getElementById("easy");
    var hard = document.getElementById("hard");

    if(value == "easyMode") {
        easy.style.color = "red";
        hard.style.color = "black";
    } else if(value == "hardMode") {
        hard.style.color = "red";
        easy.style.color = "black";
    }
}