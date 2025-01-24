let data = {
  num1 : '',
  operator : null,
  num2 : '',
} 
//FUNCIONES OPERACIONES
const add = (num1, num2) => {
  return num1 + num2;
}

const substract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  return num1/num2;
}

const operate = (operator, num1, num2) => {
  if (operator === 'add') {
    return add(num1, num2);
  } else if (operator === 'substract') {
    return substract(num1,num2);
  } else if (operator === 'multiply') {
    return multiply(num1, num2);
  } else if (operator === 'divide'){
    return divide(num1, num2);
  }
}

document.querySelector('#clear').addEventListener("click", () => {
  data.num1 = '';
  data.num2 = '';
  data.operator = null;
  updateDisplay('0');
})


//mostrar contenido en pantalla

const updateDisplay = (num) => {
  let display = document.querySelector("#display");
  display.textContent = num;
}

const handleNumberClick = (num) => {
  if (data.operator === null) {
    data.num1 = data.num1.toString() + num; //string pa concatenar el numero
    updateDisplay(data.num1);
  } else {
    data.num2 = data.num2.toString() + num;
    updateDisplay(data.num2);
  }
}


//dom para el display
document.querySelector("#one").addEventListener('click', () => handleNumberClick('1'));
document.querySelector("#two").addEventListener('click', () => handleNumberClick('2'));
document.querySelector("#three").addEventListener('click', () => handleNumberClick('3'));
document.querySelector("#four").addEventListener('click', () => handleNumberClick('4'));
document.querySelector("#five").addEventListener('click', () => handleNumberClick('5'));
document.querySelector("#six").addEventListener('click', () => handleNumberClick('6'));
document.querySelector("#seven").addEventListener('click', () => handleNumberClick('7'));
document.querySelector("#eight").addEventListener('click', () => handleNumberClick('8'));
document.querySelector("#nine").addEventListener('click', () => handleNumberClick('9'));
document.querySelector("#zero").addEventListener('click', () => handleNumberClick('0'));

// teclas operadores
document.querySelector("#divide").addEventListener('click', () => {
  data.operator = 'divide';
});
document.querySelector("#multiply").addEventListener('click', () => {
  data.operator = 'multiply';
});
document.querySelector("#add").addEventListener('click', () => {
  data.operator = 'add';
});
document.querySelector("#subtract").addEventListener('click', () => {
  data.operator = 'substract';
});


//revisar si está bien esto..
document.querySelector("#equals").addEventListener("click", () => {
  const result = operate(data.operator, parseInt(data.num1), parseInt(data.num2));
  updateDisplay(result);
  data.num1 = result;
  data.num2 = '';
  data.operator = null;
});