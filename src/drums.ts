import './style.css'

const CCdiv : HTMLDivElement = document.querySelector('#CC') as HTMLDivElement;
const RCdiv : HTMLDivElement = document.querySelector('#RC') as HTMLDivElement;
const MTdiv : HTMLDivElement = document.querySelector('#MT') as HTMLDivElement;
const SDdiv : HTMLDivElement = document.querySelector('#SD') as HTMLDivElement;
const FTdiv : HTMLDivElement = document.querySelector('#FT') as HTMLDivElement;
const BDdiv : HTMLDivElement = document.querySelector('#BD') as HTMLDivElement;
const HHdiv : HTMLDivElement = document.querySelector('#HH') as HTMLDivElement;
const CCSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/CC.mp3', import.meta.url).href);
const RCSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/RC.mp3', import.meta.url).href);
const MTSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/MT.mp3', import.meta.url).href);
const SDSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/SD.mp3', import.meta.url).href);
const FTSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/FT.mp3', import.meta.url).href);
const BDSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/BD.mp3', import.meta.url).href);
const HHSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/HH.mp3', import.meta.url).href);


CCdiv.addEventListener('click', ()=>{
    CCSND.currentTime = 0;
    CCSND.play();
})

RCdiv.addEventListener('click', ()=>{
    RCSND.currentTime = 0;
    RCSND.play();
})

MTdiv.addEventListener('click', ()=>{
    MTSND.currentTime = 0;
    MTSND.play();
})

SDdiv.addEventListener('click', ()=>{
    SDSND.currentTime = 0;
    SDSND.play();
})

FTdiv.addEventListener('click', ()=>{
    FTSND.currentTime = 0;
    FTSND.play();
})

BDdiv.addEventListener('click', ()=>{
    BDSND.currentTime = 0;
    BDSND.play();
})

HHdiv.addEventListener('click', ()=>{
    HHSND.currentTime = 0;
    HHSND.play();
})

document.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    switch (event.key) {
        case '1':
            CCSND.currentTime = 0;
            CCSND.play();
            (document.querySelector('#CC') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#CC') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '2':
            RCSND.currentTime = 0;
            RCSND.play();
            (document.querySelector('#RC') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#RC') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '3':
            MTSND.currentTime = 0;
            MTSND.play();
            (document.querySelector('#MT') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#MT') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '4':
            SDSND.currentTime = 0;
            SDSND.play();
            (document.querySelector('#SD') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#SD') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '5':
            FTSND.currentTime = 0;
            FTSND.play();
            (document.querySelector('#FT') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#FT') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '6':
            BDSND.currentTime = 0;
            BDSND.play();
            (document.querySelector('#BD') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#BD') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
        case '7':
            HHSND.currentTime = 0;
            HHSND.play();
            (document.querySelector('#HH') as HTMLDivElement).classList.add('kerethvr');
            setTimeout(() => {
                (document.querySelector('#HH') as HTMLDivElement).classList.remove('kerethvr');
            }, 300);
            break;
    }
});
