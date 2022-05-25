const router = require('express').Router();
const { getUserGames, showUsers, createUser } = require('../Controllers/UserController');


// posts 

router.route('/').get(showUsers).post(createUser);


// show users games

router.get('/games', getUserGames);




// delete user 
// router.delete('/games', (req,res) => {
//   User.deleteOne().then((result => {
//     res.render('users', {title: "games", delete: result })
//   }))
// })

module.exports = router;