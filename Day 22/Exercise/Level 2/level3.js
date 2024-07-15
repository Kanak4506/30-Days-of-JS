import { countries } from './countries.js'

const body = document.querySelector('body')
body.style.maxWidth = '1260px';
body.style.margin = '15px 337px';



let heading = document.querySelector('h1');
heading.style.fontFamily = 'math';
heading.style.fontSize = '43px';
heading.style.marginLeft = '22%';
heading.style.letterSpacing = '3px';



let total_countries = document.querySelector('h3');
total_countries.style.fontFamily = 'sans-serif';
total_countries.style.fontSize = '15px';
total_countries.style.marginLeft = '39%';
total_countries.style.fontWeight = 'light';
total_countries.style.marginTop = '-12px'




let challenge = document.querySelector('h4');
challenge.style.fontFamily = 'sans-serif';
challenge.style.fontSize = '13px';
challenge.style.marginLeft = '40%';
challenge.style.fontWeight = 'light';
challenge.style.marginTop = '-9px'



let author = document.querySelector('h6');
author.style.fontFamily = 'sans-serif';
author.style.fontSize = '10px';
author.style.marginLeft = '43%';
author.style.fontWeight = 'light';
author.style.textDecoration = 'underline';
author.style.marginTop = '-12px'


const wrapper = document.querySelector('.wrapper');
for (let i = 0; i < countries.length; i++) {
    const each = document.createElement('div');
    each.innerText = countries[i];
    each.className = 'country';
    wrapper.appendChild(each);
}

wrapper.style.display = 'grid';
wrapper.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';

// country.style.color = 'red';
let country_list = document.querySelectorAll('.country')
for ( const each of country_list ) {
    each.style.width = '130px';
    each.style.height = '120px';
    each.style.borderRadius = '2px';
    each.style.margin = '5px';
    each.style.display = 'flex';
    each.style.fontFamily = 'cursive';
    each.style.alignItems = 'center';
    each.style.justifyContent = 'center';
    each.style.textTransform = 'uppercase';
    each.style.boxShadow = '1px 1px 1px 1px';


}