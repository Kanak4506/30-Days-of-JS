const text = document.querySelector('h1')
const container = document.querySelector('.container')

function coloring() {
    let colorArr = [];
    let given = 'abcdef0123456789';
    for (let i = 0; i < 6; i++) {
        colorArr.push(given[Math.floor(Math.random() * 15)]);
    }
    return '#' + colorArr.join('');

}

const font_family = ["Noto Serif", 'cursive', 'math', "Bebas Neue", "Shrikhand", "Fredoka", 'Fruktur', "Coiny", "Rakkas", 'Yatra One']

function randomFontFamily() {
    let randomIndex = Math.floor(Math.random() * font_family.length)
    text.style.fontFamily = font_family[randomIndex];
}




function changes() {
    randomFontFamily()
    colorEachLetter()
    container.style.backgroundColor = coloring();
}

function colorEachLetter() {
    let textContent = text.textContent;
    text.innerHTML = '';

    for (let char of textContent) {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.color = coloring();
        text.appendChild(span)
        span.classList.add('fade-in')
    }
}
changes()
setInterval(() => {
    changes()
}, 3500)


//*************Day completed***********
