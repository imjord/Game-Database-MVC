// requires 
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');
const gameRoute = require('./routes/index');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use('/games', gameRoute);


// server up wuth db
db.once('open', ()=>{
    app.listen(PORT, () =>{
        console.log(`hey up on ${PORT}`);
    })
})
