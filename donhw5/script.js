const buttons = document.getElementsByClassName('xylo-button');
for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', soundButtonDidTap);
}

function soundButtonDidTap(event) {
    let button = event.currentTarget; // текущая кнопка, по которой кликнули
    let soundName = button.getAttribute('data-sound'); // имя звука из атрибута 'data-sound'
    const audio = new Audio(`Sounds/${soundName}.wav`); // путь к аудиофайлу
    audio.play();
}
