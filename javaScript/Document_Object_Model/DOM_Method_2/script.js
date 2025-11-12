let ul=document.getElementById("myList");
let newli=document.createElement("li");
newli.textContent="Three";
ul.appendChild(newli);  // Append the new li to the ul

let newDiv=document.createElement("div");
newDiv.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, possimus?"
document.body.appendChild(newDiv) // Append the new div to the body
newDiv.style.backgroundColor="lightblue";