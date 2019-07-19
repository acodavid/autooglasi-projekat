import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {

    constructor() {
        super();
        this.state = {
            korisnickoIme: '',
            brojTelefona: '',
            adresa: '',
            facebook: '',
            instagram: '',
            twitter: '',
            errors: {},
            showLinks: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const noviProfil = {
            korisnickoIme: this.state.korisnickoIme,
            brojTelefona: this.state.brojTelefona,
            adresa: this.state.adresa,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            twitter: this.state.twitter

        }

        this.props.createProfile(noviProfil, this.props.history);
    }

    onClick(e) {
        e.preventDefault();

        const { showLinks } = this.state;

        this.setState({
            showLinks: !showLinks
        })
    }

    render() {

        const { errors } = this.state;
        const { showLinks } = this.state;

        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <h3 className="text-center mb-3">Kreiranje profila</h3>
                            <form onSubmit={this.onSubmit} noValidate>
                                <div className="form-group">
                                    <input value={this.state.korisnickoIme} onChange={this.onChange} type="text" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.korisnickoIme })} name="korisnickoIme" id="korisnickoIme" placeholder="Korisnicko ime" />
                                    {errors.korisnickoIme && (<div className="invalid-feedback">{errors.korisnickoIme}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={this.state.brojTelefona} onChange={this.onChange} type="number" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.brojTelefona })} name="brojTelefona" id="brojTelefona" placeholder="Broj telefona" />
                                    {errors.brojTelefona && (<div className="invalid-feedback">{errors.brojTelefona}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={this.state.adresa} onChange={this.onChange} type="text" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.adresa })} name="adresa" id="adresa" placeholder="Adresa" />
                                    {errors.adresa && (<div className="invalid-feedback">{errors.adresa}</div>)}
                                </div>
                                <button onClick={this.onClick} className="btn btn-secondary btn-block mb-3">+ Linkovi drustvenih mreza (opciono)</button>
                                {showLinks ? (
                                    <div className="social-links">
                                        <div className="form-group">
                                            <input value={this.state.facebook} onChange={this.onChange} type="url" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.facebook })} name="facebook" id="facebook" placeholder="Facebook URL" />
                                            {errors.facebook && (<div className="invalid-feedback">{errors.facebook}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.instagram} onChange={this.onChange} type="url" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.instagram })} name="instagram" id="instagram" placeholder="Instagram URL" />
                                            {errors.instagram && (<div className="invalid-feedback">{errors.instagram}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.twitter} onChange={this.onChange} type="url" className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.twitter })} name="twitter" id="twitter" placeholder="Twitter URL" />
                                            {errors.twitter && (<div className="invalid-feedback">{errors.twitter}</div>)}
                                        </div>
                                    </div>
                                ) : null}
                                <button onSubmit={this.onSubmit} className="btn btn-primary btn-block">Kreiraj profil</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    createProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.authorization,
    errors: state.errors,
    profile: state.profile
});

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));