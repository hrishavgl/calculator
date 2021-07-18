//does the calculations and manages the output screen
function cal(value) {
    if(value == "calculations to solve all your tribulations") {
        output.textContent = "";
        if(value != "AC" || value != "DEL" || value != "=") {
            output.textContent += value;
        }
    } else if(value == "AC") {
        output.textContent = "";
    } else if(value == "DEL") {
        output.textContent = output.textContent.slice(0, -1);
    } else if(value == "=") {
        output.textContent = eval(output.textContent)
    } else {
        output.textContent += value;
    }
    diff();
}

//randomizes buttons if difficulty is set to hard
function diff(setting) {
    buttons = [b01.textContent, b02.textContent, b03.textContent, b04.textContent, b05.textContent, b06.textContent, b07.textContent, b08.textContent, b09.textContent, b10.textContent, b11.textContent, b12.textContent, b13.textContent, b14.textContent, b15.textContent, b16.textContent];
    
    if(setting == "Easy") {
        b17.style.color = "red";
        b19.style.color = "black";

    } 
    
    else if(setting == "Hard") {
        b17.style.color = "black";
        b19.style.color = "red";

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
}