import { countries } from './countries.js'

console.log(countries)
const input = document.querySelector('#input');
const start_with_btn = document.querySelector('.start_with_word')
const search_word_btn = document.querySelector('.search_word')
const info = document.querySelector('.info')
const sort = document.querySelector('.sort')
const countries_container = document.querySelector('.countries_container')
const search_icon = document.querySelector('.search_icon')

search_icon.addEventListener('click', () => {
    alert('Please click on those purple buttons.')
})


//starting with word

start_with_btn.addEventListener('click', () => {
    countries_container.innerHTML = '';

    let start_alp_arr = [];
    let inputAlp = input.value.toLowerCase();
    for (const country of countries) {
        const country_lowerCase = country.toLowerCase();
        if (country_lowerCase[0] === inputAlp[0]) {
            start_alp_arr.push(country);
        }
    }
    console.log(start_alp_arr);
    info.innerHTML = `Countries start with <span class='input_Alp_span'>${inputAlp[0]}</span>  are: <span class='start_length_span'>${start_alp_arr.length}</span>`
    let input_Alp_span = document.querySelector('.input_Alp_span')
    let start_length_span = document.querySelector('.start_length_span')

    input_Alp_span.style.color = '#4aed20'
    start_length_span.style.color = '#115fff';

    countriesContentMaker(start_alp_arr);
})

//searching the word
search_word_btn.addEventListener('click', () => {
    countries_container.innerHTML = '';

    let word_arr = [];
    let inputWord = input.value.toLowerCase();
    for (const country of countries) {
        const country_lowerCase = country.toLowerCase();
        if (country_lowerCase.startsWith(inputWord)) {
            word_arr.push(country);
        }
    }
    console.log(word_arr);
    info.innerHTML = `Countries containing <span class='input_span'>${inputWord}</span> are: <span class='length_span'>${word_arr.length}</span>`
    let input_span = document.querySelector('.input_span')
    let lenght_span = document.querySelector('.length_span')

    input_span.style.color = 'rgb(235 98 192)';
    lenght_span.style.color = 'rgb(194, 96, 96)';

    countriesContentMaker(word_arr)

})

let flag = false;
sort.addEventListener('click', () => {
    countries_container.innerHTML = '';
    if (flag) {
        countries.sort();
        countriesContentMaker(countries)
        flag = false;
    }
    else {
        const reverse_countries = countries.reverse();
        console.log(reverse_countries);
        countriesContentMaker(reverse_countries)
        flag = true;
    }
})

function countriesContentMaker(provided) {
    countries_container.style.display = 'flex'

    for (let i = 0; i < provided.length; i++) {
        const each_country_card = document.createElement('span');
        const map_bg_image = document.createElement('div');
        const country_card_name = document.createElement('div');

        each_country_card.classList.add('each_country_card');
        map_bg_image.classList.add('map_bg_image');
        country_card_name.classList.add('country_card_name');

        countries_container.appendChild(each_country_card);
        each_country_card.appendChild(map_bg_image);
        each_country_card.appendChild(country_card_name);

        country_card_name.innerHTML = provided[i];

    }
}
countriesContentMaker(countries)