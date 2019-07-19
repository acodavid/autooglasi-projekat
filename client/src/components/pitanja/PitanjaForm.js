import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { addQuestion } from '../../actions/carActions'

class PitanjaForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tekst: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.errors) {
            this.setState({ errors: newProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const { korisnik } = this.props.auth;
        const { carId } = this.props;

        const newQuestion = {
            tekst: this.state.tekst,
            ime: korisnik.ime,
        };

        this.props.addQuestion(carId, newQuestion);
        this.setState({ tekst: '' });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {

        const { errors, tekst } = this.state;

        return (
            <div className="question-form">
                <div className="container">
                    <div className="card card-primary">
                        <div className="card-header bg-secondary text-white">
                            Pitanja i odgovori
                </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <textarea className={classnames('form-control form-control-lg mb-1', { 'is-invalid': errors.tekst })} name="tekst" id="tekst" cols="30" rows="2" onChange={this.onChange} value={tekst} placeholder="Unesite tekst"></textarea>
                                    {errors.tekst && (<div className="invalid-feedback">{errors.tekst}</div>)}
                                </div>
                                <button type="submit" className="btn btn-primary">Postavi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PitanjaForm.propTypes = {
    addQuestion: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    carId: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.authorization,
    errors: state.errors
})

export default connect(mapStateToProps, { addQuestion })(PitanjaForm); 
