let Name = prompt("Enter your name: ");
// First Practice
// let age = prompt("Enter your age: ");
// let address = prompt("Enter your address: ");
// let phone = prompt("Enter your phone number: ");
// document.getElementById("age").innerHTML = age;
// document.getElementById("address").innerHTML = address;
// document.getElementById("phone").innerHTML = phone;

// document.getElementById("name").innerHTML = Name;

// alert("Welcome to ATC" + " " + Name)





// Calculator section
// var x = 60 
// var y = x * x
// document.getElementById("first").innerHTML = y;
// var z = 24 * y
// document.getElementById("second").innerHTML = z;
// document.getElementById("third").innerHTML = 7 * z;




// let Book = prompt("Enter your favourite book: ");

// let Author = prompt("Enter the author's name: ");

// let Year = prompt("Enter the year of production: ");
// document.getElementById("book").innerHTML = Book;
// document.getElementById("author").innerHTML = Author;

// document.getElementById("year").innerHTML = Year;

// // console.log(data);

// // let secondPart1 = prompt("Enter your favourite book: ");
// // document.getElementById("title2").innerHTML = secondPart1;
// // let secondPart2 = prompt("Enter the author's name: ");
// // document.getElementById("name2").innerHTML = secondPart2;
// // let  secondPart3 = prompt("Enter the year of production: ");
// // document.getElementById("year2").innerHTML = secondPart3;




// // let thirdPart1 = prompt("Enter your favourite book: ");
// // document.getElementById("title3").innerHTML = thirdPart1;
// // let thirdPart2 = prompt("Enter the author's name: ");
// // document.getElementById("name3").innerHTML = thirdPart2;
// // let  thirdPart3 = prompt("Enter the year of production: ");
// // document.getElementById("year3").innerHTML = thirdPart3;

// alert("Thanks for filling")
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







/* 1) Three friends went to eat in a resturant and their total bill was
10k.Write a program to calculate how much each of them would pay if they are to leave 30%
to their total bill

@

*/   

// let w = 30 / 100 
// let x = w * 10000
// let totalAmount = x + 10000
// let z = totalAmount / 3
// tolu.innerHTML = each
// simeon.innerHTML = each
// eminem.innerHTML = each
// console.log(z);

let bill = prompt('Enter your total bill')
let tip = prompt('Enter the percentage required')
let friends = prompt('Total number of people')


let Bill = parseInt(bill)
let Tip = parseInt(tip)
let Friends = parseInt(friends)

let total = Bill + (Tip/100 * Bill)
let each = total/Friends
console.log(total)
console.log(each)
tolu.innerHTML = each
simeon.innerHTML = each
eminem.innerHTML = each




alert("Question 2")
alert("It's time for dicount")







let purchase = prompt("Enter the amount of your purchase")

let amount = purchase 



if (parseInt(purchase) < 2000 ){
    alert(" Congratulations you have 10% discount on your purchase")
   
    goods.innerHTML = purchase  
    discount.innerHTML = 10/100 * purchase
    
   payment.innerHTML = purchase - (10/100 * purchase)

}

else if ((parseInt(purchase) >= 2000) && (parseInt(purchase) <= 5000) ){
    alert("Congratulations you have 20% discount on your purchase")
     goods.innerHTML = purchase  
   discount.innerHTML = 20/100 * purchase
payment.innerHTML = purchase - (20/100 * purchase)

}

else if ((parseInt(purchase) > 5000) ){
    alert("Congratulations you have 30% discount on your purchase")
     goods.innerHTML = purchase  
   discount.innerHTML = 30/100 * purchase
  payment.innerHTML = purchase - (30/100 * purchase)

}

// A program that determines if a number is odd or even
let x = prompt("Enter a number")
 document.getElementById("test").innerHTML = x;
 if (parseInt(x) % 2 == 0 ) {
    document.getElementById("result").innerHTML = "It is an even number";
 }
 else if (parseInt(x) % 2 == 1 )    { 
    document.getElementById("result").innerHTML = "It is an odd number";
 }
 else  { 
    document.getElementById("result").innerHTML = "Invalid input";
 }
 






