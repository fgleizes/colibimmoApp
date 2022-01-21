import React from 'react';
import axios from 'axios';
import { View, Image,Text, StyleSheet,ScrollView } from "react-native";

// API URL FOR USER ROUTES
const API_URL = "http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/"

export const getProjects = () => {
    const URL = `${API_URL}project`
    return axios.get(URL)
        .then(response => {   
            return response
        })
        .catch(error => {
            console.log(error)
            console.log(error.response)
        })
}

export const getMainImageProject = (id_Project) => {
    const URL = `${API_URL}project/mainImage/${id_Project}`
    return axios.get(URL)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            console.log(error.response)
        })
}