const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    Username: String,
    Email: String,
    Password: String
   

})

const User = new model('user', UserSchema);


module.exports = User;