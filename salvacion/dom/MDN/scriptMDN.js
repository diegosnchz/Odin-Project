// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
let ulList = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");
// Create a function that will run in response to the button being clicked.
// Inside the function body, start off by storing the current value of the input element in a variable.
// Next, empty the input element by setting its value to an empty string — ''.
button.addEventListener('click', () => {
  let infoInput = input.value;
  input = ""; 
})
// Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.

// Append the span and the button as children of the list item.
// Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
// Append the list item as a child of the list.
// Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
// Finally, use the focus() method to focus the input element ready for entering the next shopping list item.