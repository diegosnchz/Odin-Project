// A car, a man, a maraca.
// Rats live on no evil star.

let strPrueba1 = "A car, a man, a maraca.";
let strPrueba2 = "I love people";

const reverse = (string) => {
  return string.split("").reverse().join("").toLowerCase();
}

const itsPalindrome = (string1) => {
  let string2 = reverse(string1);
  return string1 == string2 ? true : false;
}

console.log(itsPalindrome(strPrueba1)); 