// ques1
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\nby John Holmes teaches us to help one another."
console.log(quote);

// ques2
let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote2);

// ques3
let num ='10';
let numInt = 10;
 console.log(num === numInt);

 let numberInt = parseInt(num);
 console.log(numberInt);
 console.log(typeof numberInt);

// ques4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let Number = '9.8';
let floatNum = parseFloat(Number);
console.log(floatNum);
let NUMInt = 10;

if (NUMInt !== floatNum){
   let reqNum = Math.ceil(floatNum);
   console.log(reqNum);
}

// ques5
let word1 =  "python"; 
let word2 = "jargon";
let cond1 =  word1.includes('on');
let cond2 =  word2.includes('on');

console.log("cond1 && cond2=", cond1 && cond2);


// ques6

let line = "I hope this course is not full of jargon.";
console.log(line.includes('jargon'));

// ques7 Generate a random number between 0 and 100 inclusively.
const randomNum = Math.floor(Math.random()*100);
console.log(randomNum);

// ques8 Generate a random number between 50 and 100 inclusively
const max = 100;
const min = 50;

const randomNum1 = Math.floor(Math.random()*(max-min+1)+min);
console.log(randomNum1);





// ques9
const randomNum2 = Math.floor(Math.random()*255);
console.log(randomNum2);



// ques10 Access the 'JavaScript' string characters using a random number
let str = 'JavaSript'
let strlength = str.length;
let randomIndex = Math.floor(Math.random()*strlength);
let randomcharacter = str[randomIndex];

console.log(`Random index = ${randomIndex}`);
console.log(`Character in Random index = ${randomcharacter}`);
// q10 method2
console.log(str[Math.floor(Math.random()*str.length)])



// ques11 

/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

let paragraphNum = "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125";
console.log(paragraphNum);

// ques11 
let sentenceLine = "You cannot end a sentence with because because because is a conjunction";

console.log(sentenceLine.substr(31,23));