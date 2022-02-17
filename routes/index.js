const router = require('express').Router();
const {getGame} = require('../controllers/GameController');
 
router.get('/', getGame);


module.exports = router;