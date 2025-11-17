let ul=document.querySelector('ul');
let li=document.createElement("li");
li.textContent="Three";
ul.appendChild(li);  // Append the new li to the ul

//  we can also use other dynamic methods like  removeChild, replaceChild, etc.
// replacing an element
let newli=document.createElement("li");
newli.textContent="new three";
ul.replaceChild(newli,li); // Replace the old li with newli

// Removing an element
ul.removeChild(newli); // This will remove the newli from the ul


