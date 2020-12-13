var drumPad: HTMLAudioElement [] = [
    new Audio("A.mp3"),
    new Audio("C.mp3"),
    new Audio("F.mp3"),
    new Audio("G.mp3"),
    new Audio("hihat.mp3"),
    new Audio("kick.mp3"),
    new Audio("laugh-1.mp3"),
    new Audio("laugh-2.mp3"),
    new Audio("snare.mp3")];

document.querySelector(".audio1").addEventListener("click", function(){
        playSample(drumPad[0]);
        recording(drumPad[0]);
    });
document.querySelector(".audio2").addEventListener("click", function(){
        playSample(drumPad[1]);
        recording(drumPad[1]);
    });
document.querySelector(".audio3").addEventListener("click", function(){
        playSample(drumPad[2]);
        recording(drumPad[2]);
    });
document.querySelector(".audio4").addEventListener("click", function(){
        playSample(drumPad[3]);
        recording(drumPad[3]);
    });
document.querySelector(".audio5").addEventListener("click", function(){
        playSample(drumPad[4]);
        recording(drumPad[4]);
    });
document.querySelector(".audio6").addEventListener("click", function(){
        playSample(drumPad[5]);
        recording(drumPad[5]);
    });
document.querySelector(".audio7").addEventListener("click", function(){
        playSample(drumPad[6]);
        recording(drumPad[6]);
    });
document.querySelector(".audio8").addEventListener("click", function(){
        playSample(drumPad[7]);
        recording(drumPad[7]);
    });
document.querySelector(".audio9").addEventListener("click", function(){
        playSample(drumPad[8]);
        recording(drumPad[8]);
    });

//Drumpad

function playSample(audio: HTMLAudioElement) {
    audio.play();
}

//Mic & Trash Button
let trashIcon: HTMLElement = document.getElementById("trash")
let recordIcon: HTMLElement = document.getElementById("mic")

let beat: HTMLAudioElement [] = [];
let abfrage: boolean;

recordIcon.addEventListener("click", () => {
    if (recordIcon.classList.contains("active")) {
        recordIcon.classList.remove("active");
        abfrage = false;
    }
    else {
        recordIcon.classList.add("active");
        abfrage = true;
    }
    recording;
});

trashIcon.addEventListener("click", () => {
    deleting();
});

//Play & Pause Button
let playIcon: HTMLElement = document.getElementById("play")
let stopIcon: HTMLElement = document.getElementById("stop")

let myInterval;    
let i;

playIcon.addEventListener("click", () => {
    Schleife(true);
    playIcon.classList.add("inactive");
    stopIcon.classList.remove("inactive");
});

stopIcon.addEventListener("click", () => {
    Schleife(false);
    stopIcon.classList.add("inactive");
    playIcon.classList.remove("inactive");
});

//Funktion Play
function Schleife (b: boolean) {

    if (b == true) {
        
        myInterval = setInterval(() => {        
            
            if (i < beat.length) {
                playSample(beat[i]);
                i++;
            }
            
            else {
                i = 0;
            }
        },500 );
    }
    
    else {
        clearInterval(myInterval);
    }
}

//recording & delet
function recording (i: HTMLAudioElement)  {
    console.log(abfrage);
    if (abfrage == true) {
        beat.push(i);
        console.log(beat.length);
    }
}

function deleting () {
    beat.splice(0, beat.length);
    console.log(beat.length);
}