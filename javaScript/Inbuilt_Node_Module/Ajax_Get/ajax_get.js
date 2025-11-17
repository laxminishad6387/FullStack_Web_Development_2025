let btn=document.querySelector('button');
let div=document.getElementById('post')
function getFun(){
      let xml=new XMLHttpRequest();
      xml.open('GET','https://jsonplaceholder.typicode.com/posts');

      xml.onload=()=>{
            div.innerText=xml.responseText;
      }
      xml.send();
}
btn.addEventListener('click',getFun)