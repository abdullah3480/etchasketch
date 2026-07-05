

const body = document.querySelector("body")

const button = document.createElement("button")


const container = document.querySelector("div")
container.classList.add("container")

body.insertBefore(button,container)

button.textContent = "Press to enter No of rows"

let rows = 0;
button.addEventListener('click',createNewGrid)


let grid = [];

container.addEventListener('mouseenter',() =>{

    for(let i = rows; i < rows*rows; i++){
        grid[i].addEventListener('mouseover', ()=>{
            grid[i].style.backgroundColor = "blue"
            console.log("work2")
        })
    }
    
   console.log("works")
})


function createNewGrid(){
    
    for(let i = 0; i < rows; i++){
        grid[i].remove()
    }

    rows = Number(prompt())
    console.log(rows)
    
    console.log(typeof(rows))
    // if(rows > 100) rows = 100;

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
}


