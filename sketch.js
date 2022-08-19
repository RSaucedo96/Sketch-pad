const cleanScreen=document.getElementById('cleanbtn')
cleanScreen.addEventListener('click', resetBoard);
let amount = prompt("Please enter the number of lines:");
let text;
var clicked = false;
if (amount == null || amount == "") {
    text = "User cancelled the prompt.";
} 
else {
    createGrid(amount);
}

function createGrid(){
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
    document.getElementById("container").appendChild(newLine);
}

function resetBoard(){
    let qtty = prompt("Please enter the number of lines:");
    let text;
    if (qtty == null || qtty == "") {
        text = "User cancelled the prompt.";
    } 
    else {
        var myDiv = document.getElementById("container");
        myDiv.innerHTML = ""
        createGrid(qtty);
    } 
}

function eraser() {
    var eraserToggle = document.getElementById("eraserToggle");
    const eraserTool = document.getElementsByClassName("square");
    if (eraserToggle.value == "Erase") {
        eraserToggle.value="Write";
        for (let i = 0; i < amount; i++) {
            eraserTool[i].addEventListener("mouseover", function ( event ) {
                eraserTool[i].classList.remove('hoverSquare')});   
            }
    }
    else if (eraserToggle.value == "Write") {
        eraserToggle.value="Erase";
        for (let j = 0; j < amount; j++) {
            eraserTool[j].addEventListener("mouseover", function ( event ) {
                eraserTool[j].classList.add('hoverSquare')});   
            }
        }
}





