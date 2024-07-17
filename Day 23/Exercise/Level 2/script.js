const main_container = document.querySelector('.main_container');
const press = document.querySelector('.press')
let clicked = true;
var pressed_key = document.createElement('div');
pressed_key.classList.add('pressed_key');
const key_char_code = document.createElement('div');
key_char_code.classList.add('key_char_code');


window.addEventListener('keypress', (event) => {

    pressed_key.innerText = '';
    key_char_code.innerText = '';

    let some = event.key;

    pressed_key.innerText = `You Pressed ${some}`;
    main_container.appendChild(pressed_key);

    key_char_code.innerText = `${event.which}`
    main_container.append(key_char_code);

    press.style.display = 'none';
    
})


// const main_container = document.querySelector('.main_container');
// const press = document.querySelector('.press')
// let clicked = true;
// var pressed_key = document.createElement('div');
// pressed_key.classList.add('pressed_key');

// window.addEventListener('keypress', (event) => {

//     let emergency_span = document.createElement('span')
//     pressed_key.appendChild(emergency_span)
//     emergency_span.style.color = 'blue'
//     emergency_span.textContent = event.key;

//     pressed_key.innerText = '';
  
//     // some.style.color = 'red';

//     pressed_key.innerText = `You Pressed ${emergency_span}`;
//     main_container.appendChild(pressed_key);
//     press.style.display = 'none';
// })