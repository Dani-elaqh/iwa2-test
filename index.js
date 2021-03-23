const http = require('http');
const axios = require('axios'),
logger = require('morgan'),
cors = require ('cors');
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())
app.use(logger('tiny'));
//middleware
app.use(require('./routes'));

//app.get('/hello/sw', (req, res) => {
    // this res will just work if you have the StarWars API called
//    res.json({characteres: characteres});
//});
//app.listen(port);

// app.get('/hello', (req, res) => {
//     res.json({"message": "Hello there!"})
// });


// let people = []; // names of users will be stored here

// (async function getNames(){
//   try{
//     const {data} = await axios.get("https://swapi.dev/api/people/");
//     //console.log(data);
//     people = data.results.map(user=>user.name);
//     // console.log(users);
//     //console.log(homeworld);
//   } catch(error){
//     console.log(error)
//   }
// })();

app.listen(port, function(err){
    console.log('Listening on port: ' + port)
});

