const mongoose = require("mongoose");
const scoreSchema = mongoose.Schema({
    score: {
        type: Number,
        defaultValue: 0,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });
const Score = mongoose.model("Score", scoreSchema);
module.exports = Score;