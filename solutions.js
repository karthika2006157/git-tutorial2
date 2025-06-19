//conditional operator
let marks=95;
let grade = (marks >= 90) ? "A grade" :
            (marks >= 75) ? "B grade" :
            "C grade";

console.log(grade);
//loops
let num = 1;

while (num <= 20) {
    if (num === 10) {
        num++;        // Skip 10
        continue;
    }

    if (num === 16) {
        break;        // Stop at 16
    }

    if (num % 2 === 0) {
        console.log(num);  // Print only even numbers
    }

    num++;
}
//float
let num1=2.2;
let num2=10.2;
console.log(num1+num2);
//data type
let productName = "Wireless Mouse";
let brand = "Logitech";
let price = 899.99;
let inStock = true;

console.log("Product:", productName);
console.log("Brand:", brand);
console.log("Price: ₹" + price);
console.log("Available in stock:", inStock);
//arrays
let fruits=["apple","mango","banana"];
console.log("filtering")
let filtered = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with names longer than 5 letters:", filtered);
