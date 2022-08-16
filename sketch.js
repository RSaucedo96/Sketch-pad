function createSquare(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    document.getElementById('container').appendChild(newDiv);
    newDiv.addEventListener("mouseover", function ( event ) {
        newDiv.classList.add('hoverSquare')});
    //newDiv.addEventListener("mouseout" , function( event ) {
    //   newDiv.classList.remove('hoverSquare')}); this 2 lines make only highlites the one the mouse is over
}

function createGrid(){
    for (let index = 0; index < 255; index++) {
        createSquare();
    }
}

createGrid();
