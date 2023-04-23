const JWT = require('passport-jwt');
const { User } = require('../Model/index');
const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'hunt_secret'
}
const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async(jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if (!user) {
            return done(null, false);
        } else {
            done(null, user);
        }
    }));
}
module.exports = passportAuth;