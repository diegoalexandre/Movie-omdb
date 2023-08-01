import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const searchMovies = async (query) => {
    try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${query}`);
        return response.data.Search || [];
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};

export const getDetails = async (imdbID) => {
    try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${imdbID}`);
        return response.data || null;
    } catch (error) {
        console.error('Error getting movie details:', error);
        return null;
    }
};


export const setLocalStorage = (indice, data) => {
    try {
        localStorage.setItem(indice, data);
    } catch (error) {
        console.error('Error getting localstorage:', error);
    }
};

export const getLocalStorage = (data) => {
    try {
        const response = localStorage.getItem(data.toString());
        return response;
    } catch (error) {
        console.error('Error getting localstorage:', error);
    }
};