const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('button');

const result = document.querySelector('.result');

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (weight.value === '' || weight.value < 0 || isNaN(weight.value)) {
        result.innerHTML = `<p style="color: red;">Pls Enter valid weight</p>`
    }
    else if (height.value === '' || height.value < 0 || isNaN(height.value)) {
        result.innerHTML = ` <p style="color: red;">Pls Enter valid height</p>`
    } 
    else {
        let w = parseInt(weight.value);
        let h = parseInt(height.value) / 100;
        let BMI = (w / (h * h)).toFixed(2);

        result.innerHTML = `
            <h3>Your BMI result: </h3>
            <p>Weight: ${weight.value}</p>
            <p>Height: ${height.value}</p>
            <p>BMI: ${BMI}</p>
        `
        weight.value = '';
        height.value = '';
    }


})