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
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
function continueGame(){
    //Generate a Random Alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet',alphabet);
    //Show Random Alphabet to the Screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    //Set Background Color
    setBackgroundColorById(alphabet);
}
