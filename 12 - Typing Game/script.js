const word = document.getElementById('word'),
    text = document.getElementById('text'),
    scoreEl = document.getElementById('score'),
    timeEl = document.getElementById('time'),
    endgameEl = document.getElementById('end-game'),
    settingsBtn = document.getElementById('settings-btn'),
    settings = document.getElementById('settings'),
    settingsForm = document.getElementById('settings-form'),
    difficultySelect = document.getElementById('difficulty');

// List of words for game (It will update the array of words everytime game is loaded)
// This will fetch the words from API
async function getwords() {
    let words_url = 'https://random-word-api.herokuapp.com/word?number=20';
    try {
        let response = await fetch(words_url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

getwords().then(function(result) {
    // console.log(result);

    // Generate Random Word from API to Array
    let randomWord = result[Math.floor(Math.random() * result.length)]; // This will get a random word from the list

    // Init Score
    let score = 0;

    // Init time
    let time = 10;

    // Add word to DOM
    function wordToDOM() {
        word.innerHTML = randomWord;
    }

    wordToDOM();

    text.addEventListener('input', e => {
        const insertedText = e.target.value;
        console.log(insertedText);
        console.log(randomWord);
        if (insertedText === randomWord) {
            wordToDOM();
        }
    });

})