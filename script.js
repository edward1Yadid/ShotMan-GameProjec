// DOM elements
const worddisplay = document.getElementById("word-display");
const wrongLetter = document.getElementById("wrong-letter");
const letter = document.querySelector(".letter");
const winMessage = document.getElementById("message");
const popUp = document.getElementById("popUp");
const plyaAgainButton = document.getElementById("plyaAgainButton");
const guessestext = document.getElementById("guesses-text");
const wrongL = document.getElementById("wrongLetter");
const bodyParts = document.querySelectorAll(".bodyParts");
const bodyPartsGun = document.querySelectorAll(".bodyPartsGun");
const randomline = document.getElementById("randomcondolence");
const fat = document.querySelector(".fat");
const cointaernotification = document.getAnimations("cointaer-notification");
const hinttext = document.getElementById("hint-text");

// Random word and hint
let { word, hint } = worldList[Math.floor(Math.random() * worldList.length)];
let wordChhosen = word;

// Arrays for correct and wrong letters
let wrongletterArray = [];
let correctletter = [];

// Keyboard event listener
document.addEventListener("keydown", keyboardLetter);

// Regular expression for lowercase letters
const lowerCaseRext = /[a-z]/;

// Handle keyboard letter presses
function keyboardLetter(event) {
  if (event.key === event.key.toLowerCase() && event.key.match(lowerCaseRext)) {
    const letterKey = event.key;

    // Condition for only lowercase
    if (wordChhosen.includes(letterKey)) {
      if (!correctletter.includes(letterKey)) {
        correctletter.push(letterKey);
      }
      showTheWorld();
      UpdateBlessLine();
    }
    if (
      !wrongletterArray.includes(letterKey) &&
      !correctletter.includes(letterKey)
    ) {
      UpdateWrongLetter(letterKey);
    }
  }
}

// Display the word with correct letters
function showTheWorld() {
  let li = "";
  wordChhosen.split("").map((value) => {
    li += `<li class="letter">${
      correctletter.includes(value) ? value : ""
    }</li>`;
  });
  worddisplay.innerHTML = li;
  const clearLetter = worddisplay.innerText.replace(/\n/g, "");
  if (wordChhosen == clearLetter) {
    winMessage.innerText =
      "Congratulations on an amazing win!, because of you I'm alive🤣";
    popUp.style.display = "flex";
  }
}

// Display a notification
function notification() {
  const notification = document.getElementById("cointaer-notification");
  notification.style.display = "flex";
  notification.style.backgroundColor = "yellow";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

// Update incorrect letters and display condolence line
function UpdateWrongLetter(letterKey) {
  wrongletterArray.push(letterKey);
  wrongL.innerHTML = `wrong Letter:${wrongletterArray.join("")}`;
  count = wrongletterArray.length;
  guessestext.innerHTML = `Incorrect guesses:<b> ${count} / 5</b>`;
  const condolenceChhosen =
    condolence[Math.floor(Math.random() * condolence.length)];
  randomline.innerHTML = `condolence:<br/>${condolenceChhosen}`;

  bodyParts.forEach((parts, index) => {
    if (index < count) {
      parts.style.display = "block";
    } else {
      parts.style.display = "none";
    }
  });

  if (count == 5) {
    setTimeout(() => {
      winMessage.innerText = "Game over, man! Game over!, I'm dead🤣";
      popUp.style.display = "flex";
    }, 3000);
    playAudio();
    fat.style.stroke = "red";
    const gun = document.getElementById("gun");
    bodyPartsGun.forEach((value) => {
      value.style.display = "block";
    });
    gun.style.display = "block";
  }
}

// Update blessing line
function UpdateBlessLine() {
  const blessChhosen =
    blessingLines[Math.floor(Math.random() * blessingLines.length)];
  randomline.innerHTML = `blessLine:<br/>${blessChhosen}`;
}

// Play audio
let sound = document.getElementById("mySound");
function playAudio() {
  sound.play();
}

// Restart game and play again
plyaAgainButton.addEventListener("click", removeAllElements);

// Clear all game-related elements
function removeAllElements(event) {
  popUp.style.display = "none";

  correctletter.splice(0, correctletter.length);
  wrongletterArray.splice(0, wrongletterArray.length);

  UpdateWrongLetter();

  clearAll();

  let { word, hint } = worldList[Math.floor(Math.random() * worldList.length)];
  wordChhosen = word;
  hinttext.innerHTML = `question: ${hint} `;
  showTheWorld();
}

// Clear game-related variables and elements
function clearAll() {
  count = 0;
  guessestext.innerHTML = `Incorrect guesses:<b> ${count} / 5</b>`;
  randomcondolence.innerText = "";
  fat.style.display;
}
