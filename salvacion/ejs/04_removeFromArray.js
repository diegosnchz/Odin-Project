// Implement a function that takes an array and some other arguments then removes the other arguments from that array

let removeFromArray = (array, number) => {
  for (let i = 0; i<array.length; i++) {
    if (array [i] === number){
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}



console.log(removeFromArray([1, 2, 3, 4], 3));// should remove 3 and return [1,2,4]