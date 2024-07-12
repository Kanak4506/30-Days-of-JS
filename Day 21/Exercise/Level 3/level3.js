 //wrapper
 var wrapper = document.querySelector(".wrapper");
 wrapper.style.position = 'absolute';
 wrapper.style.top = '-3%';
 wrapper.style.left = '30%';
 wrapper.style.margin = '40px';
 wrapper.style.fontFamily = 'math';

 function coloring() {
   let colorArr = [];
   let given = 'abcdef0123456789';
   for (let i = 0; i < 6; i++) {
     colorArr.push(given[Math.floor(Math.random() * 15)]);
   }
   return '#' + colorArr.join('');
 }
 console.log(coloring());
 setInterval(() => {
   year.style.color = coloring();
 }, 1000);
 //h1
 var title = document.querySelector('h1');
 title.innerHTML = "Asabeneh Yetayeh challenges in <span>2020</span>"
 var year = document.querySelector('span');
 console.log(year);
 year.style.fontSize = '70px';

 var challenge = document.querySelector('h2');
 challenge.id = 'heading';
 challenge.style.margin = '0px 112px';
 challenge.style.textDecoration = 'underline';
 challenge.style.letterSpacing = '1px';

 //time
 const time = document.createElement('p');
 time.className = 'date_time';

 function getTime() {
   let now = new Date();
   let hour = now.getHours();
   hour = hour < 10 ? `0${hour}` : hour;
   let minutes = now.getMinutes();
   minutes = minutes < 10 ? `0${minutes}` : minutes;
   let seconds = now.getSeconds();
   seconds = seconds < 10 ? `0${seconds}` : seconds;

   // date
   date = now.getDate();
   date = date < 10 ? `0${date}` : date;
   thisyear = now.getFullYear();
   month_no = now.getMonth();
   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   month = months[month_no];

   let complete_time = `${month} ${date},${thisyear} ${hour}:${minutes}:${seconds}`
   time.innerText = complete_time;
 }
 getTime();
 setInterval(getTime, 1000);
 heading.insertAdjacentElement('afterend', time)
 time.style.marginTop = '23px';
 time.style.marginLeft = '127px';
 time.style.height = '30px';
 time.style.width = '300px';
 time.style.textAlign = 'center';
 time.style.weigth = 'bold';
 time.style.fontSize = '20px';

 setInterval(() => {
   time.style.backgroundColor = coloring();
 }, 1000);


 let list = document.querySelectorAll('li');
 for (let item of list) {

   item.style.margin = '2px -56px';
   item.style.listStyle = 'none';
   item.style.height = '19px';
   item.style.padding = '15px';
   item.style.fontSize = '16px';
   item.style.fontFamily = 'cursive';

   if (item.textContent.endsWith('Done')) {
     item.style.backgroundColor = '#5bbc7a'
   }
   else if (item.textContent.endsWith('Ongoing')) {
     item.style.backgroundColor = '#f7dc5c'
   }
   else {
     item.style.backgroundColor = '#eb695b'
   }

 }