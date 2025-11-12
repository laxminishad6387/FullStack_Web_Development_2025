let div1=document.getElementById("textDiv1");
console.log(div1.textContent); // Get the text content of the div
console.log(div1.innerText);  // Get the inner text of the div
console.log(div1.innerHTML); // Get the inner HTML of the div



let div2=document.getElementById("textDiv2");
console.log(div2.textContent); // Get the text content of the div
console.log(div2.innerText);   // Get the inner text of the div
console.log(div2.innerHTML);   // Get the inner HTML of the div




let div3=document.getElementById("textDiv3");
console.log(div3.textContent);
// ➤ Returns all the text inside the element — including extra spaces, line breaks, and hidden text.
// Example output: "            ipsum dolor sit amet."

console.log(div3.innerText);
// ➤ Returns only the visible text (ignores hidden text) and removes extra spaces or line breaks.
// Example output: "Lorem ipsum dolor sit amet."

console.log(div3.innerHTML);
// ➤ Returns the HTML content (including tags) inside the element as a string.
// Example output: "<b>Lorem</b> ipsum dolor sit amet."
