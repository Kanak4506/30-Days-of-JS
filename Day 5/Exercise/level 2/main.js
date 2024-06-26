// q1
import {countries} from './countries.js';
import {webtechs} from './webtechs.js';

console.log('Countries array:', countries);
console.log('Web technology array:', webtechs);

// q2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let new_text = text.replaceAll(/[.,]/gi,'');

console.log(new_text);
// let req = text.replaceAll(/[^A-Za-z]/gi,' ');
// console.log(text.split(' '));
// console.log(req);
console.log(new_text.split(" "));


// q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// shoppingCart.unshift('Meat');
// console.log(shoppingCart);
// shoppingCart.push('Sugar');
// console.log(shoppingCart);
// shoppingCart.pop();
// console.log(shoppingCart);
shoppingCart.splice(2,1,'Green Tea');
console.log(shoppingCart);


// q4

if (countries.includes('Ethiopia') == false) {
    countries.push('Ethiopia');
    console.log(countries);
} else {
    console.log('ETHIOPIA')
};

// Q5
if (webtechs.includes('Sass') == false) {
    webtechs.push('Sass');
    console.log(webtechs);
} else {
    console.log('Sass is a CSS preprocess.')
};


// q6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);