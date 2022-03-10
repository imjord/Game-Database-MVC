const Game = require('../models/gameModel');
const router = require('express').Router();



router.get('/', (req,res) => {
    res.render('addgame', {title: "Add Game"});
})



router.post("/", (req,res) =>{
    const game = new Game(req.body)

    game.save().then(result => {
        
        res.redirect("/addgames")
    })
})

module.exports = router;