const video = document.querySelector(".video-container");
const spanOverlay = document.querySelector(".span-overlay");
const increasePlayRate = document.querySelector(".increase-play");
const decreasePlayRate = document.querySelector(".decrease-play");

video.defaultPlaybackRate = 0.5;
video.load();

function VideoControl() {
  if (!spanOverlay.classList.contains("slide")) {
    spanOverlay.classList.add("slide");
    video.pause();
  } else {
    spanOverlay.classList.remove("slide");
    video.play();
  }
}

spanOverlay.addEventListener("click", () => {
  VideoControl();
});

increasePlayRate.addEventListener("click", () => {
  video.playbackRate += 1;
  console.log(video.playbackRate);
});

decreasePlayRate.addEventListener("click", () => {
  if (video.playbackRate > 1) {
    video.playbackRate -= 1;
    console.log(video.playbackRate);
  }
});
