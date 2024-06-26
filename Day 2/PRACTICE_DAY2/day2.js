// 1. Concatenating using addition operators

let fullName = "kanaksehrawat";
let age = 18;
let student = true;

console.log("I am ", fullName, ".I am" , age, "years old." );

let space =" ";
let puraNam = "Kanak";
let pichlaNam = "Sehrawat";

let myinfo = 'I am ' + puraNam + space + pichlaNam + '.I am' + age + 'years old.';
console.log(myinfo);

// 2. Long Literals Strings
const paragraph = "My name is Kanak Sehrawat. I live in apne ghr.\
I am a student and I love learning new things. I will learn HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2024, I was thinking to expand my journey and to reach \
to global audience and I have not started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2024. I am enjoying learning the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph);

// 3. Escape sequences in strings
 const words = "My name is Kanak Sehrawat. I live in apne ghr.\nI am a student and I love learning new things.\"I will learn\" HTML, CSS, JavaScript, React, Redux"
 console.log(words);
 
//  4. Template Strings
let a = 331242;
let b = 14324;
console.log(`The sum of ${a} and ${b} is ${a+b}`);