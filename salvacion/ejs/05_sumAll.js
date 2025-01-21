// let sumAll = (num1, num2) => {
//   let tatol = 0;
//   for (let i = num1; i <= num2; i++){
//     while (i < num2) {
//       tatol = i;
//     }
//   }
//   return tatol;
// }

// console.log(sumAll(1,4));

let sumAll = (num1, num2) => {
  let total = 0; 
  for (let i = num1; i <= num2; i++) {
    total += i; 
  }
  return total; 
}

console.log(sumAll(1, 4)); // 10

//cuando quieres saber el elemento que hay simplemente le pones la i.. cuando es array --> array[i];
//pa que poner el while cuando ya está dentro del bucle for.. no tiene sentido ya que el propio for ya es de por sí un bucle.