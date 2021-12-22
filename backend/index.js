const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const SeedDB = require('./seedDB')
const dataRoutes = require('./routes/data') 

// connecting Database
mongoose.connect('mongodb://localhost:27017/cubedote')
.then(()=>{
    console.log('DB connected')
})
.catch((err)=>{
    console.log('error while connection Database')
    console.log(err);
})

//Seeding DataBase
//SeedDB();

// adding Data Routes

app.use(dataRoutes);


app.get('/',(req,res)=>{
    res.send("server is on")
})

app.listen(8080,()=>{
    console.log('port listning at 8080')
})