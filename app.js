// Imports
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

// Configs
dotenv.config();
require('./app/config/connect');


// Custom Imports
const redirect = require('./app/routes/redirect');
const route = require('./app/middleware/route');
const error = require('./app/middleware/error');
const port = require('./app/config/Port');


// Middlewares
app.use(express.json());
app.use(cors());


// Custom Middlewares
app.use(route);
app.use('/api/v1', redirect); // Redirect
app.use(error);


app.listen(port, () => { console.log(`App is up and running @ ${port}`) })