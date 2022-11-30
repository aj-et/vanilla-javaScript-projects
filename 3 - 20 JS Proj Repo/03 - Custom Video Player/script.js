const video = document.getElementById('video');
const play = document.getElementById('play');
const sstop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play 7 Pause Video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play/pause icon
function updatePlayIcon() {
    return true;
}

// Update progress & timestamp
function updateProgress() {
    return true;
}

// Set video time to progress
function setVideoProgress() {
    return true;
}

// stop the video
function stopVideo() {
    return true;
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

sstop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);