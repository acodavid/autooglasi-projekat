import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteQuestion } from '../../actions/carActions';

class Pitanje extends Component {

    onDeleteClick(carId, pitanjeId) {
        this.props.deleteQuestion(carId, pitanjeId);
    }

    render() {


        const { pitanja, carId, auth, cars } = this.props;
        const { datum } = this.props.pitanja;

        let hour = parseInt(datum.slice(11, 13)); // 14, 16 minute
        if (hour < 22) {
            hour = hour + 2;
        } else if (hour === 22) {
            hour = 0;
        } else if (hour === 23) {
            hour = 1;
        }

        const minutes = datum.slice(14, 16);



        return (
            <div className="container mt-3 mb-3">
                <div className="card card-secondary">

                    {cars.car.korisnik === pitanja.korisnik ? (
                        <div className="card-header bg-primary text-white">
                            <p className="lead" style={{ fontSize: '18px' }}>{pitanja.ime} {pitanja.korisnik === auth.korisnik.id ? (
                                <button
                                    onClick={this.onDeleteClick.bind(this, carId, pitanja._id)}
                                    type="button"
                                    className="btn btn-danger"
                                    style={{ float: 'right' }}
                                >
                                    <i className="fas fa-times" />
                                </button>
                            ) : null}</p>

                        </div>)
                        : (
                            <div className="card-header bg-secondary text-white">
                                <p className="lead m-auto" style={{ fontSize: '18px' }}>{pitanja.ime} {pitanja.korisnik === auth.korisnik.id ? (
                                    <button
                                        onClick={this.onDeleteClick.bind(this, carId, pitanja._id)}
                                        type="button"
                                        className="btn btn-danger"
                                        style={{ float: 'right' }}
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                ) : null}</p>

                            </div>)}


                    <div className="card-body">
                        <p className="lead">{pitanja.tekst}</p>
                    </div>
                    <div className="card-footer">
                        <p className="text-muted m-auto" style={{ display: "inline-block" }}>{datum.slice(8, 10) + '.' + datum.slice(5, 7) + '.' + datum.slice(0, 4) + '.'}</p>
                        <p className="text-muted m-auto" style={{ float: "right" }}>{hour + ':' + minutes}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Pitanje.propTypes = {
    pitanja: PropTypes.object.isRequired,
    carId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired,
    cars: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.authorization,
    cars: state.cars
});

export default connect(mapStateToProps, { deleteQuestion })(Pitanje);