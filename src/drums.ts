import './style.css'

const CCdiv : HTMLDivElement = document.querySelector('#CC') as HTMLDivElement;
const RCdiv : HTMLDivElement = document.querySelector('#RC') as HTMLDivElement;
const MTdiv : HTMLDivElement = document.querySelector('#MT') as HTMLDivElement;
const SDdiv : HTMLDivElement = document.querySelector('#SD') as HTMLDivElement;
const FTdiv : HTMLDivElement = document.querySelector('#FT') as HTMLDivElement;
const BDdiv : HTMLDivElement = document.querySelector('#BD') as HTMLDivElement;
const HHdiv : HTMLDivElement = document.querySelector('#HH') as HTMLDivElement;
const CCSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/CC.m4a', import.meta.url).href);
const RCSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/RC.m4a', import.meta.url).href);
const MTSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/MT.m4a', import.meta.url).href);
const SDSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/SD.m4a', import.meta.url).href);
const FTSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/FT.m4a', import.meta.url).href);
const BDSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/BD.m4a', import.meta.url).href);
const HHSND: HTMLAudioElement = new Audio(new URL('./sounds/drums/HH.m4a', import.meta.url).href);


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
            break;
        case '2':
            RCSND.currentTime = 0;
            RCSND.play();
            break;
        case '3':
            MTSND.currentTime = 0;
            MTSND.play();
            break;
        case '4':
            SDSND.currentTime = 0;
            SDSND.play();
            break;
        case '5':
            FTSND.currentTime = 0;
            FTSND.play();
            break;
        case '6':
            BDSND.currentTime = 0;
            BDSND.play();
            break;
        case '7':
            HHSND.currentTime = 0;
            HHSND.play();
            break;
    }
});
