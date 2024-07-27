const input_container = document.querySelector('.input_container')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const country = document.querySelector('.country')
const score = document.querySelector('.score')
const add_player_btn = document.querySelector('#add_player')
const text_input = document.querySelector('.text_input')
const leaderboard = document.querySelector('.leaderboard')
const message = document.querySelector('.message')



var result = [];
function inputRules() {
    result = []
    let alp_req = /[^A-Z a-z]/g
    let num_req = /[^0-9]/g

    if (firstName.value.match(alp_req) || lastName.value.match(alp_req) || country.value.match(alp_req)) {
        result.push("Please enter a valid name.")
        message.innerHTML = 'Please enter a valid name.'
    }
  
    else if (score.value.match(num_req)) {
        result.push("Please enter a valid score.")
        message.innerHTML = 'Please enter a valid score.'

    }
    else if (firstName.value == '' || lastName.value == '' || country.value == '' || score.value == '') {
        result.push("All fields are required.")
        message.innerHTML = 'All fields are required.'

    }
    else{
        message.innerHTML = '';

    }
    console.log(result)
    console.log(result.length)
}

function addNameinLeaderboard() {
    const leaderboard_items = document.createElement('div')
    const name_time = document.createElement('div')
    const name = document.createElement('div')
    const time = document.createElement('div')
    const country_leaderboard = document.createElement('div')
    const score_leaderboard = document.createElement('div')
    const icons = document.createElement('div')
    const recycle_bin = document.createElement('div')
    const score_increase = document.createElement('div')
    const score_decrease = document.createElement('div')
    const icons_left = document.createElement('div')
    const recycle_bin_img = document.createElement('img')



    leaderboard_items.classList.add('leaderboard_items')
    name_time.classList.add('name_time')
    name.classList.add('name')
    time.classList.add('time')
    country_leaderboard.classList.add('country_leaderboard')
    score_leaderboard.classList.add('score_leaderboard')
    icons.classList.add('icons')
    recycle_bin.classList.add('recycle_bin', 'icons_left')
    score_increase.classList.add('score_increase', 'icons_left')
    score_decrease.classList.add('score_decrease', 'icons_left')


    leaderboard.appendChild(leaderboard_items)
    leaderboard_items.appendChild(name_time)
    name_time.appendChild(name)
    name_time.appendChild(time)
    leaderboard_items.appendChild(country_leaderboard)
    leaderboard_items.appendChild(score_leaderboard)
    leaderboard_items.appendChild(icons)
    icons.appendChild(recycle_bin)
    recycle_bin.appendChild(recycle_bin_img)
    icons.appendChild(score_increase)
    icons.appendChild(score_decrease)

    name.innerHTML = `${firstName.value} ${lastName.value}`;
    time.innerHTML = getTime();
    country_leaderboard.innerHTML = country.value;
    recycle_bin_img.src = "assests/icons/recycle_bin.svg";
    score_increase.innerHTML = '+5';
    score_decrease.innerHTML = '-5'
    updateScoreDisplay()

    function deleteData() {
        recycle_bin.addEventListener('click', () => {
            leaderboard_items.style.display = 'none';
        })
    }

    function updateScoreDisplay() {
        score_leaderboard.innerHTML = score.value;

    }
    score_increase.addEventListener('click', () => {
        score.value = parseInt(score.value) + 5;
        updateScoreDisplay();
    })
    score_decrease.addEventListener('click', () => {
        score.value = parseInt(score.value) - 5;
        updateScoreDisplay();
    })

    deleteData()
}


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
    return (complete_time)
}

add_player_btn.addEventListener('click', () => {
    inputRules();
    if (result.length === 0) {
        addNameinLeaderboard()
    }

})



//*************Day completed***********
