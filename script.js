

const body = document.querySelector("body")

const button = document.createElement("button")


const container = document.querySelector("div")
container.classList.add("container")

body.insertBefore(button,container)

button.textContent = "Press to enter No of rows"

let rows = 0;
button.addEventListener('click', ()=>{
    rows = prompt()
    grid.length = rows*rows +rows;
for(let i = 0; i < rows;i++){
    grid[i] = document.createElement("div")
    container.appendChild(grid[i])
    for(let j = 0 ; j < rows; j++){
        grid[i * rows + j + rows] = document.createElement("div")
        grid[i].appendChild(grid[i * rows + j + rows])
        grid[i *rows + j + rows].classList.add("box")
    }
    grid[i].classList.add("row")
    
}
})

let grid = [];




