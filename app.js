

// JAVASCRIPT FILE //
let lives = 7;
let gameScore = 0;


// List of words and hints --> the hint and word have to be in same index
// expand it to 10 words!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let wordList = ["cindy", "hudson", "arjun", 'mrna', 'jumpsuit', 'ygritte', 'khaleesi', 'redwedding'];
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
for (i = 0; i < secretWord.length; i++) {
    blankWord[i] = "_"
}

console.log(secretWord);
console.log(hint);
console.log(blankWord);
console.log(blankWord.join(" "));  // this is what should get written into the HTML 

// Defining the keyboard wrapper
const keyboard = document.getElementById('keyboard');

// Creating buttons
createButtons()


function lifeReducer() {
    lives -= 1;
    picChange();
    if (lives == 0) {
        let person = prompt("You Lost! Please enter your name", "Name");
        alert(person+ " you lost. Game over, your score is "+ gameScore);
    }
}

// change picture
function picChange(){
    let image = document.getElementById('hangmanImg');
    let imageList = ['src/pic0.png','src/pic1.png', 'src/pic2.png', 'src/pic3.png', 'src/pic4.png', 'src/pic5.png', 'src/pic6.png', 'src/pic7.png']
    image.src = imageList[7-lives];
}

function checkWonGame() {
    lettersLeft -= 1;
    if (lettersLeft == 0) {
        let person = prompt("You Won! Please enter your name", "Name");
        alert(person + ', your score is '+ gameScore);
    }
}

function guess(btn) {
    element = btn.target;
    letter = element.innerHTML;
    counter = 0  // This is checking to see if there are any matches

    if (guessList.includes(letter)) {
        alert("Already guessed.");

    } else {
        guessList.push(letter);
        showGuesses();

        for (i = 0; i < secretWord.length; i++) {
            if (secretWord[i] == letter) {
                blankWord[i] = letter;
                counter += 1;
                gameScore += counter;
                showWord();
                checkWonGame();
                
            }
            
        }
        if (counter == 0) {  // If no matches, reduce score by 1
            lifeReducer();
            gameScore -= 1;
        }
    }
    console.log(counter)
    showLive();
    showLetterLeft();
    
    console.log(guessList)
    showScore();
    
}


function createButtons() {
    // Create QWERTY array
    let qwerty = "qwertyuiopasdfghjklzxcvbnm".split('');

    
    for (let i = 0; i < qwerty.length; i++) {
        if (i == 10 || i == 19) {
            let linebreak = document.createElement("br");
            keyboard.appendChild(linebreak)
        }
        // Create button
        let btn = document.createElement("button")
        // Assign button's text to it's cooresponding letter
        btn.innerHTML = qwerty[i];
        btn.className = 'btn btn-md';
        // Add on click event to each button
        btn.addEventListener('click', guess);
        btn.addEventListener('click', function (btn) {
                element = btn.target
                element.className = 'btn active btn-md'
        })
        // Append it to the keyboard wrapper
        keyboard.appendChild(btn);
    }



}

// document.getElementById("keyA").onclick = guess("a");  // how do u make this not happen automatically lol
console.log(lives)
console.log(secretWord)
console.log(blankWord.join(" "))  // this is what should get written into the HTML 

// show hint
function showHint() {
    document.getElementById('hintText').innerHTML = hint;
}

// show word
function showWord() {
    document.getElementById('wordDisplay').innerHTML = blankWord.join(" ");
}
showWord();

// show live
function showLive() {
    document.getElementById('live').innerHTML = 'Lives Remaining: ' + lives;
}
showLive();

// show letter left
function showLetterLeft() {
    document.getElementById('letterLeft').innerHTML = 'Letters Remaining: ' + lettersLeft;
}
showLetterLeft();

// show guesses
function showGuesses() {
    guessList.sort()
    document.getElementById('guesses').innerHTML = 'Guessed Letters: ' + guessList.join(" ");
}

// show score
function showScore(){
    document.getElementById('score').innerHTML = 'Score Letters: ' + gameScore;
}

// end game
let gameOverbtn = document.getElementById('endGame');
gameOverbtn.addEventListener('click', function(e){
    let person = prompt("Please enter your name", "Ariana Grande");
        alert(person + ', your score is '+ gameScore);
})

// reset game
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(e){
    location.reload();
})
