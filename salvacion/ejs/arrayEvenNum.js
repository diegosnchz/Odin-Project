// let sumEvenNumbers = (array) => {
//   let sum = 0;
//   for (let i =0; i< array.length; i++){
//     if (array[i] %2 === 0){
//       sum+=array[i]*3;
//     }
//   }
//   console.log(sum);
// }
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sumEvenNumbers(numbers);

function sumOfTripledEvens(array) {
  return console.log(array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr));
}

sumOfTripledEvens(numbers);