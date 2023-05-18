const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
const sounds = document.querySelectorAll(".sound-picker button");
const timeDisplay = document.querySelector(".time-display");
const outlineLength = outline.getTotalLength();
const timeSelect = document.querySelectorAll(".time-select button");
let duration = 600;

// middle outline change 
outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;
timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor(
  duration % 60
)}`;

sounds.forEach(sound => { //choosing different sounds
  sound.addEventListener("click", function () {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    checkPlaying(song);
  });
});

play.addEventListener("click", function () {
  checkPlaying(song);
});

replay.addEventListener("click", function () {
  restartSong(song);
});

const restartSong = song => { //restarting the sound
  let currentTime = song.currentTime;
  song.currentTime = 0;
}

timeSelect.forEach(option => {
  option.addEventListener("click", function () {
    duration = this.getAttribute("data-time"); //updating the initial duration of the sound
    timeDisplay.textContent = `${Math.floor(duration / 60)}:${Math.floor( //updating the timer (countdown)
      duration % 60
    )}`;
  });
});

// function to stop and play the sound & the video
const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "./svg/pause.svg";
  } else {
    song.pause();
    video.pause();
    play.src = "./svg/play.svg";
  }
};

// animating the circle 
song.ontimeupdate = function () {
  let currentTime = song.currentTime;
  let elapsed = duration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`; //remaining time (countdown)
  let progress = outlineLength - (currentTime / duration) * outlineLength;
  outline.style.strokeDashoffset = progress;

  if (currentTime >= duration) { //stop the sound after timer goes to 0   
    song.pause();
    song.currentTime = 0;
    play.src = "./svg/play.svg";
    video.pause();
  }
};