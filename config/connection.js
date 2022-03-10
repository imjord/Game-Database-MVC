const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://imjord:imjord@cluster0.xxo5q.mongodb.net/MacGameLibrary?retryWrites=true&w=majority");

module.exports = mongoose.connection;