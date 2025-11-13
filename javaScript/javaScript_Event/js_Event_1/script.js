// Select the first <button> element from the page
let btn=document.querySelector('button');

// Select the first <input> element from the page
let inp=document.querySelector('input');

// Select the first <div> element from the page
let div=document.querySelector('div');



// Add an event listener to the button that listens for a "click" event
btn.addEventListener('click',()=>{     // Using an arrow function as the event handler
      alert("Button Clicked!");   // Show an alert message when the button is clicked
})


// 'focus' event triggers when the user clicks inside or tabs into the input box
inp.addEventListener('focus',()=>{
      console.log("focused on input box")   // Logs when input box gets focus

})



// 'blur' event triggers when the input box loses focus (user clicks/tabs away)
inp.addEventListener('blur',()=>{
      console.log("focus lost from input box")    // Logs when input box loses focus
})



// 'mouseover' event triggers when the mouse pointer enters the div area
div.addEventListener('mouseover',()=>{
      console.log("mouse over the div")     // Logs when mouse enters the div
})


// 'mouseout' event triggers when the mouse pointer leaves the div area
div.addEventListener('mouseout',()=>{
      console.log("mouse out from the div")    // Logs when mouse leaves the div
})
