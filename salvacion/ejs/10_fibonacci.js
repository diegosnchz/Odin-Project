// A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. 
// In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.


// Fn = Fn-1 + Fn-2
let fibonacci = (num) => {
  let fibo = [1, 1, 2];
  let contador = 0;

  for (let i =0; i < num; i++) {
    if (i > 2) {
      let nextNum = fibo [i-1] + fibo [i-2];
      fibo.push(nextNum);
    } else {
      contador += fibo[i]
    }
  }
  return fibo[fibo.length-1];
} 

console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log(fibonacci(15)); // returns 8

function fibonacci2(num) {
  if (num === 0)
    return (0);aaaaa
  if (num === 1)
    return (1);
  return (fibonacci2(num - 1) + fibonacci2(num - 2));
}

console.log(fibonacci2(15));