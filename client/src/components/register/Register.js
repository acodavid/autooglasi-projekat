import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {

    constructor() {
        super();
        this.state = {
            ime: '',
            email: '',
            lozinka: '',
            lozinka2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    componentDidMount() {
        if (this.props.auth.isLogged) {
            this.props.history.push('/profile')
        }
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

        const noviKorisnik = {
            ime: this.state.ime,
            email: this.state.email,
            lozinka: this.state.lozinka,
            lozinka2: this.state.lozinka2
        }

        this.props.registerUser(noviKorisnik, this.props.history);

    }

    render() {

        const { errors } = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <h3 className="mt-5 mb-3 text-center">Registracija</h3>
                            <form onSubmit={this.onSubmit} noValidate>
                                <div className="form-group">
                                    <input value={this.state.ime} onChange={this.onChange} type="text" className={classnames('form-control form-control-lg mb-1', {
                                        'is-invalid': errors.ime
                                    })} name="ime" id="ime" placeholder="Ime" />
                                    {errors.ime && (<div className="invalid-feedback">{errors.ime}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={this.state.email} onChange={this.onChange} type="email" className={classnames('form-control form-control-lg mb-1', {
                                        'is-invalid': errors.email
                                    })} name="email" id="email" placeholder="Email" />
                                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={this.state.lozinka} onChange={this.onChange} type="password" className={classnames('form-control form-control-lg mb-1', {
                                        'is-invalid': errors.lozinka
                                    })} name="lozinka" id="lozinka" placeholder="Lozinka" />
                                    {errors.lozinka && (<div className="invalid-feedback">{errors.lozinka}</div>)}
                                </div>
                                <div className="form-group">
                                    <input value={this.state.lozinka2} onChange={this.onChange} type="password" className={classnames('form-control form-control-lg mb-1', {
                                        'is-invalid': errors.lozinka2
                                    })} name="lozinka2" id="lozinka2" placeholder="Potvrdite lozinku" />
                                    {errors.lozinka2 && (<div className="invalid-feedback">{errors.lozinka2}</div>)}
                                </div>
                                <input type="submit" value="Registruj se" className="btn btn-primary btn-block mb-5" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.authorization,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));