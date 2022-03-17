// let question = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// let address = prompt("Enter your address: ");
// let phone = prompt("Enter your phone number: ");

// document.getElementById("name").innerHTML = question;
// document.getElementById("age").innerHTML = age;
// document.getElementById("address").innerHTML = address;
// document.getElementById("phone").innerHTML = phone;



// alert("Welcome to ATC" + question)
// alert("age" + "looks good")

// Calculator section
// var x = 60 
// var y = x * x
// document.getElementById("first").innerHTML = y;
// var z = 24 * y
// document.getElementById("second").innerHTML = z;
// document.getElementById("third").innerHTML = 7 * z;


// const data = {

// }
// data[firstQuestion]= secondQuestion;

let firstQuestion = prompt("Enter your favourite book: ");
document.getElementById("title1").innerHTML = firstQuestion;
let secondQuestion = prompt("Enter the author's name: ");
document.getElementById("name1").innerHTML = secondQuestion;
let thirdQuestion = prompt("Enter the year of production: ");
document.getElementById("year1").innerHTML = thirdQuestion;

// console.log(data);

let secondPart1 = prompt("Enter your favourite book: ");
document.getElementById("title2").innerHTML = secondPart1;
let secondPart2 = prompt("Enter the author's name: ");
document.getElementById("name2").innerHTML = secondPart2;
let  secondPart3 = prompt("Enter the year of production: ");
document.getElementById("year2").innerHTML = secondPart3;




let thirdPart1 = prompt("Enter your favourite book: ");
document.getElementById("title3").innerHTML = thirdPart1;
let thirdPart2 = prompt("Enter the author's name: ");
document.getElementById("name3").innerHTML = thirdPart2;
let  thirdPart3 = prompt("Enter the year of production: ");
document.getElementById("year3").innerHTML = thirdPart3;

alert("Thanks for filling")
// Array using the sort method
var students = ["Bunmi", "Simeon", "Efe", "Tolu", "Babatunde", "Wale", "Eminem"]
document.getElementById("sorting").innerHTML = students;
function myFunction() {
  students.sort();
  document.getElementById("sorting").innerHTML = students;
}
// Array using pop method
document.getElementById("popping").innerHTML = students;
function popFunction() {

    students.pop();
    document.getElementById("popping").innerHTML = students;
}

// Array using push method
document.getElementById("pushing").innerHTML = students;
function pushFunction() {

    students.push("Mr Habeeb");
    document.getElementById("pushing").innerHTML = students;
}

// Array using the shift method
document.getElementById("shifting").innerHTML = students;
function shiftFunction() {
    students.shift()
    document.getElementById("shifting").innerHTML = students;
}

// Array using the concat method
var ATCboys = ["Simeon", "Efe", "Tolu", "Babatunde", "Wale", "Eminem"];
var ATCgirl = ["Bunmi"];
var ATCstudents = ATCgirl.concat(ATCboys);

document.getElementById("merge").innerHTML = ATCstudents;