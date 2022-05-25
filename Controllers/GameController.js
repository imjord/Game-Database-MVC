const Game = require('../models/gameModel');


const GameController = {

    getGame(req,res){
        res.render('addgame', {title: "Add Game"});
    },

    createGame(req,res){
        const game = new Game(req.body)

        game.save().then(result => {
        
        res.redirect("/addgames")
    })
    }
}


module.exports = GameController;