import './style.css'

const Adiv : HTMLDivElement = document.querySelector('#A') as HTMLDivElement;
const Bdiv : HTMLDivElement = document.querySelector('#B') as HTMLDivElement;
const Cdiv : HTMLDivElement = document.querySelector('#C') as HTMLDivElement;
const Ddiv : HTMLDivElement = document.querySelector('#D') as HTMLDivElement;
const Ediv : HTMLDivElement = document.querySelector('#E') as HTMLDivElement;
const Fdiv : HTMLDivElement = document.querySelector('#F') as HTMLDivElement;
const Gdiv : HTMLDivElement = document.querySelector('#G') as HTMLDivElement;
const ASND: HTMLAudioElement = new Audio(new URL('./sounds/ukulele/A.mp3', import.meta.url).href);
const BSND: HTMLAudioElement = new Audio(new URL('./sounds/ukulele/B.mp3', import.meta.url).href);
const CSND: HTMLAudioElement = new Audio(new URL('./sounds/ukulele/C.mp3', import.meta.url).href);
const DSND: HTMLAudioElement = new Audio(new URL('./sounds/ukulele/D.mp3', import.meta.url).href);
const ESND: HTMLAudioElement = new Audio(new URL('./sounds/ukulele/E.mp3', import.meta.url).href);
const FSND: HTMLAudioElement = new Audio(new URL('./sounds/ukulele/F.mp3', import.meta.url).href);
const GSND: HTMLAudioElement = new Audio(new URL('./sounds/ukulele/G.mp3', import.meta.url).href);


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
            (document.querySelector('#A') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#A') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '2':
            BSND.currentTime = 0;
            BSND.play();
            (document.querySelector('#B') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#B') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '3':
            CSND.currentTime = 0;
            CSND.play();
            (document.querySelector('#C') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#C') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '4':
            DSND.currentTime = 0;
            DSND.play();
            (document.querySelector('#D') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#D') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '5':
            ESND.currentTime = 0;
            ESND.play();
            (document.querySelector('#E') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#E') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '6':
            FSND.currentTime = 0;
            FSND.play();
            (document.querySelector('#F') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#F') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '7':
            GSND.currentTime = 0;
            GSND.play();
            (document.querySelector('#G') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#G') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
    }
});
