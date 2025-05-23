import {projects} from './projects.js';
const showSidebar = document.querySelector(".menu-btn");
const closeSidebar = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const themeToggleMain = document.getElementById("theme-toggle-main");
const themeToggle = document.getElementById("theme-toggle");
const lightModeMain = document.getElementById("light-mode-main");
const darkModeMain = document.getElementById("dark-mode-main");
const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
}

[themeToggleMain, themeToggle].forEach((toggle) =>
  toggle.addEventListener("click", toggleDarkMode)
);

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

function toggleDisplay(element1, element2) {
  element1.style.display = "none";
  element2.style.display = "flex";
}

darkModeMain.addEventListener("click", () =>
  toggleDisplay(darkModeMain, lightModeMain)
);
lightModeMain.addEventListener("click", () =>
  toggleDisplay(lightModeMain, darkModeMain)
);
darkMode.addEventListener("click", () => toggleDisplay(darkMode, lightMode));
lightMode.addEventListener("click", () => toggleDisplay(lightMode, darkMode));

showSidebar.addEventListener("click", () => {
  sidebar.style.display = "flex";
  document.body.addEventListener("click", closeSidebarOnClickOutside);
});

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

function toggleLanguage() {
  const enElements = document.querySelectorAll(".en");
  const deElements = document.querySelectorAll(".de");
  enElements.forEach(
    (el) => (el.style.display = el.style.display === "none" ? "grid" : "none")
  );
  deElements.forEach(
    (el) => (el.style.display = el.style.display === "none" ? "grid" : "none")
  );
  const newLang = this.innerText === "DE" ? "EN" : "DE";
  document
    .querySelectorAll("#language-toggle, #language-toggle-two")
    .forEach((toggle) => (toggle.innerText = newLang));
  localStorage.setItem("language", newLang);
}

document
  .querySelectorAll("#language-toggle, #language-toggle-two")
  .forEach((toggle) => toggle.addEventListener("click", toggleLanguage));

function applyStoredLanguage() {
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    const enElements = document.querySelectorAll(".en");
    const deElements = document.querySelectorAll(".de");
    if (storedLanguage === "DE") {
      enElements.forEach((el) => (el.style.display = "none"));
      deElements.forEach((el) => (el.style.display = "grid"));
    } else {
      enElements.forEach((el) => (el.style.display = "grid"));
      deElements.forEach((el) => (el.style.display = "none"));
    }
    document
      .querySelectorAll("#language-toggle, #language-toggle-two")
      .forEach((toggle) => (toggle.innerText = storedLanguage));
  }
}

applyStoredLanguage();


function loadProjects() {
  let projectsHTML = "";

  projects.forEach((project) => {
    projectsHTML += `
      <section>
        <div class="main-container">
          <div class="image-container">
            <img src="${project.image}" alt="project" />
          </div>
          <div class="description-container">
            <div class="description">
              <p>
                ${project.descriptionEn}
              </p>
            </div>
            <div class="button-container">
              <a target="_blank" href="${project.buttonView}">
                <button>View</button>
              </a>
              <a target="_blank" href="${project.buttonCode}">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  });
  document.querySelector(".allProjects")
    .innerHTML = projectsHTML;
}

function loadProjectsDe() {
  let projectsHTML = "";

  projects.forEach((project) => {
    projectsHTML += `
      <section>
        <div class="main-container">
          <div class="image-container">
            <img src="${project.image}" alt="project" />
          </div>
          <div class="description-container">
            <div class="description">
              <p>
                ${project.descriptionDE}
              </p>  
            </div>
            <div class="button-container">
              <a target="_blank" href="${project.buttonView}">
                <button>View</button>
              </a>
              <a target="_blank" href="${project.buttonCode}">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  });
  document.querySelector(".allProjects-de")
    .innerHTML = projectsHTML;
}

loadProjects();
loadProjectsDe();
