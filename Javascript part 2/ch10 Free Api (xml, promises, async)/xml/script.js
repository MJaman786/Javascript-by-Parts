const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/users";

xhr.open("GET", url, true);
xhr.responseType = "json";

const userGrid = document.querySelector(".user-grid");

xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(`Connection Successful.`);
    const data = xhr.response;

    data.forEach((user) => {
      userGrid.innerHTML += `
        <div class="user-card">
          <h2>${user.name}</h2>
          <div class="data-field">
            <strong>Username:</strong> <span class="value">${user.username}</span>
          </div>
          <div class="data-field">
            <strong>Email:</strong> <span class="value">${user.email}</span>
          </div>
          <div class="data-field">
            <strong>Phone:</strong> <span class="value">${user.phone}</span>
          </div>
          <div class="data-field">
            <strong>Address:</strong>
            <div class="nested-data">
              <span class="value">
                ${user.address.suite}, ${user.address.street}, ${user.address.city}
              </span>
            </div>
          </div>
        </div>
      `;
    });
  } else {
    console.log(`Connection Failed`);
  }
};

xhr.onerror = (error) => {
  console.log(`E: ${error}`);
};

xhr.send();
