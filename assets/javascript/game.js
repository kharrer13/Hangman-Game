var characters = ["milhouse", "dr nick riviera", "nelson muntz", "lenny leonard", "principal skinner", "otto man", "apu nahasapeemapetilon", "maggie simpson", "preofessor frink", "comic book guy", "krusty the clown", "barney gumble", "marge simpson", "lisa simpson", "abe simpson", "chief wiggum", "ned flanders", "sideshow bob", "ralph wiggum", "moe szyslak", "groundskeeper willie", "mr burns", "bart simpson", "homer simpson"];
var images = {"milhouse": "milhouse.png" ,
    "dr nick riviera" : "dr nick.jpg", 
    "nelson muntz" : "nelson.png" , 
    "lenny leonard" : "lenny.jpg" , 
    "principal skinner" : "skinner.jpg" , 
    "otto man" : "otto.jpg" , 
    "apu nahasapeemapetilon" : "Apu.jpg" , 
    "maggie simpson" : "maggie.jpg" , 
    "preofessor frink" : "frink.png", 
    "comic book guy" :"comic.jpg", 
    "krusty the clown" : "krusty.jpg" , 
    "barney gumble" : "barney.jpg", 
    "marge simpson" : "Marge.jpg", 
    "lisa simpson" : "Lisa.jpg", 
    "abe simpson" : "abe" , 
    "chief wiggum" : 'wiggum.jpg' , 
    "ned flanders" : 'ned.jpg' , 
    "sideshow bob" : 'bob.png' , 
    "ralph wiggum" : 'ralph.jpg', 
    "moe szyslak" : 'moe.jpg' , 
    "groundskeeper willie" : 'willie.jpg' , 
    "mr burns" : 'burns.png' , 
    "bart simpson" : "bart.jpg", 
    "homer simpson" : "homer.jpg"};
var gameAnswer = [];
var answerBlank = [];
var guessedLetters = [];
var playing = false;
var wins = 0;
var losses = 0;
var remaining = 12;

var winsTot = document.getElementById("wins");
var lossTot = document.getElementById("losses");
var curentWord = document.getElementById("current-word");
var guesses = document.getElementById("guesses");
var guessed = document.getElementById("guessed");
var image = document.getElementById("winning-char");

document.onkeyup = function(event) {

    // Start the game
    if (event.keyCode == 32 && playing == false) {
    
        // Randomly chooses a name from the characters array. This is the games' word.
        gameAnswer = characters[Math.floor(Math.random() * characters.length)].split("");

        document.getElementById("winning-char").src = "./assets/images/all_the_simpsons.jpg"

        // Create array of -s to represent the word, skipping spaces
        for (let i = 0; i < gameAnswer.length; i++) {
            if (gameAnswer[i] == " ") {
                answerBlank.push(" ");
            } else {
                answerBlank.push("-");
            }
        }

        curentWord.textContent = answerBlank.join("");
        guesses.textContent = remaining;
        guessed.textContent = guessedLetters;

        // Set playing value equal to true
        playing = true;
    }

    // React to letters entered if game is playing, the letter hasn't been guessed yet, and the input is a letter
    if (playing == true && guessedLetters.indexOf(event.key) == -1 && event.which <= 90 && event.which >= 65) {

        // Add guesed key to guessed list
        guessedLetters.push(event.key);

        if(gameAnswer.indexOf(event.key) >= 0) {

            // Go through the answer looking for the key entered, replace blanks with letter where needed
            for (let i = 0; i < gameAnswer.length; i++) {
                if (event.key == gameAnswer[i]){
                    answerBlank[i] = event.key;
                }
            }

            curentWord.textContent = answerBlank.join("");
            guessed.textContent = guessedLetters.join(' ');
            guesses.textContent = remaining;

            // Check to see if player won
            if (gameAnswer.join("") == answerBlank.join("")) {
                alert("YOU WIN");
                wins++;
                winsTot.textContent = wins;
                document.getElementById("winning-char").src = "./assets/images/" + images[gameAnswer.join("")];
                reset();
            }
        
        } else {
            // Reduce the number of guesses left by one
            remaining--;

            guesses.textContent = remaining;
            guessed.textContent = guessedLetters.join(' ');

            // If out of guesses, the player lost
             if (remaining == 0) {
                alert("You Lost :( ")
                losses++;
        
                curentWord.textContent = gameAnswer.join("");
                lossTot.textContent = losses;
                reset();
            }
        }
    }
}

function reset() {
    playing = false;
    answerBlank = [];
    guessedLetters = []
    remaining = 12;
}

function showPicture() {

}