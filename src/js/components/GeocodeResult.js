import React from 'react';
import PropTypes from 'prop-types';

const GeocodeResult = ({ address }) => (
    <ul className="geocode--result">
        <li className="geocode--result__address">住所：{address}</li>
    </ul>
);

GeocodeResult.proptypes = {
    address: PropTypes.string,
    location: PropTypes.objectOf(PropTypes.number).isRequired,
};

GeocodeResult.defaultProps = {
    address: '',
}


export default GeocodeResult;