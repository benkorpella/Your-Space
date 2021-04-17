const mongoose = require('mongoose');

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

const User = mongoose.model('user', userSchema);

module.exports = User