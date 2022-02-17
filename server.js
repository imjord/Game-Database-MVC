// requires 
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// server up wuth db
db.once('open', ()=>{
    app.listen(PORT, () =>{
        console.log(`hey up on ${PORT}`);
    })
})
