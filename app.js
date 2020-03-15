// JAVASCRIPT FILE //
let lives = 10;

// List of words and hints --> the hint and word have to be in same index
let wordList = ["cindy", "hudson", "arjun"];
let hintList = ["has a bio degree from UBC", "is youngest in program(?)", "has bio degree from uvic"];

// Decide which index/word onload  --> we gonna need to make it happen after a game is done too somehow
let wordIndex = Math.floor(Math.random() * wordList.length);
let secretWord = wordList[wordIndex]; // Select a random word from the wordList
let hint = hintList[wordIndex]

let lettersLeft = secretWord.length

// display _ for each letter of selected word
let blankWord = [];
for (i = 0; i < secretWord.length; i++){
    blankWord[i] = "_"
}

console.log(secretWord);
console.log(hint);
console.log(blankWord);
console.log(blankWord.join(" "));  // this is what should get written into the HTML 


function lifeReducer() {
    lives -= 1;
    if (lives == 0){
        alert("Game over")
    }
}

function checkWonGame() {
    lettersLeft -= 1;
    if (lettersLeft == 0){
        alert("You win")
    }
}

function guess(letter){
    counter = 0  // This is checking to see if there are any matches
    for (i = 0; i < secretWord.length; i++){
        if (secretWord[i] == letter){
            blankWord[i] = letter;
            counter += 1
            checkWonGame()
        }
    }
    if (counter == 0){  // If no matches, reduce score by 1
        lifeReducer()
    }
    console.log(counter)
    console.log(lives)
    console.log(lettersLeft)
}

// document.getElementById("keyA").onclick = guess("a");  // how do u make this not happen automatically lol
console.log(lives)
console.log(secretWord)
console.log(blankWord.join(" "))  // this is what should get written into the HTML 
