// ques1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Salman";
let lastName = "Khan";
let country = "India";
let city = "Panipat";
let age = 67;
let isMarried = false;
let year = 2024;

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// ques2 Check if type of '10' is equal to 10
let num = 10;
let str = '10';
console.log(num === str);

// ques3 Check if parseInt('9.8') is equal to 10
let Num = 10;
let num2 = parseInt('9.8');
console.log(Num == num2);

// ques4 
// i) 
   let cond1 = 31>6;
   let cond2 = 234>=94;
   let cond3 = 34<876;
   console.log(cond1, cond2, cond3);

// ii)

 cond1 = 31>623;
 cond2 = 234>=9244;
 cond3 = 3244<876;
   console.log(cond1, cond2, cond3);

// ques 5
// i)   4 > 3
let statement = 4>3;
console.log(statement);
// ii)  4 >= 3
statement = 4>=3;
console.log(statement);
// iii) 4 < 3
statement = 4<3;
console.log(statement);
// iv)  4 <= 3
statement = 4<=3;
console.log(statement);
// v)   4 == 4
statement = 4 ==4;
console.log(statement);
// vi)  4 === 4
statement = 4 ===4;
console.log(statement);

// vii) 4 != 4
statement = 4 != 4;
console.log(statement);
// viii)4 !== 4
statement = 4 !== 4;
console.log(statement);
// ix)  4 != '4'
statement = 4 != '3';
console.log(statement);
// x)   4 == '4'
statement =  4 == '4';
console.log(statement);
// xi)  4 === '4'
statement = 4 === '4';
console.log(statement);

// xii) Find the length of python and jargon and make a falsy comparison statement.
cond1 = "python".length;
cond2 = "jargon".length;
console.log(`cond1 != cond2 is ${cond1 != cond2}` );


//ques6 
// 6th ka part ) 4 > 3 && 10 < 12
cond1 = 4>3;
cond2 = 10 < 12;
console.log(cond1 && cond2);
// 6th ka part ) 4 > 3 && 10 > 12
cond1 = 4>3;
cond2 = 10 > 12;
console.log(cond1 && cond2);
// 6th ka part ) 4 > 3 || 10 < 12
cond1 = 4>3;
cond2 = 10 < 12;
console.log(cond1 || cond2);
// 6th ka part ) 4 > 3 || 10 > 12
cond1 = 4>3;
cond2 = 10 > 12;
console.log(cond1 || cond2);
// 6th ka part ) !(4 > 3)
cond1 = 4>3;
console.log(!cond1);
// 6th ka part ) !(4 < 3)
cond1 = 4<3;
console.log(!cond1);
// 6th ka part ) !(false)
cond1 = false;
console.log(!cond1);
// 6th ka part ) !(4 > 3 && 10 < 12)
cond1 = 4>3;
cond2 = 10 < 12;
console.log(!(cond1 && cond2));
// 6th ka part ) !(4 > 3 && 10 > 12)
cond1 = 4>3;
cond2 = 10 > 12;
console.log(!(cond1 && cond2));
// 6th ka part ) !(4 === '4')
cond1 = 4;
cond2 = '4';
console.log(!(cond1 === cond2))
// 6th ka part ) There is no 'on' in both dragon and python
cond1 = 'python'.includes('on');
cond2 = 'dragon'.includes('on');
console.log(!(cond1 && cond2));



// ques7
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());


