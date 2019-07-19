const Validator = require('validator');
const prazan = require('./prazan');

module.exports = function validacijaObjaveInputa(podatak) {
    let errors = {};

    podatak.proizvodjac = !prazan(podatak.proizvodjac) ? podatak.proizvodjac : '';
    podatak.model = !prazan(podatak.model) ? podatak.model : '';
    podatak.godiste = !prazan(podatak.godiste) ? podatak.godiste : '';
    podatak.kilometraza = !prazan(podatak.kilometraza) ? podatak.kilometraza : '';
    podatak.kubikaza = !prazan(podatak.kubikaza) ? podatak.kubikaza : '';
    podatak.kw = !prazan(podatak.kw) ? podatak.kw : '';
    podatak.transmisija = !prazan(podatak.transmisija) ? podatak.transmisija : '';
    podatak.gorivo = !prazan(podatak.gorivo) ? podatak.gorivo : '';
    podatak.brojvrata = !prazan(podatak.brojvrata) ? podatak.brojvrata : '';
    podatak.boja = !prazan(podatak.boja) ? podatak.boja : '';
    podatak.stanje = !prazan(podatak.stanje) ? podatak.stanje : '';
    podatak.detalji = !prazan(podatak.detalji) ? podatak.detalji : '';

    if (Validator.isEmpty(podatak.proizvodjac)) {
        errors.proizvodjac = 'Ime proizvođača mora biti izabrano';
    }

    if (Validator.isEmpty(podatak.model)) {
        errors.model = 'Ime modela mora biti ispunjeno';
    }

    if (!(podatak.godiste >= 1900 && podatak.godiste <= 2019)) {
        errors.godiste = 'Godište mora biti između 1900 i 2019';
    }

    if (!Validator.isLength(podatak.godiste, { min: 4, max: 4 })) {
        errors.godiste = 'Godište nije validno (format 19xx/20xx)';
    }

    if (!Validator.isNumeric(podatak.godiste)) {
        errors.godiste = 'Godište nije validno (format 19xx/20xx)';
    }

    if (Validator.isEmpty(podatak.godiste)) {
        errors.godiste = 'Godište mora biti ispunjeno';
    }

    if (!Validator.isNumeric(podatak.kilometraza)) {
        errors.kilometraza = 'Kilometraza mora biti broj';
    }

    if (Validator.isEmpty(podatak.kilometraza)) {
        errors.kilometraza = 'Kilometraža mora biti unesena';
    }

    if (!Validator.isNumeric(podatak.kw)) {
        errors.kw = 'Kilovati moraju biti broj';
    }

    if (Validator.isEmpty(podatak.kw)) {
        errors.kw = 'Kilovati moraju biti uneseni';
    }

    if (Validator.isEmpty(podatak.transmisija)) {
        errors.transmisija = 'Transmisija mora biti unesena';
    }

    if (Validator.isEmpty(podatak.gorivo)) {
        errors.gorivo = 'Gorivo mora biti uneseno';
    }

    if (Validator.isEmpty(podatak.brojvrata)) {
        errors.brojvrata = 'Broj vrata mora biti unesen';
    }

    if (Validator.isEmpty(podatak.boja)) {
        errors.boja = 'Boja mora biti unesena';
    }

    if (Validator.isEmpty(podatak.stanje)) {
        errors.stanje = 'Stanje mora biti uneseno';
    }

    if (!Validator.isLength(podatak.detalji, { min: 5, max: 600 })) {
        errors.detalji = 'Detalji o automobilu moraju biti izmedju 5 karaktera i 600';
    }

    if (Validator.isEmpty(podatak.detalji)) {
        errors.detalji = 'Detalji moraju biti uneseni';
    }

    return {
        errors,
        isValid: prazan(errors)
    };
};