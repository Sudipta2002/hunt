const mongoose = require('mongoose');
const { DB } = require('./keys');
const connect = async() => {
    await mongoose.connect(process.env.MONGO_URI);
}

module.exports = connect;