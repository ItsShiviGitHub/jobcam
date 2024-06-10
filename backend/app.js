const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes.js')
const app = express();



//middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());



//coonect database
require("./db/connect.js")
//routes

app.use(userRoutes);

// start the server

const port = process.env.port || 8008
app.listen(port, () => {
    console.log(`server is runnig on port ${port}`);
})