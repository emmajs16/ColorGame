var colors = ["red", "blue", "yellow", "purple", "green", "orange", "pink", "black", "white", "brown"];
var options = ["textA", "textB", "textC"];
var randomColor;
var score = 0;

function setAttribute(id, attribute, value) {
    document.getElementById(id).setAttribute(attribute, value);
}

function setValues() {
    var color1 = colors[Math.floor(Math.random() * 9)];
    var color2 = colors[Math.floor(Math.random() * 9)];
    var color3 = colors[Math.floor(Math.random() * 9)];
    setAttribute(options[0], "value", color1);
    setAttribute(options[1], "value", color2);
    setAttribute(options[2], "value", color3);
    setAttribute("optionA", "value", color1);
    setAttribute("optionB", "value", color2);
    setAttribute("optionC", "value", color3);

}

function displayColor() {
    randomColor = colors[Math.floor(Math.random() * 10)];
    var ball = document.getElementById("colorSphere");
    ball.setAttribute("color", `${randomColor}`)
    if (randomColor !== document.getElementById(options[0]).getAttribute("value") && randomColor !== document.getElementById(options[1]).getAttribute("value") && randomColor !== document.getElementById(options[2]).getAttribute("value")) {
        reset()
    }
}

function reset() {
    setValues();
    displayColor();
    setAttribute("answer", "value", "Click the word that matches the color of the ball");
    setAttribute("answer", "visible", "true");
    setAttribute("next", "visible", "false");
    if (score == 10) {
        setAttribute("game", "visible", "false");
        setAttribute("win", "visible", "true");
    }
}

function checkA() {
    if (document.getElementById("optionA").getAttribute("value") === randomColor) {
        setAttribute("answer", "visible", "false");
        setAttribute("next", "visible", "true");
        score = score + 1;
    }
    if (document.getElementById("optionA").getAttribute("value") !== randomColor) {
        setAttribute("answer", "value", "No... keep trying!");
        score = score - 1;
    }

}

function checkB() {
    if (document.getElementById("optionB").getAttribute("value") === randomColor) {
        setAttribute("answer", "visible", "false");
        setAttribute("next", "visible", "true");
        score = score + 1;
    }
    if (document.getElementById("optionB").getAttribute("value") !== randomColor) {
        setAttribute("answer", "value", "No... keep trying!");
        score = score - 1;
    }
}

function checkC() {
    if (document.getElementById("optionC").getAttribute("value") === randomColor) {
        setAttribute("answer", "visible", "false");
        setAttribute("next", "visible", "true");
        score = score + 1;
    }
    if (document.getElementById("optionC").getAttribute("value") !== randomColor) {
        setAttribute("answer", "value", "No... keep trying!");
        score = score - 1;
    }
}

function start() {
    setAttribute("camera", "position", "0 1.5 1");
    setValues();
    displayColor();
    setAttribute("start", "visible", "false");
}


