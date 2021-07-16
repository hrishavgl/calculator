function addValue(val) {
    output.textContent += val;
}

function removeAll() {
    output.textContent = "";
}

function removeLast() {
    output.textContent = output.textContent.slice(0, -1);
}

function setDifficulty(diff) {
    if(diff == "easyMode") {
        easy.style.color = "red";
        hard.style.color = "black";
    } else if(diff == "hardMode") {
        hard.style.color = "red";
        easy.style.color = "black";
    }
}