import React from 'react'
import axios from 'axios'

const details = [
    // 'yt_channels',
    'sonyliv',
    'imdb_excel_2_json',
    'netflix_india',
    'amazon_india',
    'amazon_prime',
    'zee5'
];
const baseUrl = 'https://nuggetsnetwork.com/Products/';

const getProductDetails = () => {
    return axios.get(
        "https://nuggetsnetwork.com/Products/yt_channels.json"
    );
}
const getQuickNotifications = () => {
    return axios.get(
        "https://nuggetsnetwork.com/Products/sonyliv.json"
    );
}

const getYTdetails =() => {
    let dataApi = [];
    for (let d of details) {
        dataApi.push(axios.get((baseUrl + d + '.json')));
    }
    return axios.all(dataApi);
}

const getMoviesData = () => {
    return axios.get(
        // "https://nuggetsnetwork.com/Products/imdb_excel_2_json.json",
        "https://nuggetsnetwork.com/Products/netflix_sample.json"
        // "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
}

export { getProductDetails, getQuickNotifications, getMoviesData, getYTdetails }
