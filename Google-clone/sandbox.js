// Google Search
let input = document.querySelector('.input');
const searchBtn = document.getElementById('search');

const search = () => {
   let result = window.open('https://google.com/search?q=' + input.value); 
}

input.addEventListener('change', () => {
    input.textContent = input.value;
});

searchBtn.addEventListener('click', () => {
    search();
});

// I'm Feeling Lucky
const luckyBtn = document.querySelector('#lucky-btn');
const luckySpan = document.querySelector('#lucky');

// I'm Feeling Lucky Links
const imFeeling = [
`<a href="https://www.google.com/search?q=animal+sounds&csf=b&ct=ifl&cad=2:curious&ei=WVhZY9i6HZOKwbkPuJu38Ao&ved=0ahUKEwiYy-3ioP76AhUTRTABHbjNDa4QnRsIEg&rct=j" target="_blank">I'm Feeling Curious</a>`,
`<a href="https://www.google.com/search?q=bat+signal&csf=b&ct=ifl&cad=2:adventurous&ei=clhZY-zmEIekwbkP_patqAE&ved=0ahUKEwjs59buoP76AhUHUjABHX5LCxUQnRsIEg&rct=j" target="_blank">I'm Feeling Adventurous</a>`, 
`<a href="https://www.google.com/search?q=comedy+movies&csf=b&ct=ifl&cad=2:funny&ei=hVhZY7bRCqSPwbkPm6GMgAk&ved=0ahUKEwj2p9j3oP76AhWkRzABHZsQA5AQnRsIEg&rct=j" target="_blank">I'm Feeling Funny</a>`, 
`<a href="https://www.google.com/search?q=pizza+near+me&ct=ifl&cad=2:hungry&ei=mlhZY7D-NJaLwbkPxvi7oAw&ved=0ahUKEwiws4SCof76AhWWRTABHUb8DsQQnRsIEg&rct=j" target="_blank">I'm Feeling Hungry</a>`,
`<a href="https://artsandculture.google.com/partner/the-frick-collection" target="_blank">I'm Feeling Artistic</a>`
];

// shuffle function
const imFeelingShuffle = () => {
    luckyBtn.innerHTML="";
    luckyBtn.classList.add('luckyAnimate');

    // array randomizer
    let randomElement = imFeeling[Math.floor(Math.random() * imFeeling.length)];

    setTimeout(() => {
        luckyBtn.classList.remove('luckyAnimate');
        luckyBtn.innerHTML = `${randomElement}`;
    }, 500);
};

// Event Listeners
luckyBtn.addEventListener('mouseenter', () => {
    imFeelingShuffle();
});

luckyBtn.addEventListener('mouseleave', () => {
    luckyBtn.classList.remove('luckyAnimate');
    luckyBtn.innerText = "I'm Feeling Lucky";
});

// Apps icon window
const appsIcon = document.querySelector('.apps-icon');
const apps = document.querySelector('#apps');

appsIcon.addEventListener('click', () => {

    if(apps.style.display === 'none') {
        apps.style.display = 'block';
    } else {
        apps.style.display = 'none';
    }
});

