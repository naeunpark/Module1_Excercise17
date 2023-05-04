var selectedNumberOfDiceSides = document.querySelector("#numberOfDiceSides");
var image = document.querySelector("#diceImg");
var btn = document.querySelector("button");
var body = document.querySelector("body");

function diceGetReady(event) {
    let selectedDice = Number(selectedNumberOfDiceSides.value);

    image.src = `./images/dice-${selectedDice}/dice-${selectedDice}-faces-random.png`;

    if (selectedDice === 6) {
        console.log(body);
        body.classList.remove("lightmode");
        body.classList.add("darkmode");
    } else {
        body.classList.remove("darkmode");
        body.classList.add("lightmode");
    }
}

function generateNumber() {
    let selectedDice = Number(selectedNumberOfDiceSides.value);
    let randomNumber = Math.floor(Math.random() * selectedDice) + 1;

    image.src = `./images/dice-${selectedDice}/dice-${selectedDice}-faces-${randomNumber}.png`;
}

window.addEventListener("load", diceGetReady);
selectedNumberOfDiceSides.addEventListener("change", diceGetReady);
btn.addEventListener("click", generateNumber);