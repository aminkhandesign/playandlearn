// const http = require('http');


// let handleReq = (req,res)=>{
//     console.log("server listening...");
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.headers);
//     res.end("has dealt with request!!");
// }
// http.createServer(handleReq).listen(3080,'127.0.0.1');

const express  =require('express');
const path = require('path');
const PORT = process.env.PORT || 3080;
const mysql = require('mysql');
const connection = mysql.createConnection({
host :'localhost',
user : 'root',
password: '911vsgtrr34',
database: 'playandlearn'


})

const app = express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
})
app.use(express.static('public'));
app.listen(PORT, ()=>console.log(`listening on ${PORT}`))

connection.connect();
connection.query('SELECT * FROM students', function(err,rows,fields){
    if(err) throw err
    console.log('The solution is:', rows[0].username)
})

connection.end();