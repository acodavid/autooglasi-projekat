const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Kreiranje seme
const KorisnikSchema = new Schema({
    ime: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lozinka: {
        type: String,
        required: true
    },
    datum: {
        type: Date,
        default: Date.now
    }
});

module.exports = Korisnik = mongoose.model('korisnici', KorisnikSchema);