// 1. JSON stringify and parse
const student = {
    name: "MD Abdur Razzak",
    age: 23,
    movie: ["Mon manena Kicu", "valoLageNa", "Rimar Preme habudubu"]
}
const studentJSON = JSON.stringify(student)
const studentPARSE = JSON.parse(studentJSON)
// console.log(studentJSON);
// console.log(studentPARSE);


// // fetch
// fetch("url")
//     .then(res => res.json())
//     .then(data => console.log(data))
// This is fetch method..


// keys and value
const keys = Object.keys(student)
const value = Object.values(student)
// console.log(keys);
// console.log(value);


// Add or remove from array
const productsList = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];
const newProduct = { name: "Mobile", price: 20000, brand: "HTC", color: "black" }
const newProducts = { ...productsList, newProduct }
console.log(newProducts);
const remaining = productsList.filter(product => product.name !== "phone")
console.log(remaining);