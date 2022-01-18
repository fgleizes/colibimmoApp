import React from 'react';
import axios from 'axios';
import { View, Image,Text, StyleSheet,ScrollView } from "react-native";

// API URL FOR USER ROUTES
const API_URL = "http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/"

export const getProjects = (token) => {
    const URL = `${API_URL}project`
    return axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` }
    }).then(response => {   
        return response
    })
    .catch(error => {
        console.log(error)
        console.log(error.response)
    })
}
