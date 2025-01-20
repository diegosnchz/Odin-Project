let removeFromArray = (array, number) => {
  console.log(array.filter(checkSameNumber(array, number)));

}

let checkSameNumber = (array, number)  => {
  for (let i = 0; i<array.length; i++) {
    if (array[i] === number) {
      return number;
    }
  }
  return number;
}

removeFromArray([1, 2, 3, 4], 3);
