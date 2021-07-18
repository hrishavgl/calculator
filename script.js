function cal(value) {
    if(value == "Easy") {
        setting = value;
    }
    else if(value == "Hard") {
        setting = value;
    }
    else if(output.textContent == "calculations to solve all your tribulations") {
        if(value != "AC" && value != "DEL" && value != "=") {
            output.textContent = value;
        }
    }
    else if(value == "AC") {
        output.textContent = "calculations to solve all your tribulations";
    }
    else if(value == "DEL") {
        output.textContent = output.textContent.slice(0, -1);
    }
    else if(value == "=") {
        output.textContent = eval(output.textContent);
    }
    else {
        output.textContent += value;
    }
    randomize(setting);
}


buttons = [b01.textContent, b02.textContent, b03.textContent, b04.textContent, b05.textContent, b06.textContent, b07.textContent, b08.textContent, b09.textContent, b10.textContent, b11.textContent, b12.textContent, b13.textContent, b14.textContent, b15.textContent, b16.textContent];

buttonsCopy = [];
for(i = 0; i < buttons.length; i++) {
    buttonsCopy[i] = buttons[i];
}


function randomize(difficulty) {
    if(difficulty == "Easy") {
        b17.style.color = "red";
        b19.style.color = "black";

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
    else if(difficulty == "Hard") {
        b17.style.color = "black";
        b19.style.color = "red";

        buttonsCopy.sort(() => Math.random() - 0.5)

        b01.textContent = buttonsCopy[0];
        b02.textContent = buttonsCopy[1];
        b03.textContent = buttonsCopy[2];
        b04.textContent = buttonsCopy[3];
        b05.textContent = buttonsCopy[4];
        b06.textContent = buttonsCopy[5];
        b07.textContent = buttonsCopy[6];
        b08.textContent = buttonsCopy[7];
        b09.textContent = buttonsCopy[8];
        b10.textContent = buttonsCopy[9];
        b11.textContent = buttonsCopy[10];
        b12.textContent = buttonsCopy[11];
        b13.textContent = buttonsCopy[12];
        b14.textContent = buttonsCopy[13];
        b15.textContent = buttonsCopy[14];
        b16.textContent = buttonsCopy[15];
    }
}