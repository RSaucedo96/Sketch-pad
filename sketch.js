function createSquare(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("square");
    document.getElementById('container').appendChild(newDiv);
    newDiv.addEventListener("mouseover", function ( event ) {
        newDiv.classList.add('hoverSquare')});
    //newDiv.addEventListener("mouseout" , function( event ) {
    //   newDiv.classList.remove('hoverSquare')}); this 2 lines make only highlites the one the mouse is over
}

function createGrid(n){
    for (let index = 0; index < n; index++) {
        createSquare();
    }
}

function resetBoard(){
    const resetButton= document.getElementsByName("button");
    resetButton.addEventListener("onclick", function (event) {
        let qtty = prompt("Please enter the number of lines:");
        let text;
        if (qtty == null || qtty == "") {
          text = "User cancelled the prompt.";
        } 
        else {
          createGrid(n);
        } 
    })
}

let amount = prompt("Please enter the number of lines:");
let text;
if (amount == null || amount == "") {
    text = "User cancelled the prompt.";
} 
else {
    realamount=amount * amount;
    createGrid(realamount);
}
