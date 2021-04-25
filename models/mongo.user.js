const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  created: { type: Date, default: Date.now },
  prefs: {
    // list out user preferances
  },
  wall: {
    // list out wall options 
  }
});

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('user', userSchema);

module.exports = User