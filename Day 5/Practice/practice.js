let arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'; 
const companies = companiesString.split(',');
console.log(companies);


arr = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]    

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = secondList.concat(firstList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]



let numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.indexOf(2)) // 1    
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6
console.log(numbers.lastIndexOf(4)) //  3
console.log(numbers.lastIndexOf(6)) // -1

 numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers)) // true

const number = 100
console.log(Array.isArray(number)) // false


numbers = [1, 2, 3, 4, 3, 5];
numbers.pop(); // -> remove one item from the end
console.log(numbers); // -> [1,2,3,4]


numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 4, 9]]
console.log(arrayOfArray[1]) // [1, 2, 3]

//  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [frontEnd, backEnd]
//  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
//  console.log(fullStack.length)  // 2
//  console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
//  console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]