const products =
    [
        { name: "leptop", price: 25000, brand: "leptop", color: "silver" },
        { name: "Hp", price: 25000, brand: "Hp", color: "silver" },
        { name: "MacAir", price: 2250000, brand: "Apple", color: "silver" },
        { name: "Lenovo", price: 30000, brand: "lenovo", color: "silver" }
    ]
const brandName = products.map(product => product.brand);
const prices = products.map(product => product.price)
const productName = products.map(productNames => productNames.name)
// console.log(brandName, prices,productName);


const productsList = [
    { name: 'Laptop', price: 32000, brand: 'Lenovo', color: 'Silver' },
    { name: 'Phone', price: 700, brand: 'Iphone', color: 'Golden' },
    { name: 'Watch', price: 3000, brand: 'Casio', color: 'Yellow' },
    { name: 'Aunglass', price: 300, brand: 'Ribon', color: 'Blue' },
    { name: 'Camera', price: 9000, brand: 'Lenovo', color: 'Gray' },
];
const product = productsList.forEach(productlists => console.log(productlists.price))
console.log(product);
console.log(productName);

// filter 
const chips = productsList.filter(product => product.color == "Gray")
const chipss = productsList.filter(product => product.color.includes("n"))
// console.log(chips, chipss);
const findNameOfN = productsList.find(product => product.name.includes("p"))
console.log(findNameOfN);