const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://imjord:imjord123@cluster0.kzbiy.mongodb.net/MCVfirst?retryWrites=true&w=majority')


module.exports = mongoose.connection;