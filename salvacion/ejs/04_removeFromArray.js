let removeFromArray = (array, number) => {
  return array.filter(item => item !== number);
}

removeFromArray([1, 2, 3, 4], 3); // [1, 2, 4]