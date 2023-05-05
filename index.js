var selectedNumberOfDiceSides = document.querySelector("#numberOfDiceSides");
var image = document.querySelector("#diceImg");
var btn = document.querySelector("button");
var body = document.querySelector("body");

// When the first page is loaded and number of faces of dice has decided, the dice default image and css will change.
function diceGetReady(event) {
    let selectedDice = Number(selectedNumberOfDiceSides.value);

    image.src = `./images/dice-${selectedDice}/dice-${selectedDice}-faces-random.png`;

    if (selectedDice === 6) {
        body.classList.remove("lightmode");
        body.classList.add("darkmode");
    } else {
        body.classList.remove("darkmode");
        body.classList.add("lightmode");
    }
}

// Get Max number of dice
function getMaxNumber() {
    let maxNumber = Number(selectedNumberOfDiceSides.value);
    generateNumber(maxNumber);
}

// Generate random number within the max number
function generateNumber(maxNumber) {
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    image.src = `./images/dice-${maxNumber}/dice-${maxNumber}-faces-${randomNumber}.png`;
    return randomNumber;
}

window.addEventListener("load", diceGetReady);
selectedNumberOfDiceSides.addEventListener("change", diceGetReady);
btn.addEventListener("click", getMaxNumber);

/* TEST ROLL DICE FUNCTIONALITY
1. If the select's value is not NUMBER. 
=> in the function above, all the value data can be changed automatically because Number() function.
2. If random number exceed the max number.
*/

function testDiceNumber(max) {
    if (generateNumber(max) <= max) {
        console.log("Function working correctly");
    }
}

// D6 case
testDiceNumber(6);

// D10 case
testDiceNumber(10);