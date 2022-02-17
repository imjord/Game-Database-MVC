const {Schema, model} = require('mongoose');


const GameSchema = new Schema({
    title: String,
    description: String,
    price: Number
})


const Game = new model('Game', GameSchema);


module.exports = Game;