const express = require('express');
const app = express();
const port = 3000
const routes = {
    users: require('./routes/users'),
    posts: require('./routes/posts'),
    files: require('./routes/files')
}
const controllers = {
    'users': require('./controllers/db.users'),
    'posts': require('./controllers/db.posts'),
    'pcloud': require('./controllers/db.pcloud')
}

require('./connections/mongo') // Starts the connection

app.use('/files', routes.files)
app.use('/users', routes.users)
app.use('/posts', routes.posts)

app.listen(port, () => {
    console.log(`Now listening on http://localhost:${port}`);
});  