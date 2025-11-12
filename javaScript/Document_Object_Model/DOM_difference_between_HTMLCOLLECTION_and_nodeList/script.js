// Select all <li> elements using getElementsByTagName() → returns a LIVE HTMLCollection
let HtmlCollection = document.getElementsByTagName('li');

// Select all <li> elements using querySelectorAll() → returns a STATIC NodeList
let nodeList = document.querySelectorAll('li');

// --- Before adding new <li> ---
console.log("HTMLCollection:", HtmlCollection); // Logs live collection of <li> elements
console.log("HTMLCollection length before adding new <li>:", HtmlCollection.length);

console.log("NodeList:", nodeList); // Logs static collection of <li> elements
console.log("NodeList length before adding new <li>:", nodeList.length);

// --- Add a new <li> element dynamically ---
let ul = document.getElementById('myList');
let newli = document.createElement("li");
newli.textContent = "new item";
ul.appendChild(newli); // Appends new <li> to <ul> in the DOM

// --- After adding new <li> ---
console.log("HTMLCollection:", HtmlCollection); 
// HTMLCollection auto-updates → reflects the new <li> (LIVE collection)
console.log("HTMLCollection length after adding new <li>:", HtmlCollection.length);

console.log("NodeList:", nodeList); 
// NodeList does NOT auto-update → still shows old list (STATIC collection)
console.log("NodeList length after adding new <li>:", nodeList.length);
