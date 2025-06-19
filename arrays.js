fruits=["apple","watermelon","grape"]
console.log("original Array:");
console.log(fruits);

fruits.push("kiwi");
console.log("Array after push operation:");
console.log(fruits);

fruits.pop("kiwi");
console.log("array after pop operation: ")
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log("array 1st and last element");
console.log(fruits[0]);
let size=fruits.length;
console.log(fruits[size-1]);

console.log("Array after unshift operation");
fruits.unshift("cherry");
console.log(fruits);

console.log("Array after shift operation");
fruits.shift();
console.log(fruits);

console.log("Array after splice operation");
let removedElement=fruits.splice(1,1);
console.log(fruits);


fruits.push("Orange");
fruits.push("Bannana");
fruits.push("Mango");


console.log("accessing an array using loop: ");
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log("searching: ");
console.log("Is 'banana' in array?", fruits.includes("banana"));
console.log("'mango' is at index:", fruits.indexOf("mango"));

console.log("Mapping:")
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:", upperFruits);


console.log("sorting:")
fruits.sort(); // sorts alphabetically
console.log("Sorted array:", fruits);

