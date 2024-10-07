document.getElementById('rollButton').addEventListener('click', function() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    
    const diceFace = getDiceFace(diceRoll);

    const diceRoll2 = Math.floor(Math.random() * 6) + 1;
    
    const diceFace2 = getDiceFace(diceRoll2);
    document.getElementById('dice').innerText = diceFace + diceFace2;

    document.getElementById('result').innerText = `Resultado: ${diceRoll + diceRoll2}`;
});

function getDiceFace(value) {
    const faces = {
        1: '⚀',
        2: '⚁',
        3: '⚂',
        4: '⚃',
        5: '⚄',
        6: '⚅'
    };

    return faces[value];


}
const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton')

rollButton.addEventListener('click', () => {
    dice.classList.toggle('giro'); // Añade o quita la clase "giro" al hacer clic
});