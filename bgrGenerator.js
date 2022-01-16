let hexNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hexBtn = document.querySelector('.btn-change-color');
let bodyBcq = document.querySelector('body');
let hexColor = document.querySelector('.color-code');

hexBtn.addEventListener('click', generateColor);

function generateColor () {
    let hexInitial = '#';

    for (let i = 0; i < 6; i++) {
        let element = Math.floor(Math.random() * hexNumbers.length);
        let currentHex = hexNumbers[element];

        hexInitial += currentHex;
        console.log(hexInitial)
    }

    hexColor.innerHTML = hexInitial;
    bodyBcq.style.backgroundColor = hexInitial;
};