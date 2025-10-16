const promiseData = new Promise((resolve, reject) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
  .then((response) => {
    if (!response.ok) {
      console.log('Network error.');
    }else{
      return response.json();
    }
  })
  .then((data)=>{
    resolve(data);
  })
  .catch((error)=>{
    reject(error);
  })
  .finally(()=> console.log(`Url request completed.`));
});

const userGrid = document.querySelector('.user-grid');

promiseData
.then((data)=>{
  console.log(data);
  console.log(`length of data : ${data.length}`);
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
})
.catch((error)=>{
  console.log(error);
})


