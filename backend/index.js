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
//app.use(express.json()); //to accept json data
// Enable CORS with allowed origins and headers
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);
app.use('/api', apiRoutes);

if (process.env.NODE_ENV == 'production') {
    // const path = require('path');
    app.get('/', (req, res) => {
        res.status(200).json({
            message: 'Running Success'
        });
    })


}

app.listen(PORT, async() => {

    console.log("Server listening on port " + PORT);
    await connect();
    console.log("Database connected");
})