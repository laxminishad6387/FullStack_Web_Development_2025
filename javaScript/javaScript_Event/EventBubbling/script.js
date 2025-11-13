// Selecting HTML elements from the document
let btn=document.querySelector('button');       // Selects the first <button> element
let childdiv=document.getElementById('child');    // Selects the div with id="child"
let parentdiv=document.getElementById('parent');   // Selects the div with id="parent"
let grandparentdiv=document.getElementById('grandparent');   // Selects the div with id="grandparent"



// ---------------- Event Bubbling Example ----------------

// Event bubbling means: when an element is clicked, the event travels (bubbles up)
// from the innermost element (child) to its ancestors (parent → grandparent → document).

// Adding a click event listener to the button
btn.addEventListener('click',(event)=>{
     console.log("Button Clicked");

     // stopPropagation() prevents the event from bubbling up to parent elements.
    // Without this, clicking the button would also trigger the click events 
    // of its parent divs (child → parent → grandparent).
     event.stopPropagation(); 
})


// Adding click event to the child div
childdiv.addEventListener('click',()=>{
      console.log("Child Div Clicked");
})


// Adding click event to the parent div
parentdiv.addEventListener('click',()=>{
      console.log("Parent Div Clicked");
})


// Adding click event to the grandparent div
grandparentdiv.addEventListener('click',()=>{
      console.log("Grandparent Div Clicked");
})
