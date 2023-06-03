import axios from "axios";

const baseUrl = "https://64789f21362560649a2e2597.mockapi.io/";
const config = { 'Content-Type': 'application/json' };

export const getTotlaUsers = ({filter = 'show all'}) => {

    let fetchParams;

    if (filter === 'follow') {
        fetchParams = { "following": false }
    }

    if (filter === 'show all') {
        fetchParams = { }
    }

    if (filter === 'followings') {
        fetchParams = { "following": true }
    }

    return axios.get(`${ baseUrl }users`, { params: fetchParams })
};

export const getAllUsers = ({ page, filter = 'show all'}) => {
    
    let fetchParams;

    if (filter === 'follow') {
        fetchParams = { "following": false, "page": page, "limit": 3 }
    }

    if (filter === 'show all') {
        fetchParams = { "page": page, "limit": 3 }
    }

    if (filter === 'followings') {
        fetchParams = { "following": true, "page": page, "limit": 3 }
    }

    return axios.get(`${ baseUrl }users`, { params: fetchParams })
};

export const updUserById = ({id, newData}) => axios.put(`${ baseUrl }users/${id}`, newData, config);