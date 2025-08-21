const express = require('express');
const app = express();
const port = 3000;
const exphbs = require('express-handlebars');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const path = require('path');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));


//db connection
db.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

//routes
app.get('/', (req, res) => {
    res.render('index')
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));