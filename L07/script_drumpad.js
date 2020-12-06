var drumPad = [
    new Audio("A.mp3"),
    new Audio("C.mp3"),
    new Audio("F.mp3"),
    new Audio("G.mp3"),
    new Audio("hihat.mp3"),
    new Audio("kick.mp3"),
    new Audio("laugh-1.mp3"),
    new Audio("laugh-2.mp3"),
    new Audio("snare.mp3")
];
document.querySelector(".audio1").addEventListener("click", function () {
    playSample(drumPad[0]);
});
document.querySelector(".audio2").addEventListener("click", function () {
    playSample(drumPad[1]);
});
document.querySelector(".audio3").addEventListener("click", function () {
    playSample(drumPad[2]);
});
document.querySelector(".audio4").addEventListener("click", function () {
    playSample(drumPad[3]);
});
document.querySelector(".audio5").addEventListener("click", function () {
    playSample(drumPad[4]);
});
document.querySelector(".audio6").addEventListener("click", function () {
    playSample(drumPad[5]);
});
document.querySelector(".audio7").addEventListener("click", function () {
    playSample(drumPad[6]);
});
document.querySelector(".audio8").addEventListener("click", function () {
    playSample(drumPad[7]);
});
document.querySelector(".audio9").addEventListener("click", function () {
    playSample(drumPad[8]);
});
//Drumpad
function playSample(audio) {
    audio.play();
}
//Playbutton
document.querySelector(".button").addEventListener("click", function () {
    Sample();
});
function Sample() {
    var melodie = [0, 1, 2, 3, 0, 4, 5, 8, 7];
    var x = 0;
    setInterval(function () {
        playSample(drumPad[melodie[x]]);
        x++;
    }, 500);
}
//# sourceMappingURL=script_drumpad.js.map