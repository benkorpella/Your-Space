const express = require('express');
const handlebars  = require('express-handlebars');
const formidable = require('express-formidable');
const passport = require('passport')
const session = require('express-session');
const app = express();
const port = 3000
const routes = {
    main: require('./routes'),
    api: require('./routes/api'),
}
const models = {
    User: require('./models/mongo.user')
}

require('./helpers/mongo-connection') // Starts the connection to Mongodb

//app.use(express.json())
app.use(formidable())
app.use(session({
    secret: 'secrety secret 1235' 
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(models.User.createStrategy())


app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use('/', routes.main)
app.use('/api', routes.api)

app.listen(port, () => {
    console.log(`Now listening on http://localhost:${port}`);
});  