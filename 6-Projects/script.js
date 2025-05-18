import quotes from "./quotes.js";

let ageCalulatorHTML = `
  <h1>Age Calculator</h1>
  <div class="age-calculator">
    <input type="date" class="age-input"/>
    <button class="age-button">Calculate</button>
  </div>
  <p class="age-display"></p>
`;
document.querySelector(".age-calculator-box").innerHTML = ageCalulatorHTML;

document.querySelector(".age-button").onclick = () => {
  const birthValue = document.querySelector(".age-input").value;
  const birth = new Date(birthValue);
  const today = new Date();

  if (!birthValue || birth > today) {
    document.querySelector(
      ".age-display"
    ).innerHTML = `Please enter a valid Birthday`;
    return;
  }

  let age = today.getFullYear() - birth.getFullYear();
  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  document.querySelector(
    ".age-display"
  ).innerHTML = `You born in <b>${birth.getFullYear()}</b> <br> so your age is <b>${age}</b>`;
};

// Quotes Generator
let quoteIndex = 0;
const quotesBox = document.querySelector(".random-quotes-box");
quotesBox.innerHTML = `
  <h1>Random Quote Generator</h1>
  <p class="quote">${quotes[quoteIndex]}</p>
`;

setInterval(() => {
  const quoteP = quotesBox.querySelector(".quote");
  quoteP.classList.add("fade-out");
  setTimeout(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteP.innerHTML = quotes[quoteIndex];
    quoteP.classList.remove("fade-out");
  }, 500);
}, 5000);

// Stop Watch

let stopWatchHTML = `
  <h1>Stop watch</h1>
  <p class="watch">00:00:00</p>
  <div class="watch-control">
    <button class="start">Start</button>
    <button class="stop">Stop</button>
    <button class="reset">Reset</button>
  </div>  
`;
document.querySelector(".stop-watch-box").innerHTML = stopWatchHTML;

const watch = document.querySelector(".watch");
let seconds = 0;
let interval = null;

function showTime() {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = seconds % 60;
  watch.textContent =
    (h < 10 ? "0" : "") +
    h +
    ":" +
    (m < 10 ? "0" : "") +
    m +
    ":" +
    (s < 10 ? "0" : "") +
    s;
}

document.querySelector(".start").onclick = function () {
  if (interval) return;
  interval = setInterval(function () {
    seconds++;
    showTime();
  }, 1000);
};

document.querySelector(".stop").onclick = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector(".reset").onclick = function () {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  showTime();
};

showTime();

// Palindrome Checker
let palindromeHTML = `
  <h1>Palindrome Checker</h1>
  <input class="palindrome-input" type="text" placeholder="Enter a word...">
  <p class="palindrome-result"></p>
  <button class="palindrome-button">Check</button>
`;
document.querySelector(".palindrome-checker-box").innerHTML = palindromeHTML;

document.querySelector(".palindrome-button").onclick = function () {
  let text = document.querySelector(".palindrome-input").value;
  let clean = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversed = clean.split("").reverse().join("");
  if (clean && clean === reversed) {
    document.querySelector(
      ".palindrome-result"
    ).textContent = `The word "${text}" is a palindrome`;
  } else {
    document.querySelector(
      ".palindrome-result"
    ).textContent = `The word "${text}" is not a palindrome`;
  }
};

// Digital clock
let clockHTML = `
  <h1>Digital Clock</h1>
  <p class="clock-time"></p>
`;
document.querySelector(".digital-clock-box").innerHTML = clockHTML;

function showClock() {
  let now = new Date();
  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  let s = now.getSeconds().toString().padStart(2, "0");
  document.querySelector(".clock-time").textContent = `${h}:${m}:${s}`;
}
showClock();
setInterval(showClock, 1000);

// Counter
let counterHTML = `
  <h1>Counter</h1>
  <p class="counter-value">0</p>
  <div class="counter-div">
    <button class="counter-increase">Increase</button>
    <button class="counter-decrease">Decrease</button>
    <button class="counter-reset">Reset</button>
  </div>
`;
document.querySelector(".counter-box").innerHTML = counterHTML;

let count = 0;
const counterValue = document.querySelector(".counter-value");

document.querySelector(".counter-increase").onclick = function () {
  count++;
  counterValue.textContent = count;
};
document.querySelector(".counter-decrease").onclick = function () {
  count--;
  counterValue.textContent = count;
};
document.querySelector(".counter-reset").onclick = function () {
  count = 0;
  counterValue.textContent = count;
};
