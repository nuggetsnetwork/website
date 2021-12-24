import React from 'react'
import axios from 'axios'

const details = [
    // 'yt_channels',
    'sonyliv',
    'Netflix', ////netflix
    'netflix_india',
    'amazon_india',
    'amazon_prime',
    'zee5'
];
const baseUrl = 'https://nuggetsnetwork.com/Products/';
const getSonyLiv = () => {
    return axios.get(
        baseUrl + "sonyliv.json"
    );
}
const getNetflix = () => {
    return axios.get(
        baseUrl + "imdb_excel_2_json.json"
    );
}
const getNetflixIndia = () => {
    return axios.get(
        baseUrl + "netflix_india.json"
    );
}
const getAmazonPrime = () => {
    return axios.get(
        baseUrl + "amazon_prime.json"
    );
}
const getAmazonIndia = () => {
    return axios.get(
        baseUrl + "amazon_india.json"
    );
}
const getZee = () => {
    return axios.get(
        baseUrl + "zee5.json"
    );
}
const getProductDetails = () => {
    return axios.get(
        "https://nuggetsnetwork.com/Products/yt_channels.json"
    );
}

const getQuickNotifications = () => {
    let dataApi = [];

    for (let d of details) {
        dataApi.push(axios.get((baseUrl + d + '.json')));
    }
    dataApi.push(axios.get(
        baseUrl + "yt_channels.json"
    ));
    return axios.all(dataApi);
}
const getIcons = () => {
    return axios.get(
        baseUrl + "yt_channels.json"
    );
}

const getMoviesData = () => {
    return axios.get(
        // "https://nuggetsnetwork.com/Products/imdb_excel_2_json.json",
        "https://nuggetsnetwork.com/Products/netflix_sample.json"
        // "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
}

export { getProductDetails, getQuickNotifications, getMoviesData, getIcons,
    getSonyLiv,getNetflix, getAmazonIndia, getAmazonPrime,getNetflixIndia,getZee }
