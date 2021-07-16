function setDifficulty(diff) {
    if(diff == "easyMode") {
        easy.style.color = "red";
        hard.style.color = "black";
    } else if(diff == "hardMode") {
        hard.style.color = "red";
        easy.style.color = "black";
    }
}

function clearOutput() {
    output.textContent = "";
}

function removeLast() {
    output.textContent = output.textContent.slice(0, -1);
}

function calculate(val) {
    output.textContent += val;
}