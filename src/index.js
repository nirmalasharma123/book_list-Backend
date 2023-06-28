const mySql = require('mysql');
const express= require('express');
const router = require('./router/router')
const app = express();
const cors= require('cors')
app.use(express.json());
app.use(cors())

 let db =mySql.createConnection({
    host:'localhost',
    user:'root',
    database:'bookslist',
    password:'jassu@123'
})

db.connect((err,data)=>{
    if(err) console.log(err);
    console.log('sql is connected')
})

app.use((req,res,next)=>{
    req.db=db;
    next()
})
app.use('/',router)
app.listen(3001,()=>{
    console.log("app is live")
})