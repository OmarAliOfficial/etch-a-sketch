const container = document.querySelector('.grid');
function makeGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    console.log("Hi!")
}

makeGrid(20);