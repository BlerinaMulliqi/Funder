const {Pool,Client}= require('pg')
const connectionString = 'postgressql://postgres:Sql123@localhost:5432/postgres'
 
console.log('SELECT * FROM events');

const client = new Client({
    connectionString:connectionString
})

client.connect()

client.query('SELECT * from events', (err,res) => {
console.log(err,res)
client.end()
})

