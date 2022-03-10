const router = require('express').Router();
const User = require('../models/userModel');
const Game = require('../models/gameModel');
// const axios = require('axios');

// let URL = "https://api.rawg.io/api/games?key="

// let API = "15536084472d43bb9041b619adf08b5d"





// const {
//     getUser
// } = require('../Controllers/UserController');


// posts 

router.post("/", (req,res) =>{
    const user = new User(req.body)

    user.save().then(result => {
        
        res.redirect("/users")
    })
})

// show users games

router.get('/games', (req,res) => {




  Game.find().then(result =>{
    res.render('games', {title: "games", games: result});
  }) 
    
    
    
})


// show users
router.get("/", (req,res) =>{
  User.find().select('Username -_id').then((result) => {
    res.render('users', {title: "users", users: result})  })
    
})


// delete user 
// router.delete('/games', (req,res) => {
//   User.deleteOne().then((result => {
//     res.render('users', {title: "games", delete: result })
//   }))
// })

module.exports = router;