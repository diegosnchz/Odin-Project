// The goal for this exercise is to create a calculator that does the following:
// add, subtract, get the sum, multiply, get the power, and find the factorial

const calcuDiv = document.querySelector("#calculatorDiv");
const numberCalc = document.querySelectorAll(".numberCalc");
const operationSelect = document.querySelectorAll(".numberOp");
const valueNumber = document.querySelectorAll("#value");

calcuDiv.appendChild(numberCalc);
calcuDiv.appendChild(numberOp);

let data = {
  num1: 0,
  isNum2: false,
  num2: 0,
  operator: null
};

const primerNum = () => {
  let sumNum1 =0;
  numberCalc.addEventListener ("onclick", () => {
    
  })  
}

switch(data.operator) {
  case '+':
    data.result = data.num1 + data.num2;
    break;
  case '-':
    data.result = data.num1 - data.num2;
    break;
  case '*':
    data.result = data.num1 * data.num2;
    break;
  case '/':
    if (data.num2 !== 0) {
      data.result = data.num1 / data.num2;
    } else {
      data.result = 'Error';
    }
    break;
  default:
    data.result = 'Operación no válida';
}


