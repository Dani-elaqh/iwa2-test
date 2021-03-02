const http = require('http');

http.createServer((req, res)=>{
  res.write(users.join("\n")); // write a response
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
(async function getNames(){
  try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = data.map(user=>user.name);
  } catch(error){
    console.log(error)
  }
})()
