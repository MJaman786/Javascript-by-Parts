// we get the list of elements have the class button
const button = document.querySelectorAll('.button');  
const p = document.querySelector('p')   
button.forEach(function (btn) {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log(e);
        if (e.target.id === '#DC143C') {
            document.body.style.backgroundColor = e.target.id
            p.innerText = 'Color chnaged to Crimson';
        }
        if (e.target.id === '#064232') {
            document.body.style.backgroundColor = e.target.id
            p.innerText = 'Color chnaged to Green';
        }
        if (e.target.id === '#19183B') {
            document.body.style.backgroundColor = e.target.id
            p.innerText = 'Color chnaged to Black';
        }
        if (e.target.id === '#000B58') {
            document.body.style.backgroundColor = e.target.id
            p.innerText = 'Color chnaged to Purple';

        }

    })
})
/*
const buttons = document.querySelectorAll('.button');

// Function to animate count inside each button
function incrementCount(button, num) {
    let i = 1;
    const interval = setInterval(() => {
        button.innerHTML = `${i}K`;
        if (i >= num) {
            clearInterval(interval);
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

*/