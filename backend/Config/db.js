const mongoose = require('mongoose');
const { DB } = require('./keys');
const connect = async() => {
        await mongoose.connect(`mongodb+srv://sudipta_2023:sudipta_2023@cluster0.ob5j3ee.mongodb.net/?retryWrites=true&w=majority`);
    }
    //mongodb+srv://sudipta_2023:sudipta_2023@cluster0.ob5j3ee.mongodb.net/?retryWrites=true&w=majority
module.exports = connect;