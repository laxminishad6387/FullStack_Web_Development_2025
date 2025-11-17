// Importing the https module from Node.js core library
// https module helps us send HTTPS requests to servers (like APIs)
const https=require('https');


// We are using https.get() to send a GET request to an API URL.
// This function is ASYNCHRONOUS (runs in the background).
https.get('https://jsonplaceholder.typicode.com/posts/1', (res)=>{

      // We will store incoming data chunks in this variable
      let data="";
       // 'data' event triggers whenever a small part (chunk) of data arrives
      res.on('data',(chunk)=>{
            data+=chunk;   // appending chunks into the data variable
      })

         // 'end' event triggers when all data has been received
     res.on('end',()=>{
      
            // The API returns data in STRING form.
            // We convert that string into a real JavaScript object using JSON.parse()
      let jsonData=JSON.parse(data);
      
            // Now print the final JSON data
      console.log(jsonData);
     })
})
