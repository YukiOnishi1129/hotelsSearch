import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPlace, startSearch } from '../actions/';

const  SearchForm = props => (
    <form
        className="search-form" 
        onSubmit={(e) => {
            e.preventDefault();
            props.history.push(`/?place=${props.place}`)
            props.startSearch(e)
        }}
    >
        <input 
            className="place-input"
            type="text" 
            size="30"
            value={props.place} 
            onChange={(e) => {
                e.preventDefault();
                props.setPlace(e.target.value)
            }} 
        />
        <input className="submit-button" type="submit" value="検索"/>
    </form>
);

SearchForm.proptypes = {
    props: PropTypes.string.isRequired,
    setPlace: PropTypes.func.isRequired,
    startSearch: PropTypes.func.isRequired,
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

// stateをもらって、コンポーネントに必要なpropsに変換する
// const mapStateProps = state => ({
//     place: state.place,
// });
// dispatchをもらって、コンポーネントに必要なpropsに変換する
// const mapDispatchToProps = dispatch => ({
//     onPlaceChange: place => dispatch(setPlace(place)),
//     onSubmit: (place) => {
        
//     }
// });

// connect
// SearchPageコンポーネントとStoreを紐づけた状態で返す

export default connect(
    state => ({
        place: state.place,
    }),
    {setPlace, startSearch}
)(SearchForm);