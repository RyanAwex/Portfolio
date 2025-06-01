// Project Data (Could also be fetched from an API)
const projectsData = {
  project1: {
    title: "6 JavaScript Projects",
    image: "images/6-projects.png",
    description:
      "6 JavaScript Projects is a multi-tool web application that combines six mini projects into a single interactive interface. It includes an Age Calculator, Random Quotes Generator, Stopwatch, Palindrome Checker, Digital Clock, and Counter. Each tool is designed with simplicity and usability in mind, offering hands-on functionality for everyday tasks. The front-end is built using HTML, CSS, and vanilla JavaScript, ensuring lightweight performance and broad browser compatibility. Key features include real-time time tracking, dynamic content updates, and responsive layouts optimized for various screen sizes.",
    longDescription:
      "<p class='mb-4'>This project was a practical exercise in building interactive web applications without relying on frameworks or libraries. We focused heavily on JavaScript fundamentals, DOM manipulation, and clean UI/UX design to provide a smooth user experience.</p><p class='mb-4'>Challenges included maintaining modular code structure across multiple tools, handling accurate date/time calculations, and ensuring consistent design behavior across different components.</p><p>The final result is a versatile and beginner-friendly platform that demonstrates core web development principles through real-world mini apps, making it an excellent foundation for learning and teaching.</p>",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "6-Projects/index.html",
    repoLink: "https://github.com/RyanAwex/Portfolio/tree/main/6-Projects",
  },
  project2: {
    title: "YouTube Project",
    image: "images/youtube.png",
    description:
      "YouTube Project is a redesigned YouTube interface clone focused on layout enhancement and dynamic content rendering. It features a modernized UI with improved spacing, color schemes, and component alignment to enhance visual appeal and user experience. Instead of relying on static HTML, the project uses JavaScript to dynamically generate video content, enabling smoother updates and better maintainability. The entire project is built with HTML, CSS, and vanilla JavaScript, ensuring lightweight and fast performance.",
    longDescription:
      "<p class='mb-4'>This project was an opportunity to experiment with dynamic rendering and modular code structure. The goal was to separate data from markup and enhance scalability for future content updates.</p><p>Challenges included managing DOM manipulation efficiently and ensuring that the layout remained responsive and accessible across different screen sizes.</p>",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "Youtube-Project/index.html",
    repoLink: "https://github.com/RyanAwex/Portfolio/tree/main/Youtube-Project",
  },
  project3: {
    title: "To-Do List Project",
    image: "images/todo-list.png",
    description:
      "The To-Do List Project is an interactive To-Do List application designed to help users manage daily tasks efficiently. It includes essential features such as adding, deleting, and marking tasks as completed. A key functionality is the use of localStorage, allowing all tasks to be saved locally in the browser so that data persists across sessions. The interface is minimal and intuitive, built entirely with HTML, CSS, and JavaScript.",
    longDescription:
      "<p class='mb-4'>This project was an exercise in building stateful web applications using vanilla JavaScript. The focus was on creating a seamless user experience with persistent data storage and responsive task management.</p><p class='mb-4'>Challenges included ensuring data consistency in localStorage, handling edge cases such as empty inputs, and designing a clean UI for interaction feedback.</p><p>The final result is a lightweight productivity tool that demonstrates the practical use of localStorage, dynamic DOM updates, and modular JavaScript functions—all tailored for beginner-friendly development and real-world usability.</p>",
    technologies: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    liveLink: "To-Do-List/index.html",
    repoLink: "https://github.com/RyanAwex/Portfolio/tree/main/To-Do-List",
  },
  project4: {
    title: "Rock Paper Scissors Game",
    image: "images/rps.jpg",
    description:
      "The Rock Paper Scissors Game is a browser-based Rock Paper Scissors game designed to deliver an engaging and interactive user experience. Built with HTML, CSS, and JavaScript, the game features real-time score tracking, dynamic visual feedback, and intuitive controls. One standout feature is the auto-play mode, which triggers automatic gameplay every second, simulating a continuous match without user input. A reset button allows players to restart the game and clear scores at any time.",
    longDescription:
      "<p class='mb-4'>This project served as a practical application of fundamental programming concepts such as conditional logic, DOM manipulation, and event handling. Emphasis was placed on delivering smooth interaction and maintaining clean, readable code.</p><p class='mb-4'>Challenges included implementing reliable auto-play behavior, synchronizing real-time score updates, and preventing UI conflicts during rapid state changes.</p><p>The result is a fun, responsive mini-game that showcases core JavaScript principles in a playful and user-friendly format.</p>",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "Rock-Paper-Scissors-Game/index.html",
    repoLink:
      "https://github.com/RyanAwex/Portfolio/tree/main/Rock-Paper-Scissors-Game",
  },
  project5: {
    title: "Calculator Project",
    image: "images/calculator.png",
    description:
      "The Calculator Project is a modern, browser-based calculator designed for quick and efficient basic arithmetic operations, including addition, subtraction, multiplication, and division. The application features a sleek, minimalist interface that prioritizes usability and visual clarity. Built with HTML, CSS, and JavaScript, it ensures smooth performance and responsive interaction across all devices.",
    longDescription:
      "<p class='mb-4'>This project was an exploration of creating clean UI components and handling user input through efficient JavaScript logic. The goal was to deliver a lightweight tool that performs reliably and looks polished.</p><p class='mb-4'>Challenges included managing chained operations, preventing input errors, and designing a layout that adapts well to different screen sizes.</p><p>The final product is a functional and visually appealing calculator that demonstrates practical use of JavaScript for real-time calculations and reinforces best practices in front-end development.</p>",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveLink: "Calculator-Project/index.html",
    repoLink:
      "https://github.com/RyanAwex/Portfolio/tree/main/Calculator-Project",
  },
  project6: {
    title: "Password Generator Project",
    image: "images/password.png",
    description:
      "The Password Generator Project is a secure Password Generator tool designed to create strong, random passwords with a single click. Upon pressing the Generate button, a custom algorithm produces a unique password containing a mix of numbers, letters, and symbols to ensure optimal strength. Additionally, the project includes a convenient Copy button that allows users to instantly copy the generated password to their clipboard.",
    longDescription:
      "<p class='mb-4'>Developed using HTML, CSS, and JavaScript, this project emphasizes both functionality and ease of use, with a clean interface and responsive design.</p><p class='mb-4'>This project served as a practical exercise in implementing randomness, working with character sets, and handling clipboard operations in the browser.</p><p>Challenges included balancing character diversity for password strength, ensuring compatibility across different browsers, and providing immediate feedback on user actions.</p>",
    technologies: ["HTML5", "CSS3", "JavaScript", "Clipboard API"],
    liveLink: "Password-Generator/index.html",
    repoLink:
      "https://github.com/RyanAwex/Portfolio/tree/main/Password-Generator",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
        // Close mobile menu if open and link is clicked
        if (
          mobileMenu.classList.contains("md:hidden") &&
          !mobileMenu.classList.contains("hidden")
        ) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  });

  // Header scroll effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("py-3", "shadow-lg");
      header.classList.remove("py-4");
    } else {
      header.classList.remove("py-3", "shadow-lg");
      header.classList.add("py-4");
    }
  });

  // Animate elements on scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("section-title")) {
          entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
        } else if (entry.target.classList.contains("project-card")) {
          // Stagger project card animations
          const delay =
            Array.from(entry.target.parentNode.children).indexOf(entry.target) *
            0.15;
          entry.target.style.animation = `fadeInUp 0.6s ${delay}s ease-out forwards`;
        } else if (entry.target.classList.contains("skill-item")) {
          const delay =
            Array.from(entry.target.parentNode.children).indexOf(entry.target) *
            0.1;
          entry.target.style.animation = `fadeInUp 0.5s ${delay}s ease-out forwards`;
        }
        observer.unobserve(entry.target); // Optional: stop observing after animation
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  document
    .querySelectorAll(".section-title, .project-card, .skill-item")
    .forEach((el) => {
      observer.observe(el);
    });

  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = mobileMenu.querySelectorAll(".mobile-menu-link");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  // Footer: Current Year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Contact Form Handling (Basic - for demonstration)
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  // Project Modal Logic
  const projectModal = document.getElementById("project-modal");
  const modalContentWrapper = document.getElementById("modal-content-wrapper");
  const closeModalButton = document.getElementById("close-modal-button");
  const modalBody = document.getElementById("modal-body");
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.projectId;
      const projectData = projectsData[projectId];

      if (projectData) {
        modalBody.innerHTML = `
                      <img src="${projectData.image}" alt="${
          projectData.title
        }" class="w-full h-64 md:h-80 object-cover rounded-lg mb-6 shadow-lg">
          <h3 class="text-3xl font-bold mb-3 text-brand-white">${
            projectData.title
          }</h3>
          <p class="text-gray-300 mb-6 text-md leading-relaxed">${
            projectData.description
          }</p>
          <div class="text-gray-300 mb-6 leading-relaxed">${
            projectData.longDescription || ""
          }</div>
          <h4 class="text-xl font-semibold mb-3 text-brand-white">Technologies Used:</h4>
          <div class="flex flex-wrap gap-2 mb-6">
              ${projectData.technologies
                .map(
                  (tech) =>
                    `<span class="bg-gray-700 text-brand-white text-sm px-3 py-1 rounded-full">${tech}</span>`
                )
                .join("")}
          </div>
          <div class="flex space-x-4">
              ${
                projectData.liveLink && projectData.liveLink !== "#"
                  ? `<a href="${projectData.liveLink}" target="_blank" rel="noopener noreferrer" class="bg-brand-accent hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>See Project</a>`
                  : ""
              }
              ${
                projectData.repoLink && projectData.repoLink !== "#"
                  ? `<a href="${projectData.repoLink}" target="_blank" rel="noopener noreferrer" class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>See Code</a>`
                  : ""
              }
          </div>
          `;
        projectModal.classList.remove("opacity-0", "pointer-events-none");
        modalContentWrapper.classList.remove("scale-95");
        modalContentWrapper.classList.add("scale-100");
        document.body.classList.add("modal-active");
      }
    });
  });

  function closeModal() {
    projectModal.classList.add("opacity-0");
    modalContentWrapper.classList.add("scale-95");
    modalContentWrapper.classList.remove("scale-100");
    setTimeout(() => {
      projectModal.classList.add("pointer-events-none");
      document.body.classList.remove("modal-active");
      modalBody.innerHTML = ""; // Clear content
    }, 250); // Match transition duration
  }

  closeModalButton.addEventListener("click", closeModal);
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      // Click on overlay
      closeModal();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      !projectModal.classList.contains("pointer-events-none")
    ) {
      closeModal();
    }
  });
});
