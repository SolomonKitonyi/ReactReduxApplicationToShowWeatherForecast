const API_KEY = '479cc304cdf180e956492746c005a29c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `{ROOT_URL}&q={city},Kenya`
    return{
        type:FETCH_WEATHER,

    }
}