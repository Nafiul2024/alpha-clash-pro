// function hideElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }
// function showElementById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('hidden');
// }
// function setBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400');
// }
// function removeBackgroundColorById(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-orange-400');
// }

// function getARandomAlphabet(){
//     //Get or Create an Alphabet Array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);
//     //Get a random index between 0-25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
//     const alphabet = alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet;
// }

// function play(){
//     //Hidden the Home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //Show the Playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('Player Pressed ', playerPressed);
    //Get the Expected to Press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);
    //Check Matched or not
    if(playerPressed === expectedAlphabet){
        console.log('You got a Point');
        console.log('You have pressed Correctly',expectedAlphabet);
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);

        //------------------------------
        //Update Score
        //const currentScoreElement = document.getElementById('current-score');
        //const currentScoreText = currentScoreElement.innerText;
        //const currentScore = parseInt(currentScoreText);
        //------------------------------
        //Increase the score by 1
        //const newScore = currentScore + 1;
        //Show the Update Score
        //currentScoreElement.innerText = newScore;
        //removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('You missed & lost a Life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        // console.log('You missed & lost a Life');
        // //Get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText );
        // //Reduce the Life Count
        // const newLife = currentLife - 1;
        // //Display the Updated Life Count 
        // currentLifeElement.innerText = newLife;
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
}

