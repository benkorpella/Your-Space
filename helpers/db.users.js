//This is for user data
const User = require('../models/mongo.user')

module.exports.addUser = async (username, prefs={}, wall={})  => {
    let user = new User({
        username: username,
        prefs: prefs,
        wall: wall
    })
    console.log('Adding: ', user);
    await user.save()
    console.log('Saved!');
}

module.exports.updateUser = async (username, data) => {
    console.log('Updating: ', username);
    User.findOneAndUpdate({ username: username }, data, (err, res) => {
        console.log("Updated: ", err ? err:res);
    })
}

module.exports.getUser = async username => {
    console.log('Getting: ', username);
    User.findOne({ username: username }, (err, res) => {
        console.log("Got: ", err ? err:res);
    })
}

module.exports.deleteUser = async username => {
    console.log('Deleting: ', username);
    User.findOneAndDelete({ username: username }, (err, res) => {
        console.log("Deleted: ", err ? err:res);
    })
}

