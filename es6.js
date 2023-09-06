// 1.Tamplate String
const studentNumber = [15, 45, 27, 28]
const student = {
    name: "MD Abdur Razzak",
    age: 23,
    movie: ["Mon manena Kicu", "valoLageNa", "Rimar Preme habudubu"]
}
const about = `My name is ${student.name} and my age is ${student.age}.Do you know how much i do movie i do ${student.movie.length} movie and movie list ${student?.movie}.Do you know how much i have girlFriend ${studentNumber[0]}`
console.log(about);
// This is funny but i am not do this..But my name and age real..
// 2.Arrow function
const showOnlyFiftyFive = () => 55;
console.log(showOnlyFiftyFive());
const isEven = number => 66 % 2 == 0;
console.log(isEven());
// 3. spread operator 
const newStudentNumber = studentNumber
studentNumber.push(22)
console.log(newStudentNumber);

const neNumber = [...studentNumber,12]
console.log(neNumber);