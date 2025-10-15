const myPromise = new Promise((resolve, reject) => {
  let isDataAvailable = true;

  if (isDataAvailable) {
    resolve("Data loaded successfully!");
  } else {
    reject("Failed to load data!");
  }
});

myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise execution completed.");
  });
