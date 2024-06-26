// ques1 to declare
var challenge = "30 Days Of JavaScript";
// ques2 to print the string
console.log(challenge);
// ques3
console.log(challenge.length);
// ques4
console.log(challenge.toUpperCase());
// ques5
console.log(challenge.toLowerCase());
// ques6
console.log(challenge.substr(0,2));

//or ques6
console.log(challenge.substring(0,2));

// ques7
console.log(challenge.substring(3,23));

// ques8
console.log(challenge.includes('Script'));

// ques9
console.log(challenge.split ());

// ques10
console.log(challenge.split(' '));


// ques11
let apps = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(apps.split(', '));

// ques12
console.log(challenge.replace('JavaScript','Python'));

// ques13
console.log(challenge.charAt(15));

// ques14
console.log(challenge.charCodeAt(11));

// ques15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

// ques16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

// ques17
console.log(challenge.indexOf('a'));

// ques18 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'));

// ques19
console.log(sentence.lastIndexOf('because'));

// extra
console.log(sentence.search('because'));

// ques20
let line = ' 30 Days Of JavaScript ';
console.log(line);
console.log(line.trim());  //required

// ques21
console.log(challenge.startsWith('30'));
// ques23
console.log(challenge.endsWith('t'));

// ques24
console.log(challenge.match('a'));

// ques25
let first = '30';
console.log(first.concat(' Days Of JavaSript'));

// ques25
console.log(challenge.repeat(2));
