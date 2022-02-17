const router = require('express').Router();
const Game = require('../models/gameModel');


router.get('/', (req,res) => {
    res.render('addgame', {title: "add"})
})

router.post('/', (req,res) =>{
    const game = new Game(req.body)
    console.log(game)
    game.save().then(results => {
        res.redirect('games');
    })
})

module.exports = router;