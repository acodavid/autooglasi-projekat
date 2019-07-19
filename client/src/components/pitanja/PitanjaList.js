import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pitanje from './Pitanje';

class PitanjaList extends Component {
    render() {
        const { pitanja, carId } = this.props;

        return pitanja.map(stavka => (
            <Pitanje key={stavka._id} pitanja={stavka} carId={carId} />
        ));
    }
}

PitanjaList.propTypes = {
    pitanja: PropTypes.array.isRequired,
    carId: PropTypes.string.isRequired
};

export default PitanjaList;