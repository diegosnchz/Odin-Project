// your JavaScript file
const container = document.querySelector("#container");

//de momento todo esto se crea en memoria ** ESTO ES PARA CREAR **
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
//aqui metemos ya el div que hemos creado con su clase y su texto ya en el html
container.appendChild(content);
// ** ESTO ES PARA CREAR **

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I’m red!";
container.appendChild(para);

// an <h3> with blue text that says “I’m a blue h3!”
const acheTres = document.createElement("h3");
acheTres.style.color = "blue";
acheTres.textContent = "I’m a blue h3!";
container.appendChild(acheTres);

// a <div> with a black border and pink background color with the following elements inside of it:
const divNigg = document.createElement("div");
divNigg.style.border = "1px solid black";
divNigg.style.backgroundColor = "pink";

// another <h1> that says “I’m in a div”
const acheUno = document.createElement("h1");
acheUno.textContent = "I’m in a div";

// a <p> that says “ME TOO!”
const pUlt = document.createElement("p");
pUlt.textContent = "ME TOO!";

divNigg.appendChild(acheUno);
divNigg.appendChild(pUlt);

container.appendChild(divNigg);

//***********BÁSICAMENTE CON EL APPEND LO QUE SE HACE ES LIGAR LO QUE SE PONE ENTRE PARENTESIS AL QUE APARECE AL PRINCIPIO, HACIENDO ASÍ QUE NO SOLO PASE DE LA MEMORIA DEL DOOM AL HTML
// SINO QUE TAMBIEN SE VAYA CREANDO LOS NODOS. 
// 
// Recordar que se puede crear, modificar, eliminar los nodos. Además, cada coso que se crea se le puede añadir color, bg-color, etc. */