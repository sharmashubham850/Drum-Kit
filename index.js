const buttons = document.querySelectorAll('button')

for (let btn of buttons) {
    btn.addEventListener('click', function () {
        const btnText = this.innerText;
        playSound(btnText);

        buttonAnimation(btnText);
    });

}

document.addEventListener('keypress', function (e) {
    playSound(e.key);
    buttonAnimation(e.key);
});


function playSound(key) {
    const sound = new Audio();
    sound.src = 'sounds/'

    if (key === 'w') sound.src += 'crash.mp3';
    else if (key === 'a') sound.src += 'kick-bass.mp3';
    else if (key === 's') sound.src += 'snare.mp3';
    else if (key === 'd') sound.src += 'tom-1.mp3';
    else if (key === 'j') sound.src += 'tom-2.mp3';
    else if (key === 'k') sound.src += 'tom-3.mp3';
    else if (key === 'l') sound.src += 'tom-4.mp3';

    sound.play();

}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector('.' + currentKey);

    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}
