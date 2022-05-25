const { getGame, createGame } = require('../Controllers/GameController');
const router = require('express').Router();



router.route('/').get(getGame).post(createGame);


module.exports = router;