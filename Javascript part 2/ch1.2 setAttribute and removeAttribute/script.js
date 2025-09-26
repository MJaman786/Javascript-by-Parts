const mybtn = document.querySelector('#myBtn');
const enableBtn = document.querySelector('#enableBtn');
const disableBtn = document.querySelector('#disableBtn');

// Event for Disabeling the button
disableBtn.addEventListener('click', ()=>{
    mybtn.setAttribute('disabled', 'true');
})

enableBtn.addEventListener('click', ()=>{
    mybtn.removeAttribute('disabled');
})