const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_OR_KEY } = require('../Config/keys');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
userSchema.pre('save', function(next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
});
userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password)
}
userSchema.methods.genJWT = function generate() {
    return jwt.sign({ id: this.id, email: this.email }, SECRET_OR_KEY, {
        expiresIn: '1h'
    });
}
const User = mongoose.model("User", userSchema);
module.exports = User;