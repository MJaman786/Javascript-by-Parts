let fruits = ['Apple', 'Mango'];
console.log(fruits); // [ 'Apple', 'Mango' ]
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango

// 1. Add elements from behind using .push()
fruits.push('Kiwi');
console.log(fruits); // [ 'Apple', 'Mango', 'Kiwi' ]
fruits.push('Banana', 'pineapple');
console.log(fruits); // [ 'Apple', 'Mango', 'Kiwi', 'Banana', 'pineapple' ]

// 2. Remove elements from behind using .pop()
fruits.pop();
console.log(fruits); // removes 'pineapple' [ 'Apple', 'Mango', 'Kiwi', 'Banana' ]
fruits.pop();
console.log(fruits); // removes 'Banana' [ 'Apple', 'Mango', 'Kiwi' ]

// 3. Insert elements from starting using .unshift()
fruits.unshift('Lichi');
console.log(fruits); // insert 'Lichi' [ 'Lichi', 'Apple', 'Mango', 'Kiwi' ]
fruits.unshift('Pomiganate', 'Custardapple');
console.log(fruits); // insert 'Pomiganate', 'Custardapple' [ 'Pomiganate', 'Custardapple', 'Lichi', 'Apple', 'Mango', 'Kiwi' ]

// 4. Remove elements from starting using .shift()
fruits.shift();
console.log(fruits); // removes 'Pomiganate' [ 'Custardapple', 'Lichi', 'Apple', 'Mango', 'Kiwi' ]
fruits.shift();
console.log(fruits); // removes 'Custardapple' [ 'Lichi', 'Apple', 'Mango', 'Kiwi' ]

// 5. Copying a part of array using .slice('startIndex', 'endIndex')
// it doesnot affect the original array
let newArray = fruits.slice(0, 2);
console.log(newArray); // [ 'Lichi', 'Apple' ]
console.log(fruits); // [ 'Lichi', 'Apple', 'Mango', 'Kiwi' ]

// 6. Add/remove items (modifies original) using .splice(startIndex, deleteCount, nItem...addItems)
// original array : [ 'Lichi', 'Apple', 'Mango', 'Kiwi' ]

// - Add items in array 
fruits.splice(1, 0, 'Watermelon');
console.log(fruits); // add it at index 1 [ 'Lichi', 'Watermelon', 'Apple', 'Mango', 'Kiwi' ]

// - Remove item from array
fruits.splice(2, 2); // from index 2 it delete 2 items 
// [ 'Lichi', 'Watermelon', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits); // removes 'Apple', 'Mango'
// [ 'Lichi', 'Watermelon', 'Kiwi' ]

// - Add and Delete sametime
fruits.splice(1, 2, 'Apple', 'Mango');
console.log(fruits); // replace ['Watermelon', 'Kiwi'] with ['Apple', 'Mango']
// before: [ 'Lichi', 'Watermelon', 'Kiwi' ]
// After: [ 'Lichi', 'Apple', 'Mango' ]

// 7. see if the item is present in array using include('Item_name');
console.log(fruits.includes('Apple')); // true
console.log(fruits.includes('Lichi')); // true
console.log(fruits.includes('APPLE')); // false
console.log(fruits.includes('Jamoon')); // false

// 🔹 Ask user to enter an item to delete
let input = prompt("Enter the fruit name to delete:");

// 🔍 Search for item
let index = 0;
let ispresent = false;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === input) {
        ispresent = true;
        index = i;
        break; // Exit loop once found
    }
}

// ✅ Show result
if (ispresent) {
    console.log('Item was present.');
    fruits.splice(index, 1);
    console.log('Item deleted from array:');
    console.log(fruits);
} else {
    console.log('Item is not present.');
}