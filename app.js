const express = require('express');
const app = express();
const port = 3000;
const db = require('./db/connection');
const bodyParser = require('body-parser');
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));


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
    res.send('Esta funcionando');
});

//jobs routes
app.use('/jobs', require('./routes/jobs'));