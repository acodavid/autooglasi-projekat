const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Kreiranje seme
const ProfilSchema = new Schema({
    korisnik: {
        type: Schema.Types.ObjectId,
        ref: 'korisnici'
    },
    korisnickoIme: {
        type: String,
        required: true,
        max: 25
    },
    brojTelefona: {
        type: String,
        required: true
    },
    adresa: {
        type: String,
        required: true
    },
    linkovi: {
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type: String
        }
    }
});

module.exports = Profil = mongoose.model('profil', ProfilSchema);