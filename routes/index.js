const router = require('express').Router();
// const {getGame} = require('../controllers/GameController');
const Game = require('../models/gameModel');
 
router.get('/', (req,res) =>{
    // Game.find().then(results => res.json(results));

    res.render('games', {title: 'games'})
});


module.exports = router;