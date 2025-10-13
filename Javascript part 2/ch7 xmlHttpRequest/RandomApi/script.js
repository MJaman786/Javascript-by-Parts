// API Endpoint for fetching To-Do data
const TODO_API_URL = "https://jsonplaceholder.typicode.com/todos";

// DOM Elements
const todoListElement = document.getElementById("todoList");
const loadingErrorElement = document.getElementById("loadingError");

// New Custom Dropdown Elements
const dropdownHead = document.getElementById("dropdownHead");
const selectedOptionText = document.getElementById("selectedOptionText");
const optionContainer = document.getElementById("optionContainer");
const currentStatusIconElement = document.getElementById("currentStatusIcon");
const options = optionContainer.querySelectorAll("li");

let allTodos = []; // Store the full list of tasks globally
let currentFilterValue = dropdownHead.getAttribute("data-value"); // State for the filter value

/**
 * Creates the HTML markup for a single to-do item.
 * @param {object} todo - The to-do object from the API.
 * @returns {string} The HTML string for the todo item.
 */
function createTodoItemHTML(todo) {
  const statusClass = todo.completed ? "completed" : "pending";
  const statusText = todo.completed ? "Completed" : "Pending";

  // The entire block is a minimalist card
  return `
                <div class="todo-item ${statusClass}">
                    <div class="todo-title-text">
                        ${todo.title}
                    </div>
                    <div class="todo-meta">
                        <span>User ID: ${todo.userId}</span>
                        <span>Task ID: ${todo.id}</span>
                        <span style="font-weight: 600; color: ${
                          todo.completed
                            ? "var(--accent-green)"
                            : "var(--pending-orange)"
                        };">${statusText}</span>
                    </div>
                </div>
            `;
}

/**
 * Renders the filtered list of todos to the DOM.
 * @param {Array<object>} todosToRender - The array of todo objects to display.
 */
function renderTodos(todosToRender) {
  if (!todoListElement) return;

  // Clear the list before rendering new content
  todoListElement.innerHTML = "";

  if (todosToRender.length === 0) {
    todoListElement.innerHTML = `<div class="loading-message" style="color: var(--text-muted);">No tasks match the current filter.</div>`;
    return;
  }

  const html = todosToRender.map(createTodoItemHTML).join("");
  todoListElement.innerHTML = html;
}

/**
 * Filters the global todo list based on the selected status (currentFilterValue).
 */
function filterAndRender() {
  let filteredTodos = allTodos;

  if (currentFilterValue === "completed") {
    filteredTodos = allTodos.filter((todo) => todo.completed === true);
  } else if (currentFilterValue === "pending") {
    filteredTodos = allTodos.filter((todo) => todo.completed === false);
  }

  // Now render the filtered subset
  renderTodos(filteredTodos);
}

/**
 * Initializes the default icon in the dropdown head.
 */
function initializeDropdownIcon() {
  // Find the initially selected list item
  const defaultOption = document.querySelector(
    '.dropdown-options li[data-value="all"]'
  );

  // Get the icon SVG element (it's the first element child of the li)
  const defaultIconSvg = defaultOption.querySelector("svg");

  if (defaultIconSvg) {
    // Copy the icon's HTML into the header's icon container
    currentStatusIconElement.innerHTML = defaultIconSvg.outerHTML;
  }
}

/**
 * Fetches todos from the API and initializes the application.
 */
async function fetchTodos() {
  // Show loading message
  todoListElement.innerHTML =
    '<div class="loading-message">Loading to-do items...</div>';
  loadingErrorElement.classList.add("hidden");

  try {
    const response = await fetch(TODO_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse data and store globally
    allTodos = await response.json();

    // Initial render of all tasks
    filterAndRender();
  } catch (error) {
    console.error("Fetch error:", error);
    todoListElement.innerHTML = ""; // Clear loading message
    loadingErrorElement.classList.remove("hidden"); // Show error message
  }
}

// --- Custom Dropdown Event Listeners ---

// Toggle dropdown visibility
dropdownHead.addEventListener("click", () => {
  // 1. Add 'active' class temporarily for click feedback
  dropdownHead.classList.add("active");
  setTimeout(() => {
    dropdownHead.classList.remove("active");
  }, 100);

  // 2. Toggle the main state classes
  const isOpen = optionContainer.classList.contains("open");
  optionContainer.classList.toggle("open");
  dropdownHead.classList.toggle("open");
});

// Handle option selection
options.forEach((option) => {
  option.addEventListener("click", () => {
    const newValue = option.getAttribute("data-value");
    // Use innerText logic to safely extract the text content
    const newText = Array.from(option.childNodes)
      .filter((node) => node.nodeType === 3) // Filter for Text Nodes
      .map((node) => node.textContent.trim())
      .join("");

    const iconSvg = option.querySelector("svg");

    // 1. Update component state and visuals
    currentFilterValue = newValue;
    dropdownHead.setAttribute("data-value", newValue);
    selectedOptionText.textContent = newText;

    // 2. Update the icon in the dropdown head
    if (iconSvg) {
      currentStatusIconElement.innerHTML = iconSvg.outerHTML;
    }

    // 3. Update selected class on list items
    options.forEach((li) => li.classList.remove("selected"));
    option.classList.add("selected");

    // 4. Close the dropdown
    optionContainer.classList.remove("open");
    dropdownHead.classList.remove("open");

    // 5. Trigger the filtering logic
    filterAndRender();
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  const isClickInside =
    dropdownHead.contains(event.target) ||
    optionContainer.contains(event.target);
  if (!isClickInside && optionContainer.classList.contains("open")) {
    optionContainer.classList.remove("open");
    dropdownHead.classList.remove("open");
  }
});

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initializeDropdownIcon(); // Set the initial icon
  fetchTodos();
});
