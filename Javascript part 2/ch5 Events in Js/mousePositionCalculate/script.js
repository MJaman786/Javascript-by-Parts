const body = document.querySelector("body");
const xaxis = document.querySelector(".xaxis");
const yaxis = document.querySelector(".yaxis");
const mousePosition = document.querySelector(".mouse-position");

body.addEventListener("mousemove", (e) => {
  // update spans
  xaxis.innerText = "X: " + e.clientX;
  yaxis.innerText = "Y: " + e.clientY;

  // move the box
  mousePosition.style.top = e.clientY+20 + "px";
  mousePosition.style.left = e.clientX+20 + "px";

  if (e.clientX >= 1000) {
    mousePosition.style.left = e.clientX-200 + "px";
  }

  if (e.clientY >= 500) {
    mousePosition.style.top = e.clientY-100 + "px"
  }
});
