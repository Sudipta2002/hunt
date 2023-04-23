const mongoose = require('mongoose');
const { DB } = require('./keys');
const connect = async() => {
    await mongoose.connect(`mongodb://localhost/${DB}`);
}

module.exports = connect;