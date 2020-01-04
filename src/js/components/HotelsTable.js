import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

const HotelsTable = ({ hotels }) => (
   <table className="table">
       <tbody>
        <tr>
            <th className="table--image">画像</th>
            <th className="table--name">ホテル名</th>
            <HotelsClickableTh 
                label='値段'
                sortKey='price'
            />
            <HotelsClickableTh 
                label='レビュー'
                sortKey='reviewAverage'
            />
            <HotelsClickableTh 
                label='レビュー件数'
                sortKey='reviewCount'
            />
            <HotelsClickableTh 
                label='距離'
                sortKey='distance'
            />
        </tr>
        {hotels.map(hotel => (<HotelRow key={hotel.id} hotel={hotel} />))}
       </tbody>
   </table>
);

HotelsTable.proptypes = {
    hotels: PropTypes.objectOf(PropTypes.any)
};

HotelsTable.defaultProps = {
    hoels: [],
}

const sortedHotels = (hotels, sortKey) => {
    if(sortKey === 'reviewAverage' || sortKey === 'reviewCount') {
        return _.sortBy(hotels, h => h[sortKey]).reverse();
    } else {
        return  _.sortBy(hotels, h => h[sortKey]);
    }
}

export default connect(
    state => ({
        hotels: sortedHotels(state.hotels, state.sortKey),
    }),
)(HotelsTable);