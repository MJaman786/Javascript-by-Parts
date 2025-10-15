const promiseTwo = new Promise((resolve, reject) => {
  console.log("Fetching data from Api");
  const url = "https://jsonplaceholder.typicode.com/users/1";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      console.log(`E: ${error}`);
    });
});

promiseTwo
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`E: ${error}`);
  })
  .finally(() => {
    console.log(`Fetching data from Api completed.`);
  });

// same but using async-await

async function fetchUserData() {
  console.log("Fetching data from API...");

  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      const data = await response.json(); // wait for JSON to resolve
      console.log(data);
    }
  } catch (error) {
    console.error(`E: ${error}`);
  } finally {
    console.log("Fetching data from API completed.");
  }
}

fetchUserData();
