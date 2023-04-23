const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const apiRoutes = require('./routes/index')
const connect = require('./Config/db');
const bodyParser = require('body-parser');
const passportAuth = require('./Config/jwt-middleware');
const app = express();
const cors = require('cors');
dotenv.config();
const { PORT } = require('./Config/keys');
const {
    UserController,
    ScoreController
} = require("./Controller/index");

//app.use(express.json()); //to accept json data
// Enable CORS with allowed origins and headers
app.use(cors({
    origin: 'http://localhost:5000',
    allowedHeaders: 'Content-Type'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);
app.get('/api/v1/dash', ScoreController.getData);

if (process.env.NODE_ENV == 'production') {
    // const path = require('path');
    app.get('/', (req, res) => {
        res.status(200).json({
            message: 'Running Successfully'
        });
    })
}

app.listen(PORT, async() => {

    console.log("Server listening on port " + PORT);
    await connect();
    console.log("Database connected");
})