// ques 1 Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let score = prompt("Enter your score between [0-100]only.")
// let grade;
// if (score >= 80 && score<=100){
//     grade="A";
// } else if (score >= 80 && score<=100){
//     grade="B";
// } else if (score >= 70 && score<=89){
//     grade="C";
// } else if (score >= 60 && score<=69){
//     grade="D";
// } else if (score >= 50 && score<=59){
//     grade="E";
// } else if (score >= 0 && score <= 49){
//     grade="F";
// }
// console.log("According to your score, your grade is =", grade);

// ques 2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let value = prompt("enter month name");
// value = value.toLowerCase();
// if (value = 'september' || 'october' || 'november') {
//     console.log("The season is Autumn.");
// } else if (value = 'december' || 'january' || 'february') {
//     console.log("The season is Winter.");
// } else if (value = 'march', 'april' || 'may') {
//     console.log("The season is Spring.");
// } else if (value = 'june' || 'july' || 'august') {
//     console.log("The season is Summer.");
// } else ("invalid");

// let month = prompt("enter month name");
// month = month.toLowerCase();
// switch (month) {
//     case 'september':
//     case 'october':
//     case 'november':
//         console.log("The season is Autumn.");
//         break;
//     case 'december':
//     case 'january':
//     case 'february':
//         console.log("The season is Winter.");
//         break;
//     case 'march':
//     case 'april':
//     case 'may':
//         console.log("The season is Spring.");
//         break;
//     case 'june':
//     case 'july':
//     case 'august':
//         console.log("The season is Summer.");
//         break;
//     default:
//         console.log("Invalid month.")
// }


//  ques 3 Check if a day is weekend day or a working day. Your script will take day as an input. wrong
let day = prompt("What is the day  today?");
day = day.toLowerCase();
if ( day == 'saturday' || day ==  'sunday'){
    console.log(`${day} is a weekend.`);
}else {
    console.log(`${day} is a working day.`);
}
// let day = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
// day = day.toLowerCase();

//  let weekend = ['saturday','sunday'];
//  let working = ['monday','tuesday','wednesday','thursday','friday'];
// if (day === saturday || day === sunday){
//  return  weekend;
// } else if ( day === monday || day === tuesday ||  day === wednesday ||  day === thursday ||  day === friday ) {
//  return working ;
// } else {
//  return 'Invalid';
// }


// month = "April";
// year = 2024;

//     month = month.toLowerCase(),
//     ['january', 'march', 'may', 'july', 'august', 'october', 'december'].includes(month) ? 31 :
//     ['april', 'june', 'september', 'november'].includes(month) ? 30 :
//     month === 'february' ? ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28) :
//     'Invalid month'

// // Example usage:
// console.log(`${month} ${year} has ${daysInMonth(month, year)} days.`);


        //*************Day completed***********
