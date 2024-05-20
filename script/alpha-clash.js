
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('Player Pressed ', playerPressed);
    //Stop the game if pressed 'esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }
    //Get the Expected to Press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed,expectedAlphabet);
    //Check Matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('You got a Point');
        // console.log('You have pressed Correctly',expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        
        // Update Score
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);
        continueGame();
    }
    else{
        // console.log('You missed & lost a Life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);
        if (updatedLife === 0){
        gameOver();
    }
    }
    
}
//Capture Keyboard Key Press
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');
    // Reset Score And Life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
    
}
function continueGame(){
    //Generate a Random Alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your Random Alphabet',alphabet);

    //Show Random Alphabet to the Screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    //Set Background Color
    setBackgroundColorById(alphabet);
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //Update Final Score 
    const lastScore = getTextElementValueById('current-score');
    // console.log(lastScore);
    setTextElementValueById('last-score',lastScore);
    // Clear the last selected Alphabet
    const currentAlphabet = getTextElementById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

