import { generatePassword } from "./utils/passwordGenerator.js";

const passwordEl = document.getElementById("password-el");
const copyBtn = document.getElementById("copy-btn");
const generatorBtn = document.getElementById("generator-btn");

generatorBtn.addEventListener("click", () => {
  const password = generatePassword(12, true, true, true);
  passwordEl.textContent = password;
  copyBtn.style.display = 'block';
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard
    .writeText(passwordEl.textContent)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
});
