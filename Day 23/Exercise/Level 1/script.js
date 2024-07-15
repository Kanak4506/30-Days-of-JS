const input_container = document.querySelector('.input_container');
const generate_button = document.querySelector('.generate_button');
const numbers_container = document.querySelector('.numbers_container')

// numbers_container;
let typed_num;

let clicked = true;
function generateNumbers() {
    numbers_container.innerHTML = '';
    typed_num = document.querySelector('.your_num');
    console.log(typed_num)


    for (let i = 0; i <= typed_num.value; i++) {

        var boxes = document.createElement('div');
        boxes.className = 'numbers';
        boxes.innerText = i;
        numbers_container.appendChild(boxes);
    }
    const container = document.querySelectorAll('.numbers')
    for (const each of container) {
        // each.style.backgroundColor = 'red';
        var num = (each.innerText);
        console.log(num);

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
}

generate_button.addEventListener('click', () => {
    console.log('clicked!')
    generateNumbers()
})
