import React from 'react'
import axios from 'axios'

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

export { getProductDetails, getQuickNotifications }
