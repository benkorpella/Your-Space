const fs = require('fs');
const path = require("path")
const helpers = {
    'mongo': require('../helpers/db.users'),
    'pcloud': require('../helpers/db.pcloud')
}

let filePath = path.resolve('../Misc/example.png')

let file
let run = async () => {
    console.log('before');
    file = await fs.open(filePath)
    console.log(await file.read);
}
// run()

module.exports.main = (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
}

module.exports.add = (req, res) => {

}

module.exports.update = (req, res) => {

}

module.exports.get = (req, res) => {

}

module.exports.delete = (req, res) => {
    
}