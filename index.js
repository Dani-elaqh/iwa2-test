const http = require('http');
const axios = require('axios'),
logger = require('morgan'),
cors = require ('cors');
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

//create the routing 
app.get('/hello', (req, res)=>{
    res.send("Hello BScBest!")
});//end point is hello 

http.createServer((req, res)=>{
  res.write(people.join(" \ n ")); //display the list of users on the page
  //res.write("\n\n"+emails.join(", ")); //display the list of users on the page
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000

let people = []; // names of users will be stored here

(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people/");
    //console.log(data);
    people = data.results.map(user=>user.name);
    console.log(users);
    //console.log(homeworld);
  } catch(error){
    console.log(error)
  }
})();

app.listen(port, function(err){
    console.log('Listening on port: ' + port)
});

