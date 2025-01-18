//crear divs aquí
let container = document.querySelector(".container");

let createDivs = () => {
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(16, 30px)";
  container.style.gridTemplateRows = "repeat(16, 30px)";
  
  for (let i = 0; i < 256; i++){
    let squareDivs = document.createElement("div");
    squareDivs.style.border = "1px solid black"; //borde pa que se vea
    container.appendChild(squareDivs);
  }
}

container.addEventListener("mouseover", (e) => {
  squareDivs.style.color = "red";
})

createDivs();