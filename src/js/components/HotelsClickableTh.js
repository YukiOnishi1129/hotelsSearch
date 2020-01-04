import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSortKey } from '../actions/'

const HotelsClickableTh = props => (
            <th
                 className="hotels-clickable-th"
                 onClick={() => props.setSortKey(props.sortKey)}>
                {props.label}{props.isSelected ? (props.sortKey ==='reviewAverage' || props.sortKey ==='reviewCount' ? '▼' : '▲') : ''}
            </th>
);

HotelsClickableTh.prototype = {
    label: PropTypes.string.isRequired,
    sortKey: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    setSortKey: PropTypes.func.isRequired
};


export default connect(
    (state, ownProps) => ({
        isSelected: ownProps.sortKey === state.sortKey,
    }),
    {setSortKey},
)(HotelsClickableTh);