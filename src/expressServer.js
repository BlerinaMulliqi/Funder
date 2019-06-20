var express = require('express');
var pg = require('pg');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors()); // middleware
app.use(bodyparser.json()); //middleware

// axios.get('http://localhost:4000/getEvents')
app.get('/getEvents', function (request, response) {
   console.log('GOT a REQUEST');
   response.send('Hi thereno');
})

app.post('/', function (request, response) {
   console.log(request.body);

   response.send('hello')
})

app.listen(4000, function () {
   console.log('Example app listening on port 4000!');
});





