import React from 'react';
import axios from 'axios';
import { View, Image,Text, StyleSheet,ScrollView } from "react-native";
import { getProfile } from './userAPI';

// API URL FOR USER ROUTES
const API_URL = "http://api.colibimmo.cda.ve.manusien-ecolelamanu.fr/public/"

export const getProjectsAchat = (token) => {
    const URL = `${API_URL}project/projectsByTypeByAuthAgent/1`
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
 

export const getProjectsVentes = (token) => {
    const URL = `${API_URL}project/projectsByTypeByAuthAgent/2`
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

export const getProjectsLocations = (token) => {
    const URL = `${API_URL}project/projectsByTypeByAuthAgent/3`
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

export const getNotesProject = (token,idNote) => {
    const URL = `${API_URL}note/showByProject/${idNote}`
    return axios.get(URL,{
        headers: { Authorization: `Bearer ${token}` }
    }).then(response => {   
        return response
    })
    .catch(error => {
        console.log(error)
        console.log(error.response)
    })
}

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
