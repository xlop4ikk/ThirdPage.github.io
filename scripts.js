var userInput = document.getElementById("userInput");
var expression = "";

function newFunction() {
    console.log(FileSystemDirectoryEntry);
}

function press(num) {  // INPUT NUM
    expression += num;
    userInput.value = expression;
}

function equal() { // =
    userInput.value = eval(expression);
    expression = '';
}

function erase() { // C
    expression = '';
    userInput.value = expression;
}

function percent() { // % 
    userInput.value = eval(expression)/100;
}

function sqrt() { // SQRT
    userInput.value = Math.sqrt(expression);
}

function square() { // SQUARE
    userInput.value = Math.pow(expression, 2);
}

function cube() { // CUBE
    userInput.value = Math.pow(expression, 3);
}

function Me() { // YOU + ME = LOVE 
    userInput.value = 'Love';
}