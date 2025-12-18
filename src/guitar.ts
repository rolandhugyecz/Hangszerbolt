import './style.css'

const ADiv : HTMLDivElement = document.querySelector('#Achord') as HTMLDivElement;
const EDiv : HTMLDivElement = document.querySelector('#Echord') as HTMLDivElement;
const DDiv : HTMLDivElement = document.querySelector('#Dchord') as HTMLDivElement;
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

DDiv.addEventListener('click', ()=>{
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
            (document.querySelector('#Achord') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#Achord') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '5':
            BSND.currentTime = 0;
            BSND.play();
            (document.querySelector('#Bchord') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#Bchord') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '6':
            CSND.currentTime = 0;
            CSND.play();
            (document.querySelector('#Cchord') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#Cchord') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '3':
            DSND.currentTime = 0;
            DSND.play();
            (document.querySelector('#Dchord') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#Dchord') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '2':
            ESND.currentTime = 0;
            ESND.play();
            (document.querySelector('#Echord') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#Echord') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '4':
            GSND.currentTime = 0;
            GSND.play();
            (document.querySelector('#Gchord') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#Gchord') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
    }
});
