const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

// This will fetch a random word each time
async function getwords() {
    let words_url = 'https://random-word-api.herokuapp.com/word';
    try {
        let response = await fetch(words_url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

getwords().then(function(result) { // This will return an array of words
    let selectedWord = result[Math.floor(Math.random() * result.length)]; // This will select a word from the array of words
    // return selectedWord;
    console.log(selectedWord);

    let allTheLetters = ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

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

    displayWord();
})