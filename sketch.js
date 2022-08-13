function createSquare(){
    const newDiv = document.createElement("div");
    const currentDiv = document.getElementById("container");
    document.body.insertAfter(newDiv, currentDiv);
}

function createGrid(){
    for (let index = 0; index < 15; index++) {
        createSquare();
    }
}