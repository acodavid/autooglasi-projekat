import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profileActions';
import prazan from '../../validation/prazan'

class SingleProfile extends Component {

    componentDidMount() {
        this.props.getProfileById(this.props.match.params.user_id);
    }

    render() {

        const { profile } = this.props.profile;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

SingleProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    getProfileById: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfileById })(SingleProfile);