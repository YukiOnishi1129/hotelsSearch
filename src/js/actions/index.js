import { geocode } from '../domain/Geocoder';
import { searchHotelByLocation } from '../domain/HotelRepository';

export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place});

export const setErrorMessage = message => dispatch => dispatch({ type: 'CHANGE_ERROR_MESSAGE', message});

export const setHotels = hotels => dispatch => dispatch({ type: 'CHANGE_HOTELS', hotels});

export const setSortKey = sortKey => dispatch => dispatch({ type: 'CHANGE_SORT_KEY', sortKey});

export const startSearch = () => (dispatch, getState) => {
    if (getState().place == "") {
        dispatch(setErrorMessage('未入力です。'));
    } else {
        geocode(getState().place)
            .then(({status, address, location}) => {
                switch (status) {
                    case 'OK': {
                        dispatch({type: 'GEOCODE_FETCHED', address,location});
                        return searchHotelByLocation(location);
                    }
                    case 'REQUEST_DENIED': {
                        dispatch(setErrorMessage('結果が見つかりません。正しい所在地を入力してください。'));
                        break;
                    }
                    case 'ZERO_RESULTS': {
                        dispatch(setErrorMessage('結果が見つかりません。正しい所在地を入力してください。'));
                        break;
                    }
                    default : {
                        dispatch(setErrorMessage('エラーが発生しました'));
                    }
                }
                return [];
            })
            .then((hotels) => {
                dispatch(setHotels(hotels));
            })
            .catch(() => {
                dispatch(setErrorMessage('通信に失敗しました'));
            });
    }
    
}