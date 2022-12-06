const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

// This will fetch a random word each time
async function getwords() {
    let words_url = 'https://random-word-api.herokuapp.com/all';
    try {
        let response = await fetch(words_url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

getwords().then(function(result) { // This will return an array of words
    let selectedWord = result[Math.floor(Math.random() * result.length)]; // This will select a word from the array of words
    // This will show the way
    // console.log(selectedWord);

    // let allTheLetters = ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    const correctLetters = [];
    const wrongLetters = [];

    // Show hidden word
    function displayWord() {
        wordEl.innerHTML = `
            ${selectedWord
                .split('')
                .map(letter => `
                    <span class="letter">
                        ${correctLetters.includes(letter) ? letter : ''}
                    </span>
                    `
                    )
                    .join('')}
        `;

        const innerWord = wordEl.innerText.replace(/\n/g, '');
        
        if(innerWord === selectedWord) {
            finalMessage.innerText = 'Congratulations! You won! 😊';
            popup.style.display = 'flex';
        }
    }

    // Update the wrong letters
    function updateWrongLettersEl() {
        // Display wrong letters
        wrongLettersEl.innerHTML = `
            ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
            ${wrongLetters.map(letter => `<span>${letter}</span>`)}
        `;

        // Display parts
        figureParts.forEach((part, index) => {
            const errors = wrongLetters.length;

            if(index < errors) {
                part.style.display = 'block';
            } else {
                part.style.display = 'none';
            }
        });

        // Check if lost
        if(wrongLetters.length === figureParts.length) {
            finalMessage.innerText = 'Unfortunately you lost. 😔';
            popup.style.display = 'flex';
        }
    }

    // Show notification
    function showNotification() {
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }

    // Keydown letter press
    window.addEventListener('keydown', e => {
        if(e.key >= 'a' && e.key <= 'z') {
            const letter = e.key;

            if(selectedWord.includes(letter)) {
                if(!correctLetters.includes(letter)) {
                    correctLetters.push(letter);

                    displayWord();
                } else {
                    showNotification();
                }
            } else {
                if(!wrongLetters.includes(letter)) {
                    wrongLetters.push(letter);

                    updateWrongLettersEl();
                } else {
                    showNotification();
                }
            }
        }
    });

    // Restart game and play again
    playAgainBtn.addEventListener('click', () => {
        // Empty arrays
        correctLetters.splice(0);
        wrongLetters.splice(0);

        selectedWord = result[Math.floor(Math.random() * result.length)];
        // Magic word
        // console.log(selectedWord);

        displayWord();

        updateWrongLettersEl();

        popup.style.display = 'none';
    });

    displayWord();
})