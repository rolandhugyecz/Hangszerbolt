import './style.css'

const Adiv : HTMLDivElement = document.querySelector('#A') as HTMLDivElement;
const Bdiv : HTMLDivElement = document.querySelector('#B') as HTMLDivElement;
const Cdiv : HTMLDivElement = document.querySelector('#C') as HTMLDivElement;
const Ddiv : HTMLDivElement = document.querySelector('#D') as HTMLDivElement;
const Ediv : HTMLDivElement = document.querySelector('#E') as HTMLDivElement;
const Fdiv : HTMLDivElement = document.querySelector('#F') as HTMLDivElement;
const Gdiv : HTMLDivElement = document.querySelector('#G') as HTMLDivElement;
const ASND: HTMLAudioElement = new Audio(new URL('./sounds/bass/A.m4a', import.meta.url).href);
const BSND: HTMLAudioElement = new Audio(new URL('./sounds/bass/B.m4a', import.meta.url).href);
const CSND: HTMLAudioElement = new Audio(new URL('./sounds/bass/C.m4a', import.meta.url).href);
const DSND: HTMLAudioElement = new Audio(new URL('./sounds/bass/D.m4a', import.meta.url).href);
const ESND: HTMLAudioElement = new Audio(new URL('./sounds/bass/E.m4a', import.meta.url).href);
const FSND: HTMLAudioElement = new Audio(new URL('./sounds/bass/F.m4a', import.meta.url).href);
const GSND: HTMLAudioElement = new Audio(new URL('./sounds/bass/G.m4a', import.meta.url).href);


Adiv.addEventListener('click', ()=>{
    ASND.currentTime = 0;
    ASND.play();
})

Bdiv.addEventListener('click', ()=>{
    BSND.currentTime = 0;
    BSND.play();
})

Cdiv.addEventListener('click', ()=>{
    CSND.currentTime = 0;
    CSND.play();
})

Ddiv.addEventListener('click', ()=>{
    DSND.currentTime = 0;
    DSND.play();
})

Ediv.addEventListener('click', ()=>{
    ESND.currentTime = 0;
    ESND.play();
})

Fdiv.addEventListener('click', ()=>{
    FSND.currentTime = 0;
    FSND.play();
})


Gdiv.addEventListener('click', ()=>{
    GSND.currentTime = 0;
    GSND.play();
})

document.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    switch (event.key) {
        case '1':
            ASND.currentTime = 0;
            ASND.play();
            break;
        case '2':
            BSND.currentTime = 0;
            BSND.play();
            break;
        case '3':
            CSND.currentTime = 0;
            CSND.play();
            break;
        case '4':
            DSND.currentTime = 0;
            DSND.play();
            break;
        case '5':
            ESND.currentTime = 0;
            ESND.play();
            break;
        case '6':
            FSND.currentTime = 0;
            FSND.play();
            break;
        case '7':
            GSND.currentTime = 0;
            GSND.play();
            break;
    }
});
