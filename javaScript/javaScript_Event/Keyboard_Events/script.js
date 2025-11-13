// Select the input element from the HTML document
let input=document.querySelector('input');

// Select the button element from the HTML document
let btn=document.querySelector('button');



// 'keypress' event triggers when a key that produces a character value is pressed.
// (It doesn’t fire for non-character keys like Shift, Ctrl, etc.)
input.addEventListener('keypress',(event)=>{
   console.log(`Key "${event.key}" pressed  charCode=${event.charCode}`);
})



// 'keydown' event triggers when any key (character or non-character) is pressed down.
input.addEventListener('keydown',(event)=>{
   console.log("Key down: ",event.key);
})



// 'keyup' event triggers when the key is released after being pressed.
input.addEventListener('keyup',(event)=>{
   console.log("Key up: ",event.key);
})



// Define a function to handle button click
function clickEvent(){
   alert("Button Clicked!");
}


// Add the click event listener to the button
btn.addEventListener('click',clickEvent);



// Remove the click event listener from the button after 10 seconds
// (The button won’t trigger the alert after this time)
setTimeout(()=>{
   btn.removeEventListener('click',clickEvent);
   console.log("Click event listener removed from button");
},10000);