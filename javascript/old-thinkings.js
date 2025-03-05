import { projects } from "./projects.js";
const showSidebar = document.querySelector(".menu-btn");
const closeSidebar = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const themeToggleMain = document.getElementById("theme-toggle-main");
const themeToggle = document.getElementById("theme-toggle");

const lightModeMain = document.getElementById("light-mode-main");
const darkModeMain = document.getElementById("dark-mode-main");
const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");

function saveToLocaleStorage() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

themeToggleMain.addEventListener("click", () => {
  saveToLocaleStorage();
});

themeToggle.addEventListener("click", () => {
  saveToLocaleStorage();
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// themeToggleMain.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

darkModeMain.addEventListener("click", () => {
  darkModeMain.style.display = "none";
  lightModeMain.style.display = "flex";
});

lightModeMain.addEventListener("click", () => {
  darkModeMain.style.display = "flex";
  lightModeMain.style.display = "none";
});

darkMode.addEventListener("click", () => {
  darkMode.style.display = "none";
  lightMode.style.display = "flex";
});
lightMode.addEventListener("click", () => {
  darkMode.style.display = "flex";
  lightMode.style.display = "none";
});

// show Sidebar
showSidebar.addEventListener("click", () => {
  sidebar.style.display = "flex";
  document.body.addEventListener("click", closeSidebarOnClickOutside);
});

// close Sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.style.display = "none";
  document.body.removeEventListener("click", closeSidebarOnClickOutside);
});

function closeSidebarOnClickOutside(event) {
  if (!sidebar.contains(event.target) && !showSidebar.contains(event.target)) {
    sidebar.style.display = "none";
    document.body.removeEventListener("click", closeSidebarOnClickOutside);
  }
}

function showTranslation() {
  const languageToggle = document.getElementById("language-toggle");
  const languageToggleTwo = document.getElementById("language-toggle-two");
  
  
  languageToggle.addEventListener("click", () => {
    const enElements = document.querySelectorAll(".en");
    const deElements = document.querySelectorAll(".de");

    enElements.forEach(
      (el) =>
        (el.style.display = el.style.display === "none" ? "flex" : "none")
    );
    deElements.forEach(
      (el) =>
        (el.style.display = el.style.display === "none" ? "flex" : "none")
    );

    if (languageToggle.innerText === "DE") {
      languageToggle.innerText = "EN";
      languageToggleTwo.innerText = 'EN';
    } else {
      languageToggle.innerText = "DE";
      languageToggleTwo.innerText = "DE";
    }
  });


  languageToggleTwo.addEventListener("click", () => {
    const enElements = document.querySelectorAll(".en");
    const deElements = document.querySelectorAll(".de");

    enElements.forEach(
      (el) =>
        (el.style.display = el.style.display === "none" ? "flex" : "none")
    );
    deElements.forEach(
      (el) =>
        (el.style.display = el.style.display === "none" ? "flex" : "none")
    );

    if (languageToggleTwo.innerText === "DE") {
      languageToggleTwo.innerText = "EN";
      languageToggle.innerText = "EN";
    } else {
      languageToggleTwo.innerText = "DE";
      languageToggle.innerText = "DE";
    }
  });
}
showTranslation();