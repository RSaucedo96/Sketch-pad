function createSquare(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    document.getElementById('container').appendChild(newDiv);  
}

function createGrid(){
    for (let index = 0; index < 255; index++) {
        createSquare();
    }
}

createGrid();