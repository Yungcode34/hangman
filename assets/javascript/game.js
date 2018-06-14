
//creating global variables//
var wordList = ["webdev","javascript","programming","life","reading","glory","fantastic"]
var chosenWord = "";
var letterInChosenWord = [];
var numBlanks= 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var numGuesses = 15;
var winCounter = 0;
var lossCounter = 1;

function startGame(){
    wrongGuesses = [];
    numGuesses = 15;
    blanksAndSuccesses = [];
    //creatin our random word selector//
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;

    for(var i = 0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }
    document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guesses-left").innerHTML = numGuesses;

}
//creating our letter checking function//
function checkLetters(letter){

    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] === letter){
            blanksAndSuccesses[i] = letter;

        }

        }
    }else{
        numGuesses --;
        wrongGuesses.push(letter)
    }
}
//once we completed a round this functon will pretty much reset our game and keep score//
function roundComplete(){
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");    

    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("You win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you don't have any more guesses");        
        startGame();
    }




}
startGame();
document.onkeyup = function(event){
    /* its going to take in the letter that we type in
       its going to pass it through the CheckLetter function */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    roundComplete();

}
