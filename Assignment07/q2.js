let price = [1200, 450, 3000, 750, 1500, 250];
let lowestPrice = price.sort(function (a, b) { return a - b });


let highestPrice = price.sort(function (a, b) { return b - a });


let randomOrdering = price.sort(function () { Math.random * 6 });

console.log("Original List", price);
console.log("lowest to Highest List", lowestPrice);
console.log("Highest to lowest List", highestPrice);
console.log("Random Order", randomOrdering);

