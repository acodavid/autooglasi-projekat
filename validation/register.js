const Validator = require('validator');
const prazan = require('./prazan');

module.exports = function validacijaRegisterInputa(podatak) {
    let errors = {};

    podatak.ime = !prazan(podatak.ime) ? podatak.ime : '';
    podatak.email = !prazan(podatak.email) ? podatak.email : '';
    podatak.lozinka = !prazan(podatak.lozinka) ? podatak.lozinka : '';
    podatak.lozinka2 = !prazan(podatak.lozinka2) ? podatak.lozinka2 : '';

    if (!Validator.isAlpha(podatak.ime)) {
        errors.ime = "Ime mora biti sastavljeno isključivo iz slova"
    }

    if (!Validator.isLength(podatak.ime, { min: 2, max: 30 })) {
        errors.ime = 'Ime mora biti između 2 i 30 karaktera'
    }

    if (Validator.isEmpty(podatak.ime)) {
        errors.ime = 'Polje za ime je obavezno';
    }

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

    if (Validator.isEmpty(podatak.lozinka2)) {
        errors.lozinka2 = 'Molimo da potvrdite vašu lozinku';
    }

    if (!Validator.equals(podatak.lozinka, podatak.lozinka2)) {
        errors.lozinka2 = 'Lozinke se moraju podudarati';
    }

    return {
        errors,
        isValid: prazan(errors)
    };
};