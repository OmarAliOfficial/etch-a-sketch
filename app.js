const grid = document.querySelector('.grid');
let message = document.querySelector('.warning');
const black = document.querySelector('.black');
const random = document.querySelector('.random');
const clear = document.querySelector('.clear');

document.addEventListener('DOMContentLoaded', () => {
    let size = prompt("Please enter your size between 1-100");
    if(size > 100 || size < 1){
        message.textContent = "Invalid size. Defaulting to 16x16";
        makeGrid(16);
    }
    else{
        message.textContent = "Play!";
        makeGrid(size);
    }
});

function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.className = "cell";
        grid.appendChild(div);
        div.style.backgroundColor = "white"

        black.addEventListener('click', () => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            });
        });

        random.addEventListener('click', () => {
            randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = `${randomColor}`;
            });
        });

        clear.addEventListener('click', () => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "white";
            });
        });
    }
}
