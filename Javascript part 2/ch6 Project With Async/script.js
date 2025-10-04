const boxs = document.querySelectorAll(".box");
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");

let count = 0;
let intervalId = null;
const increment = () => {
  count++;
  boxs.forEach((box) => {
    box.innerHTML = count;
  });
};

startButton.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(increment, 10);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
