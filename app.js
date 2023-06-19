const grid = document.querySelector('.grid');


function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.className = "cell";
        div.style.border = "1px solid black";
        grid.appendChild(div);
    }
}



makeGrid(20);