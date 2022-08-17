
function createLine(){
    const newLine = document.createElement("div");
    newLine.classList.add("line");
    document.getElementById("container").appendChild(newLine);
}

function createGrid(n){
    for (let index = 0; index < n; index++) {
        createLine();
    }
    const lines = document.getElementsByClassName("line");
    for (let i = 0; i < n; i++) {
        const line = lines[i];
        for (let j = 0; j < n; j++) {
            const newSquare = document.createElement("div");
            newSquare.classList.add("square");
            newSquare.addEventListener("mouseover", function ( event ) {
                newSquare.classList.add('hoverSquare')
            });
            line.appendChild(newSquare);
        };
    }

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

let amount = prompt("Please enter the number of lines:");
let text;
if (amount == null || amount == "") {
    text = "User cancelled the prompt.";
} 
else {
    createGrid(amount);
}
var button = document.getElementById('btn');
button.addEventListener('click', resetBoard);
