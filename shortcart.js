// Learn about truthy and falsy
let myVar = 5;
if (myVar) {
    myVar = myVar * 100
} else {
    myVar = 0
}
// console.log(myVar);
let myMoney = 100
// how you difind negetive or falsy
if (!myMoney) {

}
let food
let money = 800
if (money > 100) {
    food = "Biriyani"
} else {
    // console.log("Your should save money for you");
}

let food1 = money > 100 ? "biriyani" : "cha Biscut";
console.log(food1);
// ternary if else
let drink = money > 100 && myVar > 100 ? "coke" : "Dring Water"
// console.log(drink);
// shortcut number to string
let num1 = 100
// number to string
numberStr = num1 + ""
// console.log(num1, numberStr);
// string to number
let strToNumber = parseFloat(numberStr)
// or
let strToNumber2 = + numberStr
// console.log(strToNumber);
// console.log(strToNumber2);
const isActive = false;
const showUser = () => console.log("Display user");
const hideUser = () => console.log("Hide user");
// isActive ? showUser() : hideUser()
// console.log(isActive);
// user && left side is true then right side is excuted 
isActive && showUser();
// user || than left is false then right side is excuted
isActive || hideUser()
// toggul
isActive = !isActive