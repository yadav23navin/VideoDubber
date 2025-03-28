document.addEventListener("DOMContentLoaded", function () {
    console.log("Editor Loaded");
    console.log("Video Editor UI Loaded");

    // Simulate play button functionality
    const playButton = document.querySelector(".play-btn");
    let isPlaying = false;

    if (playButton) {
        playButton.addEventListener("click", function () {
            isPlaying = !isPlaying;
            playButton.textContent = isPlaying ? "⏸" : "▶";
        });
    }

    // Simulate timeline movement
    const timeIndicator = document.querySelector(".time-indicator");
    let timeProgress = 20;

    if (timeIndicator) {
        setInterval(() => {
            if (isPlaying && timeProgress < 100) {
                timeProgress += 1;
                timeIndicator.style.left = `${timeProgress}%`;
            }
        }, 1000);
    }
});
