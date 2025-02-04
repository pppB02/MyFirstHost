// Végigmegyünk minden videót tartalmazó konténeren
document.querySelectorAll(".video-container").forEach(container => {
    // A konténeren belül kiválasztjuk a videót és a gombot
    const video = container.querySelector("video");
    const playPauseBtn = container.querySelector(".playPauseBtn");

    console.log(video)
    console.log(playPauseBtn)
    console.log(container)
  
    // Videóra kattintva váltjuk a lejátszást/szünetet
    video.addEventListener("click", () => {
      togglePlayPause(video, playPauseBtn);
    });
  
    // Gombra kattintva is váltjuk a lejátszást/szünetet
    playPauseBtn.addEventListener("click", () => {
      togglePlayPause(video, playPauseBtn);
    });
  
    // Ha a videó elindul, elrejtjük a gombot
    video.addEventListener("play", () => {
      playPauseBtn.style.display = "none";
    });
  
    // Ha a videó megáll, megjelenítjük a gombot
    video.addEventListener("pause", () => {
      playPauseBtn.style.display = "block";
    });
  });
  
  // Általános függvény a lejátszás/szünet váltására
  function togglePlayPause(video, playPauseBtn) {
    if (video.paused) {
      video.play();
      playPauseBtn.style.display = "none";
    } else {
      video.pause();
      playPauseBtn.style.display = "block";
    }
  }
  