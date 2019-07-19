import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCars } from '../../actions/carActions';
import Car from './Car';
import fidgetspinner from '../../img/fidgetspinner.gif';



class Cars extends Component {

    componentDidMount() {
        this.props.getCars();
    }

    render() {

        const { cars } = this.props.cars;

        let carItem;

        if (cars === null) {
            carItem = <img className="m-auto" style={{ width: '300px', display: 'block' }} src={fidgetspinner} alt="Ucitavanje" />
        } else {

            if (cars.length > 0) {
                carItem = cars.map(car => (
                    <Car key={car._id} cars={car} />
                ))
            } else {
                carItem = <h3 className="text-center">Nema automobila u ponudi</h3>
            }

        }

        return (
            <div className="cars-display">
                <div className="container">
                    <Link className="btn btn-primary btn-block mb-5" to="/add/car">Dodaj automobil</Link>
                    {carItem}
                </div>
            </div>
        )
    }
}

Cars.propTypes = {
    cars: PropTypes.object.isRequired,
    getCars: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    cars: state.cars
});

export default connect(mapStateToProps, { getCars })(Cars);