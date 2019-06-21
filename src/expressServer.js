var express = require('express');
var pg = require('pg');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors()); // middleware
app.use(bodyparser.json()); //middleware
let connectionString = 'postgresql://postgres:Sql123@localhost:5432/postgres';
const client = new pg.Client({connectionString: connectionString});
client.connect()
.then( res => console.log('connected to database'))
.catch( err => console.log(err));

// axios.get('http://localhost:4000/getEvents')
app.get('/getEvents', function (request, response) {
    client.query('SELECT * FROM events')
    .then( res => {
        response.send(res.rows);
    })
    .catch( err=> {
        console.log(err);
        response.send([]);
    })

})

app.post('/addNewEvent', function (request, response) {
    console.log(request.body);
    let {title, date, location,funds,description,pic,organization,purpose} = request.body;
    let arr = [title, date, location,funds,pic,purpose,description,organization];

    let query = "INSERT INTO events (title,date,location,funds,image,purpose,description,organization)";
    query += ' VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
    client.query(query, arr)
    .then( res => {
        console.log('\tinserted into database!')
        response.send('success');
    })
    .catch( err => {
        console.log(err) ;
        response.send('failed');
    });
})

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
