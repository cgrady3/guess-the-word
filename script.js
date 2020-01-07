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
var category;          // Selected category

var guessCounter = 0;   // Counts number of correct guesses
var guess;              // User guess
var guesses = [];       // Stored guesses array
var lives = 10;         // User lives
var spaces = 0;         // Number of spaces in secret word
var word;               // Secret word

// Functions

// Create buttons from alphabet array
var buttons = function () {
    // Create a list element
    let list = document.createElement('li');

    // Create an ID for the list element
    list.id = 'letter'

    // Create an unordered list element for the alphabet array
    let letters = document.createElement('ul');

    // Create an ID for the unordered list
    letters.id = 'alphabet';

    // Use for loop to traverse the alphabet array
    for (let i = 0; i < alphabet.length; i++) {

        // Write the alphabet array element to the alphabet list
        list.innerHTML = alphabet[i];

        // Add the letters to the buttons then the buttons to the list element
        letterButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

// Randomize the category and secret word
var randomizeWord = function () {
    // Randomly chooses the index of the categories array's outer array
    category = categories[Math.floor(Math.random() * categories.length)];

    // Randomly chooses the index of the categores array's inner array
    word = category[Math.floor(Math.random() * category.length)];

    // Replace chosen word's letters with spaces
    word = word.replace(/\s/g, '-');

    console.log(word);

}

// Display Selected Category
var displayCategory = function () {
    // Using 'if' statement to equate category titles to categories array outer index's
    if (category === categories[0]) {
        catagoryName.innerHTML = "The Chosen Category Is Star Trek: Next Generation";
    }
    else if (category === categories[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Star Trek: Deep Space Nine";
    }
    else if (category === categories[2]) {
        catagoryName.innerHTML = "The Chosen Category Is Star Trek: Voyager";
    }
}

// Give user hints
getHint.onclick = function () {
    var categories = [
        ["holodeck", "suttlecraft", "tricorder", "enterprise", "betazoid", "data", "starfleet"],
        ["wormhole", "bajoran", "emissary", "phasers", "ferengi"],
        ["borg", "assimilate", "subspace", "voyager", "transporter"]
    ];
    var hints = [
        ["Where Images and Stories Come To Life", "Transport For Away Missions", "Hand-Held Sensor Scanner", "Ships Name", "Counselor's Species", "Ships Android", "Human's Space Program"],
        ["Connects to the Gamma Quadrant", "Species That Owns DS9", "Captain Sysco's Connection to The Prophets", "Space 'Guns'", "Bar Owner's Species"],
        ["You Will Be Assimilated", "How Borg Grow Their Species", "Through Where You Send Long Range Messages", "Ships Name", "Turns You Into Molecules To Take You Somewhere Else"]
    ];

    var categoryIndex = categories.indexOf(category);
    var hintIndex = category.indexOf(word);

    displayHint.innerHTML = `Clue: ${hints[categoryIndex][hintIndex]}`
}
