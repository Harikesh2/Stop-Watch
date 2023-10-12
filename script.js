const timmerdisplay = document.querySelector('.timmerDisplay');
const startbtn = document.getElementById('startbtn');
const stopbtn = document.getElementById('stopbtn');
const resetbtn = document.getElementById('resetbtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startbtn.addEventListener('click', function(){
     if(timerId !== null){
        clearInterval(timerId);
     }
    timerId = setInterval(starttimmer,10);
});

stopbtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function(){
    clearInterval(timerId);
    timmerdisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function starttimmer(){
    msec++;
    if(msec == 100){
        msec =0;
        secs++; 
        if(secs == min){
            secs = 0;
            mins++;
        }
    }

    let msecstring = msec < 10 ? `0${msec}` : msec;
    let secsstring = secs < 10 ? `0${secs}` : secs;
    let minsstring = mins < 10 ? `0${mins}` : mins;

    timmerdisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;
}