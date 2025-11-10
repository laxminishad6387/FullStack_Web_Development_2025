let heading=document.getElementById("title");  //we can only unique id using getElementById
heading.style.color="brown"; //heading variable catch the h1 element and we can change its style using style property
heading.style.backgroundColor="blue";
heading.style.marginBottom="50px"


let boxes=document.getElementsByClassName("box"); //we can get class element using getElementsByClassName. It returns HTMLCollection [div.box, div.box]. this is not array but we can use for...of loop to iterate over it.
for(let eachBox of boxes){
      eachBox.style.color="red";
      eachBox.style.fontSize="20px";
      eachBox.style.border="2px solid black";
      eachBox.style.backgroundColor="lightgrey";
      eachBox.style.margin="10px";
}


let tag=document.getElementsByTagName("p"); //we can get elements by tag name using getElementsByTagName. It returns HTMLCollection [p]
// tag.style.color="green"; //this will not work because tag is HTMLCollection not single element
tag[0].style.color="orange"; //this will work because we are accessing first element of HTMLCollection