const info_container = document.querySelector('.info_container')
const lang_container = document.querySelector('.lang_container')
const population = document.querySelector('.population');
const languages = document.querySelector('.languages');
const about = document.querySelector('.about')

info_container.style.display = 'block';





let flag = 1;
population.addEventListener('click', () => {
    if (flag == 1) {
        info_container.innerHTML = '';
        mostPopulatedCountries();
        info_container.style.display = 'block'
        lang_container.style.display = 'none'
        flag = 0;
    }
})
languages.addEventListener('click', () => {
    if (flag == 0) {
        lang_container.innerHTML = '';
        mostSpokenLanguages();
        lang_container.style.display = 'block';
        info_container.style.display = 'none'
        flag = 1;
    }
})

import { countries_data } from './countries.js'
function mostPopulatedCountries() {
    about.innerHTML = '10 Most populated countries in the World'
    let country_pop = [];
    for (const country of countries_data) {
        const population = country.population;
        const country_name = country.name;
        country_pop.push({ country_name, population })
    }
    let world_pop = 0;
    for (let i = 0; i < country_pop.length; i++) {
        world_pop += country_pop[i].population;
    }
    country_pop.sort((a, b) => b.population - a.population)


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

    for (let i = 0; i < 10; i++) {

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



        lang_name.innerHTML = country_pop[i].country_name;
        value.innerHTML = country_pop[i].population
        let width = (parseInt(value.textContent) / world_pop) * 100;
        graph.style.width = width + '%'

    }
}


let lang_arr = [];
for (const each of countries_data) {
    let each_language = each.languages;
    for (const each_lang of each_language) {
        lang_arr.push(each_lang)
    }
}
const allLang = new Set(lang_arr)
console.log(allLang);

function mostSpokenLanguages() {
    const each_data_info = [];
    for (const each_lang_data of allLang) {
        const filtered_data = lang_arr.filter((each) => each === each_lang_data);
        each_data_info.push({ country: each_lang_data, count: filtered_data.length });
    }

    about.innerHTML = '10 Most Spoken languages in the World'
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