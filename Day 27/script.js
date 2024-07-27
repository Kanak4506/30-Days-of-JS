import { asabenehChallenges2020 } from './countries.js'



function coloring() {
    let colorArr = [];
    let given = 'abcdef0123456789';
    for (let i = 0; i < 6; i++) {
        colorArr.push(given[Math.floor(Math.random() * 15)]);
    }
    return '#' + colorArr.join('');

}
const skills_icons = document.querySelector('.skills_icons')
const skills_name = document.querySelector('.skills_name')
const skills_elem = document.querySelector('.skills');
const allSkillsArr = asabenehChallenges2020.author.titles;


let icons_arr = [];
let skills_arr = [];
for (const each of allSkillsArr) {
    icons_arr.push(each[0]);
    skills_arr.push(each[1]);
}

let index = 0;
function updateSkills() {
    if (index >= icons_arr.length) {
        index = 0;
    }
    skills_elem.innerHTML = `<span class='icon_items'>${icons_arr[index]}</span>   <span class='skill_items'>${skills_arr[index]}</span>`;
    index++;

}



const teaches_elem = document.querySelector('.teaches');
let i = 0;
const keywords = asabenehChallenges2020.keywords;
console.log(keywords)
function updateText() {
    if (i >= keywords.length) {
        i = 0;
    }
    teaches_elem.innerHTML = `The technologies I will study <span class = 'technologies'>${keywords[i]}</span>`;
    i++;
    const technologies = document.querySelector('.technologies');
    technologies.style.color = coloring()
}

setInterval(() => {
    updateText()
    updateSkills()
}, 2000)



//*************Day completed***********
