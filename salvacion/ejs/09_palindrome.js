let strPrueba1 = "Rats live on no evil star";
let strPrueba2 = "I love people";

const reverse = (string) => {
  return string.split("").reverse().join("").toLowerCase();
}

const itsPalindrome = (string1) => {
  let cleanedString1 = string1.toLowerCase();
  let string2 = reverse(cleanedString1);
  return cleanedString1 === string2;
}

console.log(itsPalindrome(strPrueba1)); // true
console.log(itsPalindrome(strPrueba2)); // false