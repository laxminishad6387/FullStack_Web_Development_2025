// 🎨 Selecting all important DOM elements
let colorpicker=document.getElementById("color-pixel");   // Color picker for selecting pixel color
let clearbtn=document.getElementById("clear-btn");     // Button to clear the entire grid
let gridsizeinput=document.getElementById("grid-size");     // Input box for entering new grid size
let resizebtn=document.getElementById("resize-btn");       // Button to resize grid
let gridcontainer=document.getElementById("grid-container");    // Main pixel drawing container


let gridSize=16; // Default grid size (16x16)


// 🧱 FUNCTION: Creates the pixel grid
function createGrid(size){
    gridcontainer.innerHTML="";    // Clear previous grid

      // Set the grid layout based on size (CSS Grid)
    gridcontainer.style.gridTemplateColumns=`repeat(${size}, 20px)`;
    gridcontainer.style.gridTemplateRows=`repeat(${size}, 20px)`;

     // Create total "size * size" number of pixels
      for(let i=0;i<size*size;i++){
              let pixel=document.createElement("div");
               pixel.classList.add("pixel");
               pixel.addEventListener("mousedown",  startDrawing);
               pixel.addEventListener("mouseover", draw);
               pixel.addEventListener("mouseup", stopDrawing);
             gridcontainer.appendChild(pixel);
          
      }
    

}

// 🔄 Convert RGB string (like "rgb(255, 0, 128)") into HEX (#FF0080)
function rgbToHex(rgbValue) {
    
  // rgbValue looks like "rgb(255, 0, 128)"
  
  // Extract the numbers using regex
  let rgb = rgbValue.match(/\d+/g);  // Extract all numbers using regex
    if(!rgb)
            return;

  // Convert each to hex and pad to two digits
  let hex = "#" + rgb.map(num => {
    let hexPart = parseInt(num).toString(16);
    return hexPart.padStart(2, "0");
  }).join("");

  return hex.toUpperCase(); // "#FF0080"
}

// 🖌 Drawing control variables
  let isDrawing=false;

  // Mouse is pressed → start drawing
      function startDrawing(event){
            isDrawing=true;
            draw(event)    // Draw immediately on mousedown
      }


       // Draw immediately on mousedown
      function draw(event){
            if(isDrawing && event.target.classList.contains("pixel")){

                  
        // If pixel is empty OR color is different → fill color
                  if( !event.target.style.backgroundColor || (rgbToHex(event.target.style.backgroundColor)!=colorpicker.value)){
                          event.target.style.backgroundColor=colorpicker.value;
                  }else{
                        // If pixel already has same color → erase by making transparent
                          event.target.style.backgroundColor="transparent";
                  }
                
            }
      }

      // Mouse is released → stop drawing
      function stopDrawing(){
            isDrawing=false;
      }

      // 🧼 Clear button: Makes all pixels transparent again
      clearbtn.addEventListener('click',()=>{
           let getpixel= document.querySelectorAll('.pixel')
           for(let pixel of getpixel)
           {
             pixel.style.backgroundColor="transparent"
           }
      })


      // 📏 Resize grid when user clicks "Resize" button
      resizebtn.addEventListener('click',(event)=>{
            let newSize=parseInt(gridsizeinput.value)
            if(newSize>=1 && newSize<=32){
                  gridSize=newSize;
                  createGrid(gridSize)
            }else{
                  alert("please  enter valid range(1 to 32)");
            }
      })


      
// Create the default 16x16 grid on page load
      createGrid(gridSize);
