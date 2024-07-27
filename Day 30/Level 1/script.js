const countries_content_container = document.querySelector('.countries_content_container')
const name_btn = document.querySelector('.name')
const capital_btn = document.querySelector('.capital')
const population_btn = document.querySelector('.population_btn')
const sort_btn = document.querySelector('.sort')
const info_input = document.querySelector('.info_input')
const info_container = document.querySelector('.info_container')
const lang_container = document.querySelector('.lang_container')
const populations = document.querySelector('.population');
const languages = document.querySelector('.languages');
const about = document.querySelector('.about')
const number_countries = document.querySelector('.number_countries')



import { countries } from './countries.js'
console.log(countries)


name_btn.addEventListener('click', () => {



    countries_content_container.innerHTML = '';
    let inputInfo = info_input.value.toLowerCase();

    // let name_alp_arr = [];
    // for (const country of countries) {
    //     let country_lowerCase = country.name.toLowerCase();
    //     if (country_lowerCase.startsWith(inputInfo)) {
    //         name_alp_arr.push(country)
    //     }
    // }

    let name_alp_arr = countries.filter(country => country.name?.toLowerCase().startsWith(inputInfo))
    console.log(name_alp_arr)
    countriesContentMaker(name_alp_arr)
})


capital_btn.addEventListener('click', () => {
    countries_content_container.innerHTML = '';

    let inputInfo = info_input.value.toLowerCase();
    let capital_alp_arr = countries.filter(country => country.capital?.toLowerCase().startsWith(inputInfo));

    console.log(capital_alp_arr)
    countriesContentMaker(capital_alp_arr)
})

population_btn.addEventListener('click', () => {
    lang_container.innerHTML = '';
    populatedCountries()

})

let flag = false;
sort_btn.addEventListener('click', () => {
    countries_content_container.innerHTML = '';
    let sortedCountries;

    if (flag) {
        sortedCountries = [...countries]
        sortedCountries.sort();
        countriesContentMaker(sortedCountries);
        flag = false;

    } else {
        let sortedCountries = [...countries]
        sortedCountries.reverse()
        countriesContentMaker(sortedCountries);
        flag = true;
    }
})


function countriesContentMaker(provided) {

    for (let i = 0; i < provided.length; i++) {
        countries_content_container.style.display = 'flex'

        const each_country_card = document.createElement('div')
        const img_div = document.createElement('div')
        const image = document.createElement('img')
        const country_name = document.createElement('div')
        const country_info = document.createElement('div')
        const capital = document.createElement('div')
        const languages = document.createElement('div')
        const population = document.createElement('div')

        countries_content_container.appendChild(each_country_card)
        each_country_card.appendChild(img_div)
        img_div.appendChild(image)
        each_country_card.appendChild(country_name)
        each_country_card.appendChild(country_info)
        country_info.appendChild(capital)
        country_info.appendChild(languages)
        country_info.appendChild(population)

        each_country_card.classList.add('each_country_card');
        img_div.classList.add('img_div');
        each_country_card.classList.add('each_country_card');
        country_name.classList.add('country_name');
        country_info.classList.add('country_info');
        capital.classList.add('capital');
        languages.classList.add('languages');
        population.classList.add('population');

        country_name.innerHTML = provided[i].name;
        image.src = provided[i].flag;
        capital.innerHTML = `Capital: ${provided[i].capital}`;
        languages.innerHTML = `Langauges: ${provided[i].languages.join(' ,')}`;
        population.innerHTML = `Population: ${provided[i].population}`;
    }
    const count = document.querySelectorAll('.each_country_card')
    console.log(count)
    number_countries.innerHTML = `${count.length} countries satisfied this criteria`

}




let map = 1;
populations.addEventListener('click', () => {
    if (map == 1) {
        info_container.innerHTML = '';
        populatedCountries();
        info_container.style.display = 'block'
        lang_container.style.display = 'none'
        map = 0;
    }
})
languages.addEventListener('click', () => {
    console.log("hello")
    if (map == 0) {
        lang_container.innerHTML = '';
        spokenLanguages();
        lang_container.style.display = 'block';
        info_container.style.display = 'none'
        map = 1;
    }
})


countries_content_container.style.display = 'none'


function populatedCountries() {
    let inputInfo = info_input.value.toLowerCase();
    let country_pop_arr = countries.filter(country => country.name?.toLowerCase().startsWith(inputInfo))

    console.log(country_pop_arr);

    lang_container.innerHTML = ''
    about.innerHTML = 'ek kdm saflta ki aur';
    

    country_pop_arr.sort((a, b) => b.population - a.population)
    let world_pop = 0;
    for (const country of countries) {
        world_pop += country.population;
    }
    console.log(world_pop)

    const world_info = document.createElement('div')
    const name = document.createElement('div')
    const world_progress = document.createElement('div')
    const world_value = document.createElement('div');
    const world_graph_bar = document.createElement('div')

    world_progress.classList.add('progress_bar')
    world_value.classList.add('value')
    world_info.classList.add('each_lang_info')
    world_graph_bar.classList.add('graph')

    info_container.appendChild(world_info)
    world_info.appendChild(name);
    world_info.appendChild(world_progress)
    world_info.appendChild(world_value)
    world_progress.appendChild(world_graph_bar)


    name.innerHTML = "World";
    world_value.innerHTML = world_pop
    world_graph_bar.style.width = '100%'

    for (let i = 0; i < country_pop_arr.length; i++) {
        const each_lang_info = document.createElement('div')
        const lang_name = document.createElement('div');
        const graph = document.createElement('div');
        const progress_bar = document.createElement('div');
        const value = document.createElement('div');

        each_lang_info.classList.add('each_lang_info')
        lang_name.classList.add('lang_name')
        progress_bar.classList.add('progress_bar')
        value.classList.add('value')
        graph.classList.add('graph')
        name.classList.add('lang_name')

        progress_bar.appendChild(graph);
        info_container.appendChild(each_lang_info);
        each_lang_info.appendChild(lang_name)
        each_lang_info.appendChild(progress_bar)
        each_lang_info.appendChild(value)

        lang_name.innerHTML = country_pop_arr[i].name;
        value.innerHTML = country_pop_arr[i].population
        let width = (parseInt(value.textContent) / world_pop) * 100;
        graph.style.width = width + '%'
    }
}

let lang_arr = [];
for (const each of countries) {
    let each_language = each.languages;
    for (const each_lang of each_language) {
        lang_arr.push(each_lang);
    }
}
const allLang = new Set(lang_arr)
console.log(allLang)



function spokenLanguages() {
    const each_data_info = [];
    for (const each_lang_data of allLang) {
        const filtered_data = lang_arr.filter((each) => each === each_lang_data);
        each_data_info.push({ country: each_lang_data, count: filtered_data.length });
    }
    info_container.innerHTML = ''
    about.innerHTML = 'Most Spoken Languages in the World'
    console.log(each_data_info)
    each_data_info.sort((a, b) => b.count - a.count);
    const req_lang_data = each_data_info.slice(0, 10);
    console.log(req_lang_data);

    for (let i = 0; i < 10; i++) {
        const country_lang_name = document.createElement('div')
        const country_progress_bar = document.createElement('div')
        const country_lang_graph = document.createElement('div')
        const country_lang_value = document.createElement('div')
        const country_each_lang_info = document.createElement('div')

        lang_container.appendChild(country_each_lang_info);
        country_each_lang_info.appendChild(country_lang_name);
        country_each_lang_info.appendChild(country_progress_bar);
        country_each_lang_info.appendChild(country_lang_value);
        country_progress_bar.appendChild(country_lang_graph);

        country_each_lang_info.classList.add('country_each_lang_info');
        country_lang_graph.classList.add('country_lang_graph')
        country_lang_name.classList.add('country_lang_name')
        country_lang_value.classList.add('country_lang_value')
        country_progress_bar.classList.add('country_progress_bar')



        country_lang_name.innerHTML = req_lang_data[i].country;
        country_lang_graph.style.width = req_lang_data[i].count + '%';
        country_lang_value.innerHTML = req_lang_data[i].count;
    }

}
