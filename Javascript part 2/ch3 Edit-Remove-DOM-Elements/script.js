const languages = document.querySelector('.languages');
function addElement(element = 'default') {
    const li = document.createElement('li');
    li.className = 'list-item';  // adding class to li
    li.innerHTML = `${element}`; // provideing value in li

    languages.appendChild(li);
}

// 1. Adding Elements
addElement()                // default
addElement('Java')          // Java
addElement('Cpp')           // Cpp
addElement('Python')        // Python
addElement('Ruby')          // Ruby
addElement('Typescript')    // Typescript

// 2. Edit Elements 

// 👉 (type 1)
function editElementType1(num=1, data='None') {
    // selection of li
    const li = document.querySelector(`li:nth-child(${num})`)
    console.log(li);        // Javascript
    li.innerHTML=`${data}`  // input value in li
}

editElementType1();               // Javascript to None
editElementType1(3, 'SQL');       // Java to SQL

// 👉 (type 2)

function editElementType2() {
    // selected 3rd li i.e. SQL
    const third_li = document.querySelector('li:nth-child(3)');

    const new_li = document.createElement('li');  // creating a new li
    new_li.innerText = 'Bash Script'                        // input value in li

    third_li.replaceWith(new_li)                  // replacing SQL with Bash Script

}

editElementType2()


// 3. Remove Element
function removeElements() {
    const third_li = document.querySelector('li:nth-child(3)');
    third_li.remove()
}

removeElements()    // Removed Bash Script node fom list