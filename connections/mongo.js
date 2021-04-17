const mongoose = require('mongoose');
require('dotenv').config()

const mongoUser = process.env.MongoUsername
const mongoPswd = process.env.MongoPassword
const mongodb = 'Capstone'

mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPswd}@cluster0.8rhv1.mongodb.net/${mongodb}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

db.on('open', async () => {
    console.log('Now connected to the mongodb cluster');    
}).catch(err => {console.log(err)});

module.exports = db