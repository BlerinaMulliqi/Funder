const {Pool,Client}= require('pg')
const connectionString = 'postgressql://postgres:Sql123@localhost:5432/postgres'
const bodyparser = require('body-parser');

console.log('SELECT * FROM events');

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT * from events', (err,res) => {
console.log(err,res)
client.end()

})

app.post('addCampus', function(request,responce) {
	console.log('Post Request');
	let title = request.body.title;
	let description = request.body.description;
    let purpose = request.body.purpose;
	let funds = request.body.funds;
	let date = request.body.date;
	let location = request.body.location;
	let pic = request.body.pic;
	let orgranization = request.body.orgranization;

let queryStr = 'INSERT INTO events(title, description, purpose, funds, date, location, pic, orgranization)';
queryStr += 'VALUES($1, $2, $3, $4, $5, $6, $7, $8)';

client.query(queryStr, [title, description, purpose, funds, date, location, pic, orgranization])
.then((res) => {
	console.log('Insertion successful');
    response.send('success'); 
  })
  .catch( e => {        
    console.log('Insertion failed');
    response.send('failure') 
  });
});