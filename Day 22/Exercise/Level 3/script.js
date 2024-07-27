

var title = document.querySelector('h1');
const about_me = document.querySelector('h3')

title.innerHTML = "Kanak Sehrawat challenge in <span>2024</span>"
var year = document.querySelector('span');
console.log(year);
year.style.fontSize = '70px';

title.style.margin = '4px 152px';
about_me.style.margin = '0px 320px'
about_me.style.textDecoration = 'underline';
about_me.id = 'heading';

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
time.style.height = '30px';
time.style.width = '300px';
time.style.textAlign = 'center';
time.style.weigth = 'bold';
time.style.fontSize = '20px';
time.style.margin = '24px 258px'

setInterval(() => {
    time.style.backgroundColor = coloring();
}, 1000);



const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            ['🌱', 'Educator'],
            ['💻', 'Programmer'],
            ['🌐', 'Developer'],
            ['🔥', 'Motivator'],
            ['📔', 'Content Creator']
        ],
        qualifications: [
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asabeneh/',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com/Asabeneh',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: 'https://github.com/Asabeneh'
            },
            {
                social: 'DEV.to',
                fontawesomeIcon: '',
                url: 'https://dev.to/asabeneh'
            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            days: 30,
            status: 'Done',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            days: 30,
            status: 'Ongoing',
            questions: 'Above 500',
            projects: 'About 30',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
        },
        {
            name: '30 Days Of HTML & CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            days: 30,
            status: 'Coming',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Data Analysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Machine Learning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        }
    ]
}


const allChallenge = (asabenehChallenges2020['challenges']);

let name_arr = [];
let topics_arr = [];
let titles_arr = [];
let status_arr = [];

for (const each of allChallenge) {
    name_arr.push(each.name);
    topics_arr.push(each.topics);
    titles_arr.push(each.name.slice(10))
    status_arr.push(each.status);
}

let data_complete = [];
for (let i = 0; i < 8; i++) {
    const data = {
        challenge: name_arr[i],
        language: titles_arr[i],
        topics: topics_arr[i],
        status: status_arr[i],
    }
    data_complete.push(data)
}

console.log(data_complete);

const body = document.querySelector('body')
const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.width = '900px'

body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.width = '1000px'
body.style.justifyContent = 'center'
body.style.margin = ' 0px 260px';



for (i = 0; i < data_complete.length; i++) {
    var divs = document.createElement('div');
    divs.className = 'each_challenge';
    container.appendChild(divs);

    const chall_30 = document.createElement('span');
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const para = document.createElement('p');
    const status_challenge = document.createElement('span');


    chall_30.className = 'challenge_lang';
    status_challenge.className = 'status';

    divs.appendChild(chall_30);
    divs.appendChild(details);
    details.appendChild(summary);
    details.appendChild(para);
    divs.appendChild(status_challenge);


    chall_30.innerText = name_arr[i];
    summary.innerText = titles_arr[i];
    para.innerText = topics_arr[i].join(' \n');
    status_challenge.innerText = status_arr[i];


    divs.style.display = 'flex';
    // divs.style.justifyContent = 'center';
    divs.style.alignItems = 'center';

    divs.style.width = '900px';
    // divs.style.height = '65px';
    divs.style.margin = '2px 0px';
    divs.style.padding = '30px';
    // divs.style.height = '65px';



    chall_30.style.textDecoration = 'underline';
    chall_30.style.width = '300px';


    details.style.width = '500px'

    status_challenge.style.width = '100px';
    status_challenge.style.display = 'flex';
    status_challenge.style.justifyContent = 'right';




    if (divs.textContent.endsWith('Done')) {
        divs.style.backgroundColor = '#5bbc7a'
        chall_30.style.color = '#551a8b';

    }
    else if (divs.textContent.endsWith('Ongoing')) {
        divs.style.backgroundColor = '#f7dc5c';
        chall_30.style.color = '#723b7d';

    }
    else {
        divs.style.backgroundColor = '#eb695b'
    }

}

const main_container = document.querySelector('.main_container')
const about_kanak = document.createElement('div');
const about_name = document.createElement('div');
const about_social_media = document.createElement('div');
const about_kanak_info = document.createElement('div');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');

main_container.appendChild(about_kanak);
main_container.style.width = '900px'

about_kanak.appendChild(about_name);
about_kanak.appendChild(about_social_media);
about_kanak.appendChild(about_kanak_info);
about_social_media.appendChild(img1);
about_social_media.appendChild(img2);
about_social_media.appendChild(img3);



about_kanak.style.marginTop = '15px';

about_name.classList.add('about_name');
about_name.style.display = 'flex';
about_name.style.justifyContent = 'center';
about_name.style.fontSize = '26px';
about_name.style.fontFamily = 'math';
about_name.style.fontWeight = 'bold';


about_social_media.classList.add('about_social_media');
about_social_media.style.display = 'flex';
about_social_media.style.justifyContent = 'center';


about_kanak_info.classList.add('about_kanak_info');
about_kanak_info.style.marginTop = '15px';
about_kanak_info.style.fontSize = '16px';
about_kanak_info.style.fontFamily = 'cursive';


about_name.innerText = 'Kanak Sehrawat';
img1.src = 'assests/icons/insta.svg';
img2.src = 'assests/icons/twitter.svg';
img3.src = 'assests/icons/fb.svg';

img1.style.margin = '5px';
img2.style.margin = '5px';
img3.style.margin = '5px';

about_kanak_info.innerText = "I am a student who is studying at India's number one platform in Karhans, Panipat. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for reading my page. You are so sweet."



const details_about_kanak = document.createElement('div');
const titles = document.createElement('div');
const skills = document.createElement('div');
const qualifications = document.createElement('div');

details_about_kanak.style.margin = '25px 0px'

const title_heading = document.createElement('div');
titles.appendChild(title_heading);
title_heading.innerText = 'TITLES'
title_heading.style.fontWeight = 'bold'
title_heading.style.padding = '8px';


const skills_heading = document.createElement('div');
skills.appendChild(skills_heading);
skills_heading.innerText = 'SKILLS'
skills_heading.style.fontWeight = 'bold'
skills_heading.style.padding = '8px';


const qualifications_heading = document.createElement('div');
qualifications.appendChild(qualifications_heading);
qualifications_heading.style.fontWeight = 'bold'
qualifications_heading.innerText = 'QUALIFICATIONS';
qualifications_heading.style.padding = '8px';



let titles_array = ['Ek Dost', 'Educator', 'Programmer', 'Developer', 'Motivator', 'Bchi']
let skills_array = ['Web Development', 'Data Analysis', 'Data Visualization', 'Programming', 'Databases', 'Developing API'];

let qualifications_array = ['10th passed', '12th passed', 'BCA from IITM', 'Many more']


for (let i = 0; i < 5; i++) {
    const titles_items = document.createElement('div');
    const titles_icons = document.createElement('img');
    const titles_name = document.createElement('div');

    titles_icons.src = 'assests/icons/pencil.svg';

    titles.appendChild(titles_items);
    titles_items.appendChild(titles_icons);
    titles_items.appendChild(titles_name);

    titles_name.innerText = titles_array[i];
    titles_items.style.display = 'flex';

    titles_items.style.padding = '6px'
}

for (let i = 0; i < 6; i++) {
    const skills_items = document.createElement('div');
    const skills_icons = document.createElement('img');
    const skills_name = document.createElement('div');

    skills_icons.src = 'assests/icons/tick.svg';

    skills.appendChild(skills_items);
    skills_items.appendChild(skills_icons);
    skills_items.appendChild(skills_name);

    skills_name.innerText = skills_array[i];
    skills_items.style.display = 'flex';
    skills_items.style.padding = '2px'

}

for (let i = 0; i < 3; i++) {
    const qualifications_items = document.createElement('div');
    const qualifications_icons = document.createElement('img');
    const qualifications_degree = document.createElement('div');

    qualifications_icons.src = 'assests/icons/student.svg';
    qualifications.appendChild(qualifications_items);
    qualifications_items.appendChild(qualifications_icons);
    qualifications_items.appendChild(qualifications_degree);

    qualifications_degree.innerText = qualifications_array[i];
    qualifications_items.style.display = 'flex';
    qualifications_items.style.padding = '6px'


}

main_container.appendChild(details_about_kanak);
details_about_kanak.appendChild(titles);
details_about_kanak.appendChild(skills);
details_about_kanak.appendChild(qualifications);

details_about_kanak.style.display = 'flex'
details_about_kanak.style.justifyContent = 'space-around';
details_about_kanak.style.padding = '15px';




titles.classList.add('titles');


qualifications.classList.add('qualifications');


const keywords_main_container = document.createElement('div');
keywords_main_container.classList.add('keywords_main_container')
main_container.appendChild(keywords_main_container);

const keyword_title = document.createElement('div');
const keywords_container = document.createElement('div');

keywords_main_container.appendChild(keyword_title);
keywords_main_container.appendChild(keywords_container);

keyword_title.innerText = 'Keywords';
keyword_title.style.fontFamily = 'math';
keyword_title.style.padding = '10px';
keyword_title.style.fontWeight = 'bolder';
keyword_title.style.fontSize = '18px';


keywords_container.style.display = 'flex';
keywords_container.style.flexWrap = 'wrap';
keywords_container.style.margin = '0px 80px';




let keywords_arr = asabenehChallenges2020['keywords']
console.log(keywords_arr)

for(let i = 0 ; i < 35; i++) {
    const keyword_items = document.createElement('span');
    keywords_container.appendChild(keyword_items);
    keyword_items.innerText = keywords_arr[i];
    keyword_items.style.margin = '5px';
    keyword_items.style.padding = '5px';
    keyword_items.style.backgroundColor = coloring();
    keyword_items.style.borderRadius = '14px';


}



//*************Day completed***********
