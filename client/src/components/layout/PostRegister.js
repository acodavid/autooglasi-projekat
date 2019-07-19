import React from 'react';
import { Link } from 'react-router-dom';

export default function PostRegister() {
    return (
        <div className="container">
            <div className="alert alert-dismissible alert-success">
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Uspješno ste se registrovali!</strong> Dobrodošli na našu stranicu!
            </div>
            <Link to="/login" className="btn btn-primary btn-block">Molimo prijavite se kako bi nastavili</Link>
        </div>

    )
}
