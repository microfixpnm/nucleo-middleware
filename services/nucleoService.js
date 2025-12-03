// services/nucleoService.js
const axios = require('axios');
require('dotenv').config();

const nucleoApi = axios.create({
    baseURL: process.env.NUCLEO_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Ejemplo: obtener datos desde Nucleo
 */
async function getDataFromNucleo(endpoint) {
    try {
        const response = await nucleoApi.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("Error al consultar Nucleo:", error.message);
        throw error;
    }
}

/**
 * Ejemplo: enviar datos hacia Nucleo
 */
async function sendDataToNucleo(endpoint, payload) {
    try {
        const response = await nucleoApi.post(endpoint, payload);
        return response.data;
    } catch (error) {
        console.error("Error al enviar datos a Nucleo:", error.message);
        throw error;
    }
}

module.exports = {
    getDataFromNucleo,
    sendDataToNucleo
};