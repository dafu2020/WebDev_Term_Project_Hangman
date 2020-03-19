// JAVASCRIPT FILE //
let lives = 10;

// List of words and hints --> the hint and word have to be in same index
let wordList = ["cindy", "hudson", "arjun", 'mrna', 'jumpsuit','Ygritte', 'khaleesi', 'redwedding'];
let hintList = ["has a bio degree from UBC", "is youngest in program(?)", "has bio degree from uvic", 'a coding RNA that functions as the template for protein synthesis',
                'the epic outfit Phoebe Waller-Bridge pulled off in Fleabag', '\'You know nothing Jon Snow.\'', 'a Dothraki word referring to the wife of the khal, or warlord of a khalasar, a Dothraki clan or tribe.',
                'a massacre that takes place at the wedding that was intended to make peace between the Starks and the Freys'];

// Decide which index/word onload  --> we gonna need to make it happen after a game is done too somehow
let wordIndex = Math.floor(Math.random() * wordList.length);
let secretWord = wordList[wordIndex]; // Select a random word from the wordList
let hint = hintList[wordIndex];

let lettersLeft = secretWord.length;
let guessList = [];

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
        alert("Game over");
    }
}

function checkWonGame() {
    lettersLeft -= 1;
    if (lettersLeft == 0){
        alert("You win");
    }
}

function guess(letter){
    counter = 0  // This is checking to see if there are any matches

    if (guessList.includes(letter)){
        alert("Already guessed.")

    }else{
        guessList.push(letter);
        showGuesses();

        for (i = 0; i < secretWord.length; i++){
            if (secretWord[i] == letter){
                blankWord[i] = letter;
                counter += 1;
                checkWonGame();
            }
        }
        if (counter == 0){  // If no matches, reduce score by 1
            lifeReducer();
        }
    }
    console.log(counter)
    showLive();
    showLetterLeft();
    showWord(); 
    console.log(guessList)
}

// document.getElementById("keyA").onclick = guess("a");  // how do u make this not happen automatically lol
console.log(lives)
console.log(secretWord)
console.log(blankWord.join(" "))  // this is what should get written into the HTML 

// show hint
function showHint(){
    document.getElementById('hintText').innerHTML = hint;
}

// show word
function showWord(){
    document.getElementById('wordDisplay').innerHTML = blankWord.join(" ");
}
showWord();

// show live
function showLive(){
    document.getElementById('live').innerHTML = 'Lives Remaining: '+ lives;
}
showLive();

// show letter left
function showLetterLeft(){
    document.getElementById('letterLeft').innerHTML = 'Letters Remaining: '+ lettersLeft;
}
showLetterLeft();

// show guesses
function showGuesses(){
    guessList.sort()
    document.getElementById('guesses').innerHTML = 'Guessed Letters: '+ guessList.join(" ");
}
