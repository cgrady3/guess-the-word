// cache the DOM
var guesses_remaining = 10;
const secret_phrase_div = document.getElementsByClassName("phrase");
const hangman_div = document.getElementsByClassName("hangman");
const base_div = document.getElementById("base"); // could use numbers instead of words to index through revealing div?
const stem_div = document.getElementById("stem");
const top_div = document.getElementById("top");
const rope_div = document.getElementById("rope");
const head_div = document.getElementById("head");
const body_div = document.getElementById("body");
const left_leg_div = document.getElementById("left-leg");
const right_leg_div = document.getElementById("right-leg");
const left_arm_div = document.getElementById("left-arm");
const right_arm_div = document.getElementById("right-arm");
const wrong_guess_div = document.getElementsByClassName("bad-guess");
const end_message_div = document.getElementsByClassName("final-message");

// secret phrase array
const movies = ["mary poppins", "national treasure", "mean girls", "monsters inc.", "jurassic park"];
var phrase = movies[Math.floor(Math.random()*movies.length)];


// secret word display
function hidden_display(phrase){
    // underlines for each character
    // '/' for each space
    secret_phrase_div.innerHTML = phrase;
}

document.onkeypress = function(letter){
    // change user inputs to lower case
    var guess = letter.key.toLowerCase();

    var found_letter = confirm(letter_compare(phrase, guess));

    if (found_letter == false)
        bad_guess ();
}

// check user guess against secret phrase 
function letter_compare(phrase, letter){
    var correct = 0;
    for (i = 0; i < phrase.length; i++){
        if (letter === phrase.charAt(i)){
            letter_reveal(i);
            correct ++;
        }
    }

    if (correct > 0)
        return 1;
    else
        return 0;
}

// correct guess is made
function good_guess(){

}

// reveal the correct guess in the hidden phrase
function letter_reveal(num){

}

// incorrect guess is made
function bad_guess(){
    guesses_remaining --;
    wrong_guess_div.innerHTML = "you have " + guesses_remaining + "guesses remaining"
}

// add to hangman figure
function build_man(){

}

// diplay win or loss outcome
function final_message(){
    if (guesses_remaining == 0)
        end_message_div.innerHTML = "Game Over. You Lose";
   
}