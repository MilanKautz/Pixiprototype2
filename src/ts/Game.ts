
import backgroundSong from "url:../sound/song.mp3";

let menuSong = new Audio(backgroundSong);


menuSong.volume = 0.4;


let body = document.body;


let audioMute = document.createElement('div');
audioMute.classList.add("audio");
body.appendChild(audioMute);

let buttonClick = 0

menuSong.play();
let audioclick = 0

//Corné
audioMute.addEventListener('click', function () {
    if (audioclick >= 1) {
        menuSong.play();
        menuSong.loop= true;

        audioclick--
        audioMute.classList.remove("audiomute");

    } else {
        menuSong.pause();
        audioclick++
        audioMute.classList.add("audiomute");
    }
})








