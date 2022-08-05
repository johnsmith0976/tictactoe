let Gameboard = ( function() {
    let game = {
        p1turn: true,
        p1state: [],
        p2state: [],
        winstates: [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6'],
        ]
    }
let cells = document.querySelectorAll('.cell');
let playerone = document.querySelector('#p1name');
let playertwo = document.querySelector('#p2name');
let stats = document.querySelector('#status');
let winner = document.querySelector('#winner');
let start = document.querySelector('#start');

    document.addEventListener('click', event => {
const target = event.target;
const square = target.classList.contains('cell');
const disabled = target.classList.contains('disabled');

if (square && !disabled) {
const squarevalue = target.dataset.value;

if (game.p1turn === true) {
    game.p1state.push(squarevalue)
}
else {
game.p2state.push(squarevalue)
 }


target.classList.add('disabled');
target.classList.add(game.p1turn ? 'x' : 'o');
game.p1turn = !game.p1turn;


if (!document.querySelectorAll('.cell:not(.disabled)').length) {
    document.querySelector('#status').style.display === 'block';
winner.textContent = 'Draw!';
}

game.winstates.forEach(winstate => {
const p1win = winstate.every(state => game.p1state.includes(state));
const p2win = winstate.every(state => game.p2state.includes(state));
 if (p1win || p2win) {
cells.forEach(cell => cell.classList.add('disabled'))
document.querySelector('#status').style.display === 'block';

winner.textContent = p1win ? `${playerone.value} has won!` : `${playertwo.value} has won!`;
 }
}) 
// end of if statement
}

//end of event listener
})

start.addEventListener('click', () => {
    document.querySelector('#status').style.display === 'none';
cells.forEach(cell => {
cell.classList.remove('disabled', 'x', 'o')
});
game.p1turn = true;
game.p1state = [];
game.p2state= [];
winner.textContent = ""
})
// end of iife function
})()




