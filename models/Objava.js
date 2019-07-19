const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Kreiranje seme
const ObjavaSchema = new Schema({
    korisnik: {
        type: Schema.Types.ObjectId,
        ref: 'korisnici'
    },
    cijena: {
        type: String
    },
    proizvodjac: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    godiste: {
        type: String,
        required: true
    },
    kilometraza: {
        type: String,
        required: true
    },
    kubikaza: {
        type: String,
        required: true
    },
    kw: {
        type: String,
        required: true
    },
    transmisija: {
        type: String,
        required: true
    },
    gorivo: {
        type: String,
        required: true
    },
    brojvrata: {
        type: String,
        required: true
    },
    boja: {
        type: String,
        required: true
    },
    stanje: {
        type: String,
        required: true
    },
    detalji: {
        type: String,
        required: true
    },
    datum: {
        type: Date,
        default: Date.now
    },
    slika: {
        imageName: {
            type: String
        },
        imageData: {
            type: String
        }
    },
    pitanja: [
        {
            korisnik: {
                type: Schema.Types.ObjectId,
                ref: 'korisnici'
            },
            tekst: {
                type: String,
                required: true
            },
            ime: {
                type: String
            },
            datum: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Objava = mongoose.model('objave', ObjavaSchema);