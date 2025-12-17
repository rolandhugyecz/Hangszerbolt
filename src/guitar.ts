import './style.css'

const ADiv : HTMLDivElement = document.querySelector('#Achord') as HTMLDivElement;
const EDiv : HTMLDivElement = document.querySelector('#Echord') as HTMLDivElement;
const Ddiv : HTMLDivElement = document.querySelector('#Dchord') as HTMLDivElement;
const GDiv : HTMLDivElement = document.querySelector('#Gchord') as HTMLDivElement;
const BDiv : HTMLDivElement = document.querySelector('#Bchord') as HTMLDivElement;
const CDiv : HTMLDivElement = document.querySelector('#Cchord') as HTMLDivElement;
const ASND: HTMLAudioElement = new Audio(new URL('./sounds/guitar/A.m4a', import.meta.url).href);
const BSND: HTMLAudioElement = new Audio(new URL('./sounds/guitar/B.m4a', import.meta.url).href);
const CSND: HTMLAudioElement = new Audio(new URL('./sounds/guitar/C.m4a', import.meta.url).href);
const DSND: HTMLAudioElement = new Audio(new URL('./sounds/guitar/D.m4a', import.meta.url).href);
const ESND: HTMLAudioElement = new Audio(new URL('./sounds/guitar/E.m4a', import.meta.url).href);
const GSND: HTMLAudioElement = new Audio(new URL('./sounds/guitar/G.m4a', import.meta.url).href);

ADiv.addEventListener('click', ()=>{
    ASND.currentTime = 0;
    ASND.play();
})

BDiv.addEventListener('click', ()=>{
    BSND.currentTime = 0;
    BSND.play();
})

CDiv.addEventListener('click', ()=>{
    CSND.currentTime = 0;
    CSND.play();
})

Ddiv.addEventListener('click', ()=>{
    DSND.currentTime = 0;
    DSND.play();
})

EDiv.addEventListener('click', ()=>{
    ESND.currentTime = 0;
    ESND.play();
})

GDiv.addEventListener('click', ()=>{
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
            GSND.currentTime = 0;
            GSND.play();
            break;
    }
});
