function getComputerChoice() {
  //le asignamos a una variable el mathrandom asi te dejas de lios
  const randomValue = Math.random();
  if (randomValue >= 0 && randomValue < 0.3) {
    return "rock";
  } else if (randomValue >= 0.3 && randomValue < 0.6) {
    return "scissors";
  } else {
    return "paper";
  }
}
//toLowerCase al ser un método tiene que ir siempre con los paréntesis y LO MISMO CON LAS FUNCIONES DIEGO POR DIOS...
function getHumanChoice(choice){
  if (choice.toLowerCase() === "rock" && getComputerChoice() === "scissors"){
    console.log("YEY YOU WON!!");
  } else if (choice.toLowerCase() === "paper" && getComputerChoice() === "rock"){
    console.log("YEY YOU WON");
  } else if (choice.toLowerCase() === "scissors" && getComputerChoice() === "paper"){
    console.log("YEY YOU WON");
  } else {
    console.log("you lost bud, get gud");
  }
}

let choice = prompt("Choose wisely: Rock || Paper || Scissors");
getHumanChoice(choice);