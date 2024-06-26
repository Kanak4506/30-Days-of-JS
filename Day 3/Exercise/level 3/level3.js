// question1 YYY-MM-DD HH:mm eg. 20120-01-02 07:05

const now = new Date();
let year = now.getFullYear();
let month = (`0` + (now.getMonth() + 1)).slice(-2);
let date = (`0` + (now.getDate())).slice(-2);
let hour = now.getHours();
hour < 10 ? `0` + hour.toString() : hour;
// let hour = (`0` + (now.getHours())).slice(-2);  
let minutes = now.getMinutes();
minutes < 10 ? `0` + minutes.toString() : minutes;
// let minutes = (`0` + (now.getMinutes())).slice(-2);
console.log(`${year}-${month}-${date} ${hour}:${minutes}`);





