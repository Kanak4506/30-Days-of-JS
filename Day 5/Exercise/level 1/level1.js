// q1
let words = Array();
console.log(words);

// q2
let num1 = [1,2,3];
let num2 = [5,6];
let num = num1.concat(num2);
console.log(num);
// q3
console.log(num.length);
// q4
let firstTerm = num[0];
console.log(firstTerm)
let middleTerm =  num[Math.floor(num.length/2)]; 
let lastTerm =  num[num.length - 1];
let arrayOfArray = [firstTerm, middleTerm, lastTerm];
console.log(arrayOfArray);

// q5
let mixedDataTypes = ["Anjita", 89 , true, {country: 'India', city: 'Panipat' } ,{ Friends:'Anju'&& 'Tina' } , {umr: 45}];
console.log(mixedDataTypes);

// q6
let itCompanies = 'Facebook, Google, Microsoft, Apple , IBM , Oracle, Amazon';
// q7
console.log(itCompanies.split(', '));
// q8
req = itCompanies.length;
console.log(req);

// q9
let firstCompany = 'Facebook';
let middleCompany = Math.floor(req/2);
let lastCompany = (req-1);

console.log(`First Company : ${firstCompany}\nMiddle Company : ${middleCompany}\nLast Company : ${lastCompany}`);
console.log(itCompanies);
console.log(itCompanies.toUpperCase());

// q12
console.log(`${itCompanies} are big IT companies.`);

// q13
itCompanies = itCompanies.toLocaleLowerCase();
let company = 'google';
if (itCompanies.includes(company) == true){
    console.log("The company");
} else {
    console.log("A company is not found");
}
// q14 doubt
let companies_name = itCompanies.split(', ');

// q15
console.log(companies_name.sort());
// q16
console.log(companies_name.reverse());
// q17
console.log(companies_name.slice(3,7));
// q18
console.log(companies_name.slice(0,4));
// q19 ya 20 same
console.log(companies_name.slice(4));
let length = companies_name.length;
let middle = ((length -1)/2);
console.log(middle);
console.log(companies_name);
let first = companies_name.slice(0,3);
let second = companies_name.slice(4,7);
console.log(first.concat(second));

console.log(companies_name.splice(middle,1));


// q21
console.log(companies_name.shift());
console.log(companies_name);
// q22
console.log(companies_name.pop());
console.log(companies_name);

// q23
console.log(companies_name.splice(0, length-1));
console.log(companies_name);






