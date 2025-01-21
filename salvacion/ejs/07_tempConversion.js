// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

//fahrenheit to celsius --> (x − 32) * ⁠5/9
//celsius to fahreinheit --> (x * ⁠9/5⁠ + 32)

let convertToCelsius = (degree) => {
  return (degree - 32) * 5/9;
}

let convertToFahrenheit = (degree) => {
  return degree * 9/5 + 32;
}

console.log(convertToCelsius(32)); // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32