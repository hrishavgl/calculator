function setDifficulty(diff) {
    easy = easyButton;
    hard = hardButton;

    if(diff == "easyMode") {
        easy.style.color = "red";
        hard.style.color = "black";
    } else if(diff == "hardMode") {
        hard.style.color = "red";
        easy.style.color = "black";
    }
}

function clearOutput() {
    outputArea.textContent = "";
}

function removeLast() {
    outputArea.textContent = outputArea.textContent.slice(0, -1);
}

function calculation(val) {
    alert(val);
}