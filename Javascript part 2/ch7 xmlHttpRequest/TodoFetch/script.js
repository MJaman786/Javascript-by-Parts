const todoList = document.querySelector("#todoList");

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/todos";

xhr.open("GET", url, true);

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(`Connection Successful.`);

    // Parse the response text into a JS object
    const data = JSON.parse(xhr.responseText);

    // Inject the HTML using 'data' (not 'todo')
    data.map((data) => {
      todoList.innerHTML += `
        <div class="todo-item ${data.completed ? "completed" : "pending"}">
            <div class="todo-title-text">
                ${data.title}
            </div>
            <div class="todo-meta">
                <span>User ID: ${data.userId}</span>
                <span>Task ID: ${data.id}</span>
            </div>
        </div>
    `;
    });
  } else {
    console.log(`Connection Error: ${xhr.status}`);
  }
};

// Always good to handle network errors
xhr.onerror = () => {
  console.log("Network error occurred.");
};

// Send the request
xhr.send();
