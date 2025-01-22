let data = {
  firstNum : 0,
  operator : null,
  secondNum : 0,
  equals : 0
} 
//DOM   

//teclas numeros
document.querySelector("#one").addEventListener('click', () => {
  data.firstNum = 1;
});

document.querySelector("#two").addEventListener('click', () => {
  data.firstNum = 2;
});

document.querySelector("#three").addEventListener('click', () => {
  data.firstNum = 3;
});

document.querySelector("#four").addEventListener('click', () => {
  data.firstNum = 4;
});

document.querySelector("#five").addEventListener('click', () => {
  data.firstNum = 5;
});

document.querySelector("#six").addEventListener('click', () => {
  data.firstNum = 6;
});

document.querySelector("#seven").addEventListener('click', () => {
  data.firstNum = 7;
});

document.querySelector("#eight").addEventListener('click', () => {
  data.firstNum = 8;
});

document.querySelector("#nine").addEventListener('click', () => {
  data.firstNum = 9;
});

document.querySelector("#zero").addEventListener('click', () => {
  data.firstNum = 0;
});

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
//revisar fn operate
const operate = (operator, num1, num2) => {
  let addSum = add(num1, num2);
  let substractSum = substract(num1, num2);
  let divideSum = divide(num1, num2);
  let multiplySum = multiply (num1, num2);
}
//mostrar contenido en pantalla

const updateDiplay = (num) => {
  let display = document.querySelector("#display");
  display.textContent = value;
}

const handleNumberClick = (num) => {
  if (data.operator === null) {
    data.num1 += num;
    updateDiplay(data.firstNum)
  } else {
    data.num2 += num;
    updateDiplay(data.secondNum)
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