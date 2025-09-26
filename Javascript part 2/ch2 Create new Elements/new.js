const fruitList = document.querySelector('#fruitList');
const addBtn = document.querySelector('#addBtn');
const deleteLast = document.querySelector('#delbtn-Last');
const deleteFirst = document.querySelector('#delbtn-First');
const text = document.querySelector('#text');

// ✅ Add new fruit
addBtn.addEventListener('click', () => {
  // 1. Create a new li
  const li = document.createElement('li');

  // 2. Add the text from input
  li.textContent = text.value;

  // 3. Append to the list
  fruitList.prepend(li);

  // 4. Clear input
  text.value = '';
});

// ✅ Delete first fruit
deleteFirst.addEventListener('click', () => {
  if (fruitList.firstElementChild) {
    fruitList.removeChild(fruitList.firstElementChild);
  } else {
    alert("You removed all items")
  }
})

// ✅ Delete last fruit
deleteLast.addEventListener('click', () => {
  if (fruitList.lastElementChild) {
    fruitList.removeChild(fruitList.lastElementChild);
  } else {
    alert("You removed all items")
  }
});

