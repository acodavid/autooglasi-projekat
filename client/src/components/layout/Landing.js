import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

    componentDidMount() {
        if (this.props.auth.isLogged) {
            this.props.history.push('/cars')
        }
    }

    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">

                                <h1 className="display-3 text-info mb-4">Auto oglasi</h1>
                                <p className="lead text-info"> Prodaja i kupovina automobila</p>

                                <hr />
                                <Link to="/register" className="btn btn-lg btn-primary mr-3">Registracija</Link>
                                <Link to="/login" className="btn btn-lg btn-primary">Prijava</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.authorization
});

export default connect(mapStateToProps)(Landing);