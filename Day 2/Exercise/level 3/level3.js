// ques1
let line = 'Love is the best thing in this world. Some found their love and some are still looking for their love .';
 let wordsarray = line.split(' ');
 let wordlove = wordsarray.filter(word => word === 'love').length;
 console.log(wordlove);
// or
let lovematches = line.match(/love/gi);
let lovecount = lovematches ? lovematches.length: 0;
console.log(`The word "because" appears ${lovecount} times.`);

// ques2
let sentence ='You cannot end a sentence with because because because is a conjunction';
let matches = sentence.match(/because/gi);
let countmatches = matches ? matches.length :0;
console.log(`The word "because" appears ${countmatches} times.`)

// ques3 

    const sent = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
    console.log(sent.replace(/[^A-Za-z0-9 .?]/g,''))

// ques4 Calculate the total annual income of the person by extracting the numbers from the following text. 
let equation = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let numbers = equation.match(/\d+/g);
let [monthlysalary, annualbonus, onlinecourses] = numbers.map(Number);
let annualincome = (monthlysalary*12)+(annualbonus)+(onlinecourses*12);
console.log(`His annual income is ${annualincome} euro.`) 

        //*************Day 2 completed***********
