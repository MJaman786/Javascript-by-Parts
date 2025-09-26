const fruitList = document.querySelector('#fruitList');
const addBtn = document.querySelector('#addBtn');
const delbtnLast = document.querySelector('#delbtn-Last');
const delbtnFirst = document.querySelector('#delbtn-First');
const text = document.querySelector('#text');

addBtn.addEventListener('click',()=>{

    const li = document.createElement('li');
    
    li.textContent = text.value;

    fruitList.appendChild(li)

    text.value = ' ';
})

delbtnFirst.addEventListener('click', ()=>{
    if (fruitList.firstElementChild) {
        fruitList.removeChild(fruitList.firstElementChild);
    }else{
        alert("You removed all items")
    }
})

delbtnLast.addEventListener('click', ()=>{
    if (fruitList.lastElementChild) {
        fruitList.removeChild(fruitList.lastElementChild);
    }else{
        alert("You removed all items")
    }
})

