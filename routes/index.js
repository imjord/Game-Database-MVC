const router = require('express').Router();
// const {getGame} = require('../controllers/GameController');
const Game = require('../models/gameModel');
 

router.get('/', (req,res) =>{
    Game.find().then((results) => {
        res.render('games', {title: 'add', games: results})

    })
   
})


// router.get('/', (req,res) =>{
//     // Game.find().then(results => res.json(results));

//     res.render('games', {title: 'games'})
// });

// router.post('/', (req,res) => {
//     console.log(req.body)
//     const game = new Game(req.body)

//     game.save().then(results => {
//         res.redirect('/')
//     })
// })

module.exports = router;