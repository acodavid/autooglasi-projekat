const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Korisnik = mongoose.model('korisnici');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        Korisnik.findById(jwt_payload.id)
            .then(korisnik => {
                if (korisnik) {
                    return done(null, korisnik); //null predstavlja errore, a korisnik korisnika..
                }
                return done(null, false); //ako nema korisnika vraticemo null za greske, ali false za korisnika
            })
            .catch(err => console.log(err));

    }));
};