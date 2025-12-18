let arr = [1, 9.8,  "laxmi",  [1, 2, 3, 4, 5], { name: "ritika" } ];           
               
arr.forEach(function(element){
      console.log(element);
})


arr.forEach((element)=>{
       console.log(element);
})


for(let element of arr)
{
     console.log(element);
}