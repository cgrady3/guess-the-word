// Cache the DOM
var guesses_remaining = 10;
var displayLives = document.getElementById('mylives');
var getHint = document.getElementById('hint');
var displayHint = document.getElementById('clue');
var letterButtons = document.getElementById('buttons');
var wordContainer = document.getElementById('holder');
var reset = document.getElementById('reset');

// Variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var categorie;          // Selected category
var categories;         // Categories array
var guessCounter = 0;   // Counts number of correct guesses
var guess;              // User guess
var guesses = [];       // Stored guesses array
var lives = 10;         // User lives
var spaces = 0;         // Number of spaces in secret word
var word;               // Secret word

// Functions

// Create buttons from alphabet array
var buttons = function (){
    // Create a list element
    let list = document.createElement('li');

    // Create an ID for the list element
    list.id = 'letter'

    // Create an unordered list element for the alphabet array
    let letters = document.createElement('ul');

    // Create an ID for the unordered list
    letters.id = 'alphabet';
    
    // Use for loop to traverse the alphabet array
    for (let i = 0; i < alphabet.length; i++){

        // Write the alphabet array element to the alphabet list
        list.innerHTML = alphabet[i];

        // Add the letters to the buttons then the buttons to the list element
        letterButtons.appendChild(letters);
        letters.appendChild(list);
    }
}
