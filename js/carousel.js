// About page; Carousel logic

const track = document.querySelector('.carousel-track');
if(track) {
    track.addEventListener('mousedown', () => {
        track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseup', () => {
        track.style.animationPlayState = 'running';
    });
}