const Game = require('../models/gameModel');
const User = require('../models/userModel');


const UserController = {

    getUserGames(req,res){
        Game.find().then(result =>{
            res.render('games', {title: "games", games: result});
          }) 
    },

    // show users
    showUsers(req,res){
        User.find().select('Username -_id').then((result) => {
            res.render('users', {title: "users", users: result})  })
    },

    //create user 
    createUser(req,res){
        const user = new User(req.body)

    user.save().then(result => {
        
        res.redirect("/users")
    })
    }

}

module.exports = UserController;