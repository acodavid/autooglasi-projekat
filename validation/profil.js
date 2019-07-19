const Validator = require('validator');
const prazan = require('./prazan');

module.exports = function validacijaProfilInputa(podatak) {
    let errors = {};

    podatak.korisnickoIme = !prazan(podatak.korisnickoIme) ? podatak.korisnickoIme : '';
    podatak.brojTelefona = !prazan(podatak.brojTelefona) ? podatak.brojTelefona : '';
    podatak.adresa = !prazan(podatak.adresa) ? podatak.adresa : '';


    if (!Validator.isLength(podatak.korisnickoIme, { min: 3, max: 25 })) {
        errors.korisnickoIme = 'Korisnicko ime mora da bude izmedju 3 i 25 karaktera';
    }

    if (Validator.isEmpty(podatak.korisnickoIme)) {
        errors.korisnickoIme = 'Korisnicko ime je obavezno';
    }

    if (!Validator.isLength(podatak.brojTelefona, { min: 9, max: 15 })) {
        errors.brojTelefona = 'Broj telefona nije validan';
    }

    if (!Validator.isNumeric(podatak.brojTelefona)) {
        errors.brojTelefona = 'Broj telefona nije validan';
    }

    if (Validator.isEmpty(podatak.brojTelefona)) {
        errors.brojTelefona = 'Polje za broj telefona je obavezno';
    }

    if (Validator.isEmpty(podatak.adresa)) {
        errors.adresa = 'Polje za adresu je obavezno';
    }

    if (!prazan(podatak.facebook)) {
        if (!Validator.isURL(podatak.facebook)) {
            errors.facebook = 'URL nije validan';
        }
    }

    if (!prazan(podatak.instagram)) {
        if (!Validator.isURL(podatak.instagram)) {
            errors.instagram = 'URL nije validan';
        }
    }

    if (!prazan(podatak.twitter)) {
        if (!Validator.isURL(podatak.twitter)) {
            errors.twitter = 'URL nije validan';
        }
    }

    return {
        errors,
        isValid: prazan(errors)
    };
};