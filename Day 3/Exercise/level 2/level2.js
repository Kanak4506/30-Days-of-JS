// // ques1
// let height = prompt("Enter height:  ");
// let base = prompt("Enter base:  ");
// console.log("Area Of Triangle = ",0.5*parseFloat(height)*parseFloat(base));

// // ques2
// let side_a = prompt("Enter side a of the triangle");
// let side_b = prompt("Enter side b of the triangle");
// let side_c = prompt("Enter side c of the triangle");
// side_a = parseFloat(side_a);
// side_b = parseFloat(side_b);
// side_c = parseFloat(side_c);

// console.log("Perimeter of triangle = ", side_a + side_b + side_c);

// ques3
// let length = parseFloat(prompt("Enter length of rectangle"));
// let breadth = parseFloat(prompt("Enter breadth of rectangle"));
// console.log("Area of rectangle= ", length*breadth , "whereas perimeter = ", 2*(length + breadth));

// ques4
// let radius = parseFloat(prompt("Enter radius of circle"));
// console.log("Area of circle =", 3.14*radius*radius , "and Circumference of circle =", 2*3.14*radius);

// ques5 Calculate the slope, x-intercept and y-intercept of y = 2x -2

// let slope1 = 2;
// let y_intercept = -2;
// let x_intercept = -y_intercept/slope1;
// console.log(x_intercept);

//alternate
let x_is = parseInt(prompt('enter value of x'))
let y_is = parseInt(prompt('enter value of y'))

let x_intercept = 1;
let y_intercept = -2;
let slope = -y_intercept/x_intercept;
console.log(slope);


// ques6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let y2 = 10;
let x2 = 6;
let y1 = 2;
let x1 = 2;
let slope2 = (y2-y1)/(x2-x1);

console.log(slope2);

// ques7 
console.log("slope1 === slope2 is",slope1 === slope2);

// ques8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0
let x=0;
let y =  x*x + 6*x + 9;
y = 0 ? console.log("At this value of x, y is zero. ") : console.log("At this value of x, y is not zero. ") ;


// ques9
// let hours = parseFloat(prompt("Enter hours"));
// let rate = parseFloat(prompt("Enter rate per hour"));
// console.log(hours*rate);

// ques10
let Name = 'Kanak'.length;
Name.lenght >7 ? console.log("My name is long"):console.log("My name is short.")

// ques11
let firstName = 'Kanak';
let lastName = 'Sehrawat';

console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}.`);

// ques12
let myAge = 250;
let yourAge = 25;
console.log("I am ",myAge-yourAge, "years older than you.") 

// ques13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years

// let birthYear = parseInt(prompt("Enter your Birth Year"));
// let now = new Date();
// let currentYear = parseInt(now.getFullYear());
// let output = currentYear - birthYear;
// output >= 18 ? console.log("You are",output,".You are old enough to drive.") : console.log("You are",output,"You will be allowed to drive after",18 - output ,"years.");

// ques14
// let numYear = parseInt(prompt("Enter number of years you lived:"));
// console.log("You lived", numYear*365*24*60*60, "seconds.")

// ques15
// i) YYYY-MM-DD HH:mm
// let now = new Date();
let year = now.getFullYear();
let month = (`0` + (now.getMonth() + 1)).slice(-2);
let date = (`0` + (now.getDate())).slice(-2);
let hour = now.getHours();  
let minutes = now.getMinutes();
console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
// ii) DD-MM-YYYY HH:mm
console.log(`${date}-${month}-${year} ${hour}:${minutes}`);


// iii) DD/MM/YYYY HH:mm
console.log(`${date}/${month}/${year} ${hour}:${minutes}`);
