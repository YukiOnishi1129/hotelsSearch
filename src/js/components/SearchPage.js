import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import GeocodeResult from './GeocodeResult';
// import Map from './Map';
import HotelsTable from './HotelsTable';
import { startSearch } from '../actions/';

class SearchPage extends Component {

    componentDidMount() {
        this.props.dispatch(startSearch());
    }

    render() {
        return (
            <div>
                <h1 className="app--title">ホテル検索</h1>
                <SearchForm history={this.props.history} />
                <div>
                    <GeocodeResult 
                        address={this.props.geocodeResult.address}
                        location={this.props.geocodeResult.location}
                    />
                        <h2 className="result--title">ホテル検索結果</h2>
                    <HotelsTable />
                </div>
            </div>
        );
    }
}

SearchPage.proptypes = {
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
    location: PropTypes.shape({ search: PropTypes.string }).isRequired,
    geocodeResult: PropTypes.shape({ 
        address: PropTypes.string.isRequired,
        location: PropTypes.shape({ 
            lat: PropTypes.number.isRequired,
            lng: PropTypes.number.isRequired,
         }).isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
}

const mapStateProps = state => ({
    geocodeResult: state.geocodeResult,
});

export default connect(mapStateProps)(SearchPage);