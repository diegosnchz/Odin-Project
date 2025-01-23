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
  if (data.operator === 'add') {
    return num1 + num2;
  } else if (data.operator === 'substract') {
    return num1 - num2;
  } else if (data.operator === 'multiply') {
    return num1 * num2;
  } else {
    return num1/num2;
  }
}

//mostrar contenido en pantalla

const updateDisplay = (num) => {
  let display = document.querySelector("#display");
  display.textContent = num;
}

const handleNumberClick = (num) => {
  if (data.operator === null) {
    data.num1 = parseFloat(data.num1 + num);
    updateDisplay(data.num1);
  } else {
    data.num2 = parseFloat(data.num2 + num);
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
  data.operator = '/';
});
document.querySelector("#multiply").addEventListener('click', () => {
  data.operator = '*';
});
document.querySelector("#add").addEventListener('click', () => {
  data.operator = '+';
});
document.querySelector("#subtract").addEventListener('click', () => {
  data.operator = '-';
});


//revisar si está bien esto..
document.querySelector("#equals").addEventListener("click", (num1, num2) => {
  equals.textContent = operate(num1, num2);
})