const input = document.querySelector('.input');
const numbers = document.querySelector('.numbers');

numbers.style.display = 'grid';
numbers.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
numbers.style.marginTop = '24px';
let value = 10;
for (let i = 0; i < value; i++) {
    var boxes = document.createElement('div');
    boxes.innerText = i;
    boxes.className = 'num';
    numbers.appendChild(boxes);

}

let list = document.querySelectorAll('.num')

for (const each of list) {
    each.style.height = '100px';
    each.style.width = '90px';
    // each.style.border = '2px solid red';
    each.style.fontSize = '30px';
    each.style.margin = '4px';
    // each.style.color = '#ffffff';
    each.style.display = 'flex';
    each.style.justifyContent = 'center';
    each.style.alignItems = 'center';

    num = each.innerText;
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
