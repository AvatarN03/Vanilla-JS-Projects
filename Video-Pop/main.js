const Btn = document.querySelector('.btn');
const trailerVideo = document.querySelector('.trailer-container ');
const close = document.querySelector('i');
const videoEle = document.querySelector('video')


Btn.addEventListener('click', () => {
    trailerVideo.classList.remove('active')
    videoEle.play();
});

close.addEventListener('click', () => {
    trailerVideo.classList.add('active')
    videoEle.pause();
    videoEle.currentTime = 0;
});