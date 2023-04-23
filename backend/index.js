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
app.use(cors({
    origin: 'http://localhost:5000',
    allowedHeaders: 'Content-Type'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);
app.use('/api', apiRoutes);
app.use('/api/v1/signIn', (req, res) => {
    return res.json({ message: "Hitting the signIn service" });
});
/**
 *  
 */
app.get('/', (req, res) => {
    res.send("Apprunning Succeessfully");
});
if (process.env.NODE_ENV == 'production') {
    const path = require('path');
    // const __dirname1 = path.resolve();
    app.get('/', (req, res) => {
        app.use(express.static(__dirname, '../frontend', 'build'));
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
    })
}

app.listen(PORT, async() => {

    console.log("Server listening on port " + PORT);
    await connect();
    console.log("Database connected");
})