import geolib from 'geolib';
import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = process.env.HOTEL_API_KEY;

export const searchHotelByLocation = location => {
    const params = {
        applicationId: RAKUTEN_APP_ID,
        datumType: 1,
        latitude: location.lat,
        longitude: location.lng
    };

    return Rakuten.Travel.simpleHotelSearch(params)
        .then((result) => {
            let hotels = [];
            result.data.hotels.map((hotel) => {
                const basicInfo = hotel.hotel[0].hotelBasicInfo;
                const distance = geolib.getDistance(
                    {latitude: location.lat, longitude: location.lng },
                    {latitude: basicInfo.latitude, longitude: basicInfo.longitude },
                )
                let data = {
                    id: basicInfo.hotelNo,
                    name: basicInfo.hotelName,
                    url: basicInfo.hotelInformationUrl,
                    thumbUrl: basicInfo.hotelThumbnailUrl,
                    price: basicInfo.hotelMinCharge,
                    reviewAverage: basicInfo.reviewAverage,
                    reviewCount: basicInfo.reviewCount,
                    distance,
                }
                hotels.push(data);
            });
            return hotels;

        });
};