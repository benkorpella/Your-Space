//This is for user data
const User = require('../models/mongo.user')

module.exports.addUser = async (username, password, prefs={}, wall={})  => {
    let user = new User({
        username: username,
        prefs: prefs,
        wall: wall
    })
    await User.register(user, password)
}

module.exports.updateUser = async (username, data) => {
    return await User.findOneAndUpdate({ username: username }, data, (err, res) => {
        return err ? err:res
    })
}

module.exports.getOne = async username => {
    return await User.findOne({ username: username }, (err, res) => {
        
        return err ? err:res
    })
}

module.exports.getAll = async () => {
    return await User.find({}, (err, res) => {
        return err ? err:res
    })
}

module.exports.deleteUser = async username => {
    return await User.findOneAndDelete({ username: username }, (err, res) => {
        return err ? err:res
    })
}

