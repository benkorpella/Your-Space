const express = require('express');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000
const routes = {
    main: require('./frontend'),
    users: require('./routes/users'),
    posts: require('./routes/posts'),
    files: require('./routes/files')
}
const controllers = {
    'users': require('./helpers/db.users'),
    'posts': require('./helpers/db.posts'),
    'pcloud': require('./helpers/db.pcloud')
}

require('./helpers/mongo-connection') // Starts the connection to Mongodb

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use('/', routes.main)
app.use('/files', routes.files)
app.use('/users', routes.users)
app.use('/posts', routes.posts)

app.listen(port, () => {
    console.log(`Now listening on http://localhost:${port}`);
});  