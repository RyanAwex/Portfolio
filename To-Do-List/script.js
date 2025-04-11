const todoBtn = document.getElementById("todo-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.querySelector(".todo-list");

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Add a new task
todoBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText) {
    addTask(todoText, false); // New tasks are not completed by default
    saveTaskToLocalStorage(todoText, false); // Save with completion status
    todoInput.value = "";
  } else {
    alert("Please enter a task!");
  }
});

function addTask(todoText, isCompleted) {
  let tasksHTML = `
    <div class="task">
      <div class="left">
        <img src="images/${
          isCompleted ? "checked" : "unchecked"
        }.png" class="toggle-img" alt="${
    isCompleted ? "checked" : "unchecked"
  }">
        <p class="task-text ${isCompleted ? "completed" : ""}">${todoText}</p>
      </div>
      <div class="task-edit">
        <img src="images/close.png" class="close-btn" alt="close">
      </div>
    </div>
  `;
  const taskElement = document.createElement("div");
  taskElement.innerHTML = tasksHTML;
  const toggleImg = taskElement.querySelector(".toggle-img");
  const taskText = taskElement.querySelector(".task-text");
  const closeBtn = taskElement.querySelector(".task-edit");

  // Add event listener to toggle image source and line-through on task-text
  toggleImg.addEventListener("click", function () {
    if (toggleImg.src.includes("unchecked.png")) {
      toggleImg.src = "images/checked.png"; // Change to checked image
      taskText.classList.add("completed"); // Add line-through
      updateTaskInLocalStorage(todoText, true); // Update completion status
    } else {
      toggleImg.src = "images/unchecked.png"; // Change back to unchecked image
      taskText.classList.remove("completed"); // Remove line-through
      updateTaskInLocalStorage(todoText, false); // Update completion status
    }
  });

  // Add event listener to delete the task when the close button is clicked
  closeBtn.addEventListener("click", function () {
    taskElement.remove(); // Remove the task element from the DOM
    removeTaskFromLocalStorage(todoText); // Remove the task from localStorage
  });

  document.querySelector(".todo-list").appendChild(taskElement);
}

// Save a task to localStorage
function saveTaskToLocalStorage(task, isCompleted) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: task, completed: isCompleted });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task.text, task.completed));
}

// Update a task's completion status in localStorage
function updateTaskInLocalStorage(taskToUpdate, isCompleted) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.map((task) =>
    task.text === taskToUpdate ? { ...task, completed: isCompleted } : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove a task from localStorage
function removeTaskFromLocalStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.text !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
