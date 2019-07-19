import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteProfile } from '../../actions/profileActions';
import prazan from '../../validation/prazan';
import fidgetspinner from '../../img/fidgetspinner.gif';

class Profile extends Component {

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteProfile();
    }

    render() {

        const { korisnik } = this.props.auth;
        const { profile } = this.props.profile;


        let content;

        if (profile === null) {
            content = <img className="m-auto" style={{ width: '300px', display: 'block' }} src={fidgetspinner} alt="Ucitavanje" />
        } else {
            if (Object.keys(profile).length > 0) {
                content = (
                    <div className="container mt-5 mb-5">
                        <table className="table table-hover">
                            <tbody>
                                <tr className="table-light">
                                    <td>Ime:</td>
                                    <td>{profile.korisnik.ime}</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td>Broj telefona:</td>
                                    <td>{profile.brojTelefona}</td>
                                </tr>
                                <tr className="table-light">
                                    <td>Adresa:</td>
                                    <td>{profile.adresa}</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td>Korisnicko ime:</td>
                                    <td>{profile.korisnickoIme}</td>
                                </tr>
                            </tbody>
                        </table>
                        {!prazan(profile.linkovi) ? (
                            <p className="text-muted text-center mb-2">Linkovi drustvenih mreza:</p>
                        ) : null}

                        <div className="container">
                            <div className="row">
                                <div className="col-md-9 m-auto">
                                    {prazan(profile.linkovi && profile.linkovi.facebook) ? null : (
                                        <a className="text-white p-2 m-auto" href={profile.linkovi.facebook} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook fa-2x" /> Facebook
                                             </a>
                                    )}
                                    {prazan(profile.linkovi && profile.linkovi.instagram) ? null : (
                                        <a className="text-white p-2 m-auto" href={profile.linkovi.instagram} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram fa-2x" /> Instagram
                                            </a>
                                    )}
                                    {prazan(profile.linkovi && profile.linkovi.twitter) ? null : (
                                        <a className="text-white p-2 m-auto" href={profile.linkovi.twitter} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-twitter fa-2x" /> Twitter
                                            </a>
                                    )}
                                </div>

                            </div>
                            <Link to="/edit/profile" className="btn btn-primary btn-block mt-3 mb-2">Izmeni</Link>
                            <button type="button" className="btn btn-danger btn-block mb-5" onClick={this.onDeleteClick.bind(this)}>Izbriši profil i nalog</button>
                        </div>
                    </div>
                )
            } else {
                content = (
                    <div className="container">
                        <p className="lead text-center mt-5">Dobrodošli na našu stranicu, {korisnik.ime}</p>
                        <p className="lead text-center">Nemate profil, kliknite i popunite ga vašim podacima</p>
                        <Link to="/create/profile" className="btn btn-primary btn-block mb-5">Popuni podatke</Link>
                    </div>
                );
            }
        }

        return (
            <div className="profil">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.authorization
})

export default connect(mapStateToProps, { getCurrentProfile, deleteProfile })(Profile);


