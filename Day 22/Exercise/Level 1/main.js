const body = document.querySelector('body')
body.style.maxWidth = '1260px';
body.style.margin = '15px 337px';


let heading = document.querySelector('h1');
heading.style.fontFamily = 'math';
heading.style.fontSize = '23px';
heading.style.marginLeft = '40%';



let day = document.querySelector('h2');
day.style.fontFamily = 'sans-serif';
day.style.fontSize = '16px';
day.style.marginLeft = '38%';
day.style.fontWeight = 'light';
day.style.textDecoration = 'underline';
day.style.marginTop = '-12px'




let author = document.querySelector('h3');
author.style.fontFamily = 'sans-serif';
author.style.fontSize = '15px';
author.style.marginLeft = '40%';
author.style.fontWeight = 'light';
author.style.textDecoration = 'underline';
author.style.marginTop = '-9px'





const wrapper = document.querySelector('.wrapper');
for (let i = 0; i < 102; i++) {
    var boxes = document.createElement('div');
    boxes.className = 'numbers';
    boxes.innerText = i;
    wrapper.appendChild(boxes)
}


wrapper.style.display = 'grid';
// wrapper.style.width =

    wrapper.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';


let button = 0;
let list = document.querySelectorAll('.numbers')
console.log(list);
for (const each of list) {
    each.style.height = '100px';
    each.style.width = '130px';
    each.style.margin = '4px';
    each.style.fontSize = '30px';
    each.style.fontFamily = 'math';
    each.style.color = '#ffffff';
    each.style.display = 'flex';
    each.style.justifyContent = 'center';
    each.style.alignItems = 'center';


    var num = each.innerText;
    let button = 0;

    if (num % 2 == 0) {
        each.style.backgroundColor = '#21bf73'
    }
    if (num % 2 != 0) {
        each.style.backgroundColor = '#fddb3a'
    }

    if (num == 2 || num == 3) {
        each.style.backgroundColor = '#fd5e53';
    }

    for (let j = 2; j <= num / 2; j++) {
        if (num % j == 0) {
            if (num % 2 != 0) {
                each.style.backgroundColor = '#fddb3a'
            }
            if (num % 2 == 0) {
                each.style.backgroundColor = '#21bf73'
            }

            button = 1;
            break;
        }
        if (button == 0) {
            each.style.backgroundColor = '#fd5e53';
        }
    }
}

