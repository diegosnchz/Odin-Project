let container = document.querySelector(".container");


let nSize = () => {
  return prompt("De cuanto quieres el tablero (NxN)?");
 }

let createDivs = (n) => {
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${n}, 30px)`
  container.style.gridTemplateRows = `repeat(${n}, 30px)`;

  for (let i = 0; i < n* n; i++) {
    let squareDivs = document.createElement("div");
    squareDivs.style.border = "2px solid black";  //esto es para ponerle borde
    squareDivs.classList.add("divsRojo"); // Añadir la clase para el hover

    // Añadir el evento mouseover a cada div
    squareDivs.addEventListener("mouseover", () => {
      squareDivs.style.backgroundColor = "red"; // Cambiar color de fondo al pasar el ratón
    });

    container.appendChild(squareDivs);
  }
}

let n = nSize();
createDivs(n);
