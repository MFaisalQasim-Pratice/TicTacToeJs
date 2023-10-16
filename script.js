const gameBoard = document.querySelector('#gameBoard');
const msjBox = document.querySelector('#msjBox');

const boardCells = [
    "", "", "", "", "", "", "", "", ""
]

msjBox.textContent = "First is circle's turn"
turn = 'circle'

function createBoard() {    
    boardCells.forEach((_square, element) => {
        const boardSquare = document.createElement('div');
        boardSquare.classList.add('boardSquare');
        boardSquare.id = element;
        addEventListener('click', onBoardClick);
        gameBoard.append(boardSquare);
    });
}
createBoard()

function onBoardClick(e) {
    const mark = document.createElement('div');
    mark.classList.add(turn);
    e.target.append(mark);
    turn = turn === "circle" ? "cross" : "circle";
    msjBox.textContent =  `Now is ${turn}'s turn`
    e.target.removeEventListener("click", onBoardClick);
}