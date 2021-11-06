let video = document.getElementById('video');
video.onloadeddata = function () {
    if (video.duration - 7 > video.currentTime)
        video.currentTime = video.duration - 7
}
function playOrPause(button) {
    let i = document.createElement('i')
    if (video.paused) {
        video.play();
        i.className = 'fa fa-pause'
    }
    else {
        video.pause()
        i.className = 'fa fa-play'
    }
    button.removeChild(button.firstChild)
    button.appendChild(i)
}
function muteOrUnmute(button) {
    let i = document.createElement('i')
    video.muted = !video.muted;
    if (video.muted) {
        i.className = 'fas fa-volume-mute'
    }
    else {
        i.className = 'fa fa-volume-up'
    }
    button.removeChild(button.firstChild)
    button.appendChild(i)
}
if (Hls.isSupported()) {
    let videoContainers = document.getElementById('video-container')
    let buttonsContainer = document.getElementById('buttons-container')
    let userContainer = document.getElementById('user-container')

    videoContainers.addEventListener('mouseenter', function () {
        buttonsContainer.style.opacity = '1'
        userContainer.style.opacity = '1'

    })
    videoContainers.addEventListener('mouseleave', function () {
        buttonsContainer.style.opacity = '0'
        userContainer.style.opacity = '0'

    })
    let hls = new Hls();
    hls.loadSource('./hls/test/index.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
    });
}
else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'playlist.m3u8';
    video.addEventListener('canplay', function () {
        video.play();
    });
}
function goToEnd(element) {
    if (element.duration - 7 > element.currentTime)
        element.currentTime = element.duration - 7
}