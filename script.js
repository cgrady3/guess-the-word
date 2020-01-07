window.onload = function () {

    // Cache the DOM
    var guesses_remaining = 10;
    var displayLives = document.getElementById('myLives');
    var getHint = document.getElementById('hint');
    var displayHint = document.getElementById('clue');
    var reset = document.getElementById('reset');

    // Variables
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var category;           // Selected category
    var categories;         // Array of categories
    var guessCounter;       // Counts number of correct guesses
    var guess;              // User guess
    var guesses = [];       // Stored guesses array
    var lives;              // User lives
    var spaces;             // Number of spaces in secret word
    var word;               // Secret word

    // Functions

    // Create buttons from alphabet array
    var buttons = function () {

        letterButtons = document.getElementById('buttons');

        // Create an unordered list element for the alphabet array
        letters = document.createElement('ul');

        // Use for loop to traverse the alphabet array
        for (let i = 0; i < alphabet.length; i++) {

            // Create an ID for the unordered list
            letters.id = 'alphabet';

            // Create a list element
            list = document.createElement('li');

            // Create an ID for the list element
            list.id = 'letter'

            // Write the alphabet array element to the alphabet list
            list.innerHTML = alphabet[i];

            // Call the comparison function
            compare();

            // Add the letters to the buttons then the buttons to the list element
            letterButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }

    // Compare user guess to secret word
    var compare = function () {

        // using function within a function to making calling the function easier
        list.onclick = function () {

            // Using 'this' keyword to acknowledge referece to the inner function being called here
            var guess = (this.innerHTML);

            // Give the guess element a class of active
            this.setAttribute('class', 'active');

            // Reset the click
            this.onclick = null;

            // For loop to compare the users guess to the secret word
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    guesses[i].innerHTML = guess;
                    counter++;
                }
            }

            // If user guess isn't found in the secret word
            var j = (word.indexOf(guess));
            if (j === -1) {
                lives--;
                // call the game status comments function
                gameComments();
            }
            else
                gameComments();
        }

    }

    // Randomize the category and secret word
    var randomizeWord = function () {
        // Randomly chooses the index of the categories array's outer array
        category = categories[Math.floor(Math.random() * categories.length)];

        // Randomly chooses the index of the categores array's inner array
        word = category[Math.floor(Math.random() * category.length)];

        // Replace chosen word's spaces with dash character
        word = word.replace(/\s/g, '-');

        console.log(word);
    }

    // Display Selected Category
    var displayCategory = function () {
        // Using 'if' statement to equate category titles to categories array outer index's
        if (category === categories[0]) {
            document.getElementById('categoryName').innerHTML = "The Chosen Category Is Star Trek: Next Generation";
        }
        else if (category === categories[1]) {
            document.getElementById('categoryName').innerHTML = "The Chosen Category Is Star Trek: Deep Space Nine";
        }
        else if (category === categories[2]) {
            document.getElementById('categoryName').innerHTML = "The Chosen Category Is Star Trek: Voyager";
        }
    }

    // Give user hints
    getHint.onclick = function () {
        var hints = [
            ["Where Images and Stories Come To Life", "Transport For Away Missions", "Hand-Held Sensor Scanner", "Ships Name", "Counselor's Species", "Ships Android", "Human's Space Program"],
            ["Connects to the Gamma Quadrant", "Species That Owns DS9", "Captain Sysco's Connection to The Prophets", "Space 'Guns'", "Bar Owner's Species"],
            ["You Will Be Assimilated", "How Borg Grow Their Species", "Through Where You Send Long Range Messages", "Ships Name", "Turns You Into Molecules To Take You Somewhere Else"]
        ];

        // Gets index of randomly chosen inner and outer hints array
        var categoryIndex = categories.indexOf(category);
        var hintIndex = category.indexOf(word);

        displayHint.innerHTML = `Clue: ${hints[categoryIndex][hintIndex]}`;
    }

    // User lives display and game status comments
    gameComments = function () {

        // Write to HTML how many guesses the user has left
        displayLives.innerHTML = lives;

        // If conditional for when no guesses remain
        if (lives < 1)
            displayLives.innerHTML = 'Game Over';

        // If statement with in for loop determines if user has guessed the whole word yet
        for (let i = 0; i < guesses.length; i++) {
            if (counter + space === guesses.length)
                displayLives.innerHTML = 'You Guessed the Secret Word!';
        }
    }

    // Store user guesses in guesses array
    userGuesses = function () {

        wordContainer = document.getElementById('holder');

        // Create an unordered list element withing the word container
        correctGuess = document.createElement('ul');

        // For loop to generate blank spaces for each letter of the secret word
        for (let i = 0; i < word.length; i++) {

            // Give the unordered list element an ID of secretWord
            correctGuess.setAttribute('id', 'secretWord');

            // Create a list element
            guess = document.createElement('li');

            // Give the new list element a class of guess
            guess.setAttribute('class', 'guess');

            // If loop determines number of spaces in the word and replaces letters with an underscore
            if (word[i] === '-') {
                guess.innerHTML = '-';
                space++;
            }
            else
                guess.innerHTML = '_';

            // append guesses array and guesses list
            guesses.push(guess);
            wordContainer.appendChild(correctGuess);
            correctGuess.appendChild(guess);
        }
    }

    // Game reset function
    document.getElementById('gameReset').onclick = function () {
        correctGuess.parentNode.removeChild(correctGuess);
        letterButtons.parentNode.removeChild(letterButtons);
        displayHint.innerHTML = '';
        location.reload();
    }

    // Play game function
    gamePlay = function () {

        guesses = [];
        counter = 0;
        space = 0;
        lives = 10;

        categories = [
            ["holodeck", "suttlecraft", "tricorder", "enterprise", "betazoid", "data", "starfleet"],
            ["wormhole", "bajoran", "emissary", "phasers", "ferengi"],
            ["borg", "assimilate", "subspace", "voyager", "transporter"]
        ];

        randomizeWord();
        buttons();
        userGuesses();
        gameComments();
        displayCategory();
    }

    gamePlay();

}