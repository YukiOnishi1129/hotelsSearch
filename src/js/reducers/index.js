import { combineReducers } from 'redux';
import querySting from 'query-string';

const getPlaceParam = () => {
    const params = querySting.parse(location.search);
    const place = params.place;
    if (place && place.length > 0) {
        return place;
    }
    return null;
}

// place用のreducer
const place =(state = getPlaceParam() || '東京タワー', action) => {
    switch (action.type) {
        case 'CHANGE_PLACE' :
            return action.place;
        default:
            return state;
    }
};

// geodoce用のreducer
const geocodeResult =(
        state = {
            address: '',
            location: {
                lat: 35.6585805,
                lng: 139.7454329,
            },
        },
        action
    ) => {
    switch (action.type) {
        case 'GEOCODE_FETCHED' :
            return {
                address: action.address,
                location: action.location
            };
        case 'CHANGE_ERROR_MESSAGE' :
            return {
                address: action.message,
                location: { lat: 0, lng: 0 }
            };
        default:
            return state;
    }
};

// hotels用のreducer
const hotels =(state =[], action) => {
    switch (action.type) {
        case 'CHANGE_HOTELS' :
            return action.hotels;
        default:
            return state;
    }
};

// sortkey用のreducer
const sortKey =(state ='price', action) => {
    switch (action.type) {
        case 'CHANGE_SORT_KEY' :
            return action.sortKey;
        default:
            return state;
    }
};

export default combineReducers({place, geocodeResult, hotels, sortKey});