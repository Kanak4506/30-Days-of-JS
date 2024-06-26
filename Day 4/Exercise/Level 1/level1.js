// QUES 1
// let birthYear = prompt("Enter your Birth Year");
// let now = new Date();
// let currentYear = now.getFullYear();
// let output = currentYear - birthYear;
// output >= 18 ? console.log("You are",output,".You are old enough to drive.") : console.log("You are",output,"You will be allowed to drive after",18 - output ,"years.");

// QUES 2  Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let yourAge = prompt("Enter your age:");
// let myAge = 18;

// if (yourAge>myAge) {
//     console.log("You are",yourAge-myAge ,"years older than me.");
// } else{
//     console.log("You are",myAge-yourAge ,"years ounger than me.");
// }

// ques 3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

// using if else
let a = 65;
let b = 38;
if (a>b){
    console.log("a is greater than b");
} else{
    console.log("a is less than b");
}
// ternary operator.
a =34;
b = 39;

a>b ? console.log("a is greater than b") : console.log("a is less than b") ;

// ques 4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = prompt("Enter any number:");
num%2 === 0 ? console.log("number is even") : console.log("number is odd");