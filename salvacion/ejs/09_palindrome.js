let strPrueba1 = "A car, a man, a maraca.";
let strPrueba2 = "I love people";

const reverse = (string) => {
  return string.split("").reverse().join("").toLowerCase();
}

const itsPalindrome = (string1) => {
  let cleanedString1 = string1.toLowerCase();
  let string2 = reverse(cleanedString1);
  return cleanedString1 === string2;
}

console.log(itsPalindrome(strPrueba1)); // debería devolver false
console.log(itsPalindrome(strPrueba2)); // debería devolver false