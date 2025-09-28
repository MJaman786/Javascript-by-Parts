## just for more understanting

``` javascript
// we get the list of elements have the class button
const buttons = document.querySelectorAll('.button');

// Function to animate count inside each button
function incrementCount(button, num) {
    let i = 1;
    const interval = setInterval(() => {
        button.innerHTML = `${i}K`;
        if (i >= num) {
            clearInterval(interval);   // stoping the interval
        }
        i++;
    }, 50); // change speed here
}

// Run incrementCount for every button
window.onload = () => {
    buttons.forEach((btn, index) => {
        if (index == 0) {
            incrementCount(btn, 300); // you can use different numbers if you want
        } else if (index == 1) {
            incrementCount(btn, 150); // you can use different numbers if you want
        } else if (index == 2) {
            incrementCount(btn, 120); // you can use different numbers if you want
        } else {
            incrementCount(btn, 200); // you can use different numbers if you want
        }
    });
};

```