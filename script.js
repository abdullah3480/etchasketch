
const container = document.querySelector("div")
container.classList.add("container")

let squares = [];
squares.length = 16*16 +16;
for(let i = 0; i < 16;i++){
    squares[i] = document.createElement("div")
    container.appendChild(squares[i])
    for(let j = 0 ; j < 16; j++){
        squares[i * 16 + j + 16] = document.createElement("div")
        squares[i].appendChild(squares[i * 16 + j + 16])
        squares[i *16 + j + 16].classList.add("box")
    }
    squares[i].classList.add("row")
    
}


