let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil((Math.random()) * 100);

console.log(randomNumber);


function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    
    if(guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "red";
    } 
    else if(guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "grey";
    }
    else if(guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it rigth."
        gameResult.style.backgroundColor = "green";
    }
    else {
        gameResult.textContent = "Give the correct input...";
        gameResult.style.backgroundColor = "red";
    }
}