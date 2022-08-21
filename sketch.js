const DEFAULT_BOARD_SIZE = 16;
var currentBoardSize=DEFAULT_BOARD_SIZE;
const cleanScreen = document.getElementById('cleanbtn');
const eraserToggle = document.getElementById('eraserbtn');
const board = document.getElementById('container');
const squares = document.getElementsByClassName('squares');
cleanScreen.addEventListener('click', resetBoard);
eraserToggle.addEventListener('click', eraser);
createGrid(DEFAULT_BOARD_SIZE);

function createGrid(amount){
    for (let index = 0; index < amount; index++) {
        createLine();
    }
    const lines = document.getElementsByClassName("line");
    for (let i = 0; i < amount; i++) {
        const line = lines[i];
        for (let j = 0; j < amount; j++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newSquare.addEventListener("mouseover", function ( Write ) {
                newSquare.classList.add('hoverSquare')
            });
            line.appendChild(newSquare);
        };
    }

}

function createLine(){
    const newLine = document.createElement("div");
    newLine.classList.add("line");
    board.appendChild(newLine);
}

function resetBoard(){
    currentBoardSize = prompt("Please enter the number of lines:");
    let text;
    if (currentBoardSize == null || currentBoardSize == "") {
        text = "User cancelled the prompt.";
    } 
    else {
        board.innerHTML = "";
        createGrid(currentBoardSize);
    } 
}

function eraser(currentBoardSize) {
    if (eraserToggle.classList.contains("off")){
        eraserToggle.classList.remove("off");
        eraserToggle.classList.add("on");
        document.querySelectorAll('.square').forEach(item => {
            item.addEventListener('mouseover', event => {
                item.classList.remove('hoverSquare');
            })
        })
    }
    else if (eraserToggle.classList.contains("on")){
        eraserToggle.classList.remove("on");
        eraserToggle.classList.add("off");
        document.querySelectorAll('.square').forEach(item => {
            item.addEventListener('mouseover', event => {
                item.classList.add('hoverSquare');
            })
        })
    }
}







