import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ hotel }) => (
   <tr className="table__tr">
       <td className="table--image"><img src={hotel.thumbUrl} alt={hotel.name} /></td>
       <td className="table--name"><a href={hotel.url} target="_blank">{hotel.name}</a></td>
       <td className="hotel-price-column">{hotel.price ? `${hotel.price}円` : '空室なし'}</td>
       <td className="hotel-price-column">{hotel.reviewAverage}</td>
       <td className="hotel-price-column">{hotel.reviewCount ? `${hotel.reviewCount}件` : '0件' }</td>
       <td className="hotel-price-column">{hotel.distance}m</td>
   </tr>
);

HotelRow.proptypes = {
    hoel: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
        thumbUrl: PropTypes.string,
        price: PropTypes.number,
        reviewAverage: PropTypes.number,
        reviewCount: PropTypes.number,
        distance: PropTypes.number,
    }).isRequired
};


export default HotelRow;