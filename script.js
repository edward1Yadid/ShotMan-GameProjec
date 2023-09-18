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

//radnom word and hint
let { word, hint } = worldList[Math.floor(Math.random() * worldList.length)];

let wordChhosen = word;

// array for current letter or uncurrent
let wrongletterArray = [];
let correctletter = [];
/// keyDown keyboard
document.addEventListener("keydown", keyboardLetter);
const lowerCaseRext = /[a-z]/;
function keyboardLetter(event) {
  if (event.key === event.key.toLowerCase() && event.key.match(lowerCaseRext)) {
    const letterKey = event.key;
    // conditon for only loewrCse
    if (wordChhosen.includes(letterKey)) {
      if (!correctletter.includes(letterKey)) {
        // check if the letter pressed twice for push to awway only once
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

hinttext.innerHTML = `question: ${hint} `;
function showTheWorld() {
  console.log(correctletter);
  let li = "";
  wordChhosen.split("").map((value) => {
    li += ` <li class="letter">${
      correctletter.includes(value) ? value : ""
    }</li>`;
  }); // check if the letter includs in the word and if yes the letter is visiblei if not the letter is disible
  worddisplay.innerHTML = li;
  const clearLetter = worddisplay.innerText.replace(/\n/g, "");
  if (wordChhosen == clearLetter) {
    winMessage.innerText =
      "Congratulations on an amazing win!, because of you i'm alive🤣";
    popUp.style.display = "flex";
  }
}

// popUp notification

function notification() {
  const notification = document.getElementById("cointaer-notification");
  notification.style.display = "flex";
  notification.style.backgroundColor = "yellow";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

// update letterUcorrect
let count = 0;
function UpdateWrongLetter(letterKey) {
  wrongletterArray.push(letterKey); // push to array the wrong letter
  wrongL.innerHTML = `wrong Letter:${wrongletterArray.join("")}`;
  count = wrongletterArray.length;
  guessestext.innerHTML = `Incorrect guesses:<b> ${count} / 5</b>`;
  const condolenceChhosen =
    condolence[Math.floor(Math.random() * condolence.length)];
  randomline.innerHTML = `condolence:
    <br/>
  ${condolenceChhosen}`;

  bodyParts.forEach((parts, index) => {
    if (index < count) {
      parts.style.display = "block";
    } else {
      parts.style.display = "none";
    }
  });

  if (count == 5) {
    setTimeout(() => {
      winMessage.innerText = "Game over, man! Game over!, i'm dead🤣";
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

//undape condolence line or bleesing line
function UpdateBlessLine() {
  const blessChhosen =
    blessingLines[Math.floor(Math.random() * blessingLines.length)];
  console.log(blessChhosen);
  randomline.innerHTML = `blessLine:
  <br/>
  ${blessChhosen}`;
}

let sound = document.getElementById("mySound");
function playAudio() {
  sound.play();
}

// Restart game and play again
plyaAgainButton.addEventListener("click", removeAllElements);
//  Empty arrays
function removeAllElements(event) {
  popUp.style.display = "none";

  correctletter.splice(0, correctletter.length);
  wrongletterArray.splice(0, wrongletterArray.length);

  console.log(correctletter, wrongletterArray);

  UpdateWrongLetter();

  clearAll();
  let { word, hint } = worldList[Math.floor(Math.random() * worldList.length)];
  wordChhosen = word;
  hinttext.innerHTML = `question: ${hint} `;
  showTheWorld();
  console.log(wordChhosen, hint);
}
function clearAll() {
  count = 0;
  guessestext.innerHTML = `Incorrect guesses:<b> ${count} / 5</b>`;
  randomcondolence.innerText = "";
  fat.style.display = "none";

  bodyPartsGun.forEach((value) => {
    value.style.display = "none";
  });
  gun.style.display = "none";
  wrongletterArray = [];
}
