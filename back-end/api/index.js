require('dotenv').config();
const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes');

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}...`);
});
