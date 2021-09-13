const playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (audio) {
        audio.load();
        audio.play();
        key.classList.add(`playing`);
    }
}
const removePlaying = (e) => {
        if (e.propertyName === 'transform') {
            e.target.classList.remove('playing');

        }
}
window.addEventListener("load", function () {
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => {
        key.addEventListener('transitionend',removePlaying)
    });

}, false);


window.addEventListener('keydown', playAudio);