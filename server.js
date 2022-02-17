// requires 
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');
const gameRoute = require('./routes/index');
const addGames = require('./routes/gameList');

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// views 
// set the view engine to ejs
app.set('view engine', 'ejs');




// routes
app.get('/', (req,res) =>{
    res.render('Home', {title: 'Home'})
})



app.use('/games', gameRoute);
app.use('/addgame', addGames)

// server up wuth db
db.once('open', ()=>{
    app.listen(PORT, () =>{
        console.log(`hey up on ${PORT}`);
    })
})
