function addValue(val) {
    if(output.textContent.includes("a")) {
        removeAll();
        output.textContent += val;
    } else {
        output.textContent += val;
    }
}

function removeAll() {
    output.textContent = "";
}

function removeLast() {
    output.textContent = output.textContent.slice(0, -1);
}

function setDifficulty(diff) {
    if(diff == "Easy") {
        easy.style.color = "red";
        hard.style.color = "black";
    } else if(diff == "Hard") {
        hard.style.color = "red";
        easy.style.color = "black";
        randomizeButtons();
    }
}

function randomizeButtons() {
    buttons = [b01.textContent, b02.textContent, b03.textContent, b04.textContent, b05.textContent, b06.textContent, b07.textContent, b08.textContent, b09.textContent, b10.textContent, b11.textContent, b12.textContent, b13.textContent, b14.textContent, b15.textContent, b16.textContent];

    buttons.sort(() => Math.random() - 0.5)

    b01.textContent = buttons[0];
    b02.textContent = buttons[1];
    b03.textContent = buttons[2];
    b04.textContent = buttons[3];
    b05.textContent = buttons[4];
    b06.textContent = buttons[5];
    b07.textContent = buttons[6];
    b08.textContent = buttons[7];
    b09.textContent = buttons[8];
    b10.textContent = buttons[9];
    b11.textContent = buttons[10];
    b12.textContent = buttons[11];
    b13.textContent = buttons[12];
    b14.textContent = buttons[13];
    b15.textContent = buttons[14];
    b16.textContent = buttons[15];
}