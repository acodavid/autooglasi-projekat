const Validator = require('validator');
const prazan = require('./prazan');

module.exports = function validacijaLoginInputa(podatak) {
    let errors = {};

    podatak.email = !prazan(podatak.email) ? podatak.email : '';
    podatak.lozinka = !prazan(podatak.lozinka) ? podatak.lozinka : '';

    if (!Validator.isEmail(podatak.email)) {
        errors.email = 'Email nije validan';
    }

    if (Validator.isEmpty(podatak.email)) {
        errors.email = 'Polje za email je obavezno';
    }

    if (!Validator.isLength(podatak.lozinka, { min: 6, max: 30 })) {
        errors.lozinka = 'Lozinka mora biti između 6 i 30 karaktera';
    }

    if (Validator.isEmpty(podatak.lozinka)) {
        errors.lozinka = 'Polje za lozinku je obavezno';
    }

    return {
        errors,
        isValid: prazan(errors)
    };
};