import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearProfile } from '../../actions/profileActions';

class Navbar extends Component {

    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearProfile();
        this.props.logoutUser();

    }

    render() {

        const { isLogged, korisnik } = this.props.auth;

        const Logovan = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link text-muted" to="/profile">{korisnik.ime}</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="http://localhost:3000/login" onClick={this.onLogoutClick.bind(this)}>Odjava</a>
                </li>
            </ul>
        );

        const Nelogovan = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Registracija</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Prijava</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">Auto oglasi</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/cars"> Automobili
                                </Link>
                            </li>
                        </ul>
                        {isLogged ? Logovan : Nelogovan}
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    clearProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.authorization
})

export default connect(mapStateToProps, { logoutUser, clearProfile })(Navbar);