const express = require('express');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000
const routes = {
    main: require('./routes'),
    api: require('./routes/api'),
}

require('./helpers/mongo-connection') // Starts the connection to Mongodb

app.use(express.json())

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use('/', routes.main)
app.use('/api', routes.api)

app.listen(port, () => {
    console.log(`Now listening on http://localhost:${port}`);
});  