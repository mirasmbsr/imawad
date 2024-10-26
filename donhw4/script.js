// Массив с путями к изображениям кубиков
const diceImages = [
    "image/img/dice1.png",
    "image/img/dice2.png",
    "image/img/dice3.png",
    "image/img/dice4.png",
    "image/img/dice5.png",
    "image/img/dice6.png"
];

// Получаем элементы со страницы
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rollButton = document.getElementById('rollButton');
const rollResult = document.getElementById('rollResult');

// Событие по клику на кнопку Roll
rollButton.addEventListener('click', function() {
    // Генерация случайных чисел для каждого кубика
    const dice1Roll = Math.floor(Math.random() * 6) + 1;
    const dice2Roll = Math.floor(Math.random() * 6) + 1;

    // Изменение src атрибута для отображения нового изображения кубиков
    dice1.src = diceImages[dice1Roll - 1];
    dice2.src = diceImages[dice2Roll - 1];

    // Отображение результата броска
    rollResult.textContent = `You rolled: ${dice1Roll} and ${dice2Roll}`;
});
