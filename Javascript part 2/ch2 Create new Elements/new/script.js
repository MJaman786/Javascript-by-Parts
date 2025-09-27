const fruitList = document.querySelector('#fruitList');
const addBtn = document.querySelector('#addBtn');
const delbtn_First = document.querySelector('#delbtn-First');
const delbtn_Last = document.querySelector('#delbtn-Last');

const input = document.querySelector('#text');

addBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = input.value;

    fruitList.appendChild(li);

    input.value = '';
})

delbtn_First.addEventListener('click', () => {
    if (fruitList.firstElementChild) {
        if (confirm('Want to delete item')) {
            fruitList.removeChild(fruitList.firstElementChild)
        }else{
            return;
        }
    }
})

delbtn_Last.addEventListener('click', () => {
    if (fruitList.lastElementChild) {
        if (confirm('Want to delete item')) {
            fruitList.removeChild(fruitList.lastElementChild)
        } else {
            return;
        }
    }
})