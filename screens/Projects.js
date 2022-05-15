import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { View, Image,Text, StyleSheet,ScrollView,FlatList } from "react-native";
import Filtre from '../components/Filtre'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, Button } from 'react-native-elements'
import DetailsScreen from './ProjectDetail'
// import {getProjects} from './api/projectAPI'
import {getProjects} from '../api/projectAPI'
import CreateProject from './CreateProjectScreen';
import {RenderProjectCard} from '../components/RenderProjectCard'
import { ProjectsScreenAchat } from '../components/ProjectsListAchats';
import { ProjectsScreenVentes } from '../components/ProjectsListVentes';
import { ProjectsScreenLocations } from '../components/ProjectsListLocations';
import {DefaultContainer} from '../components/DefaultContainer';
import EditProject from './EditProject';

const Stack = createNativeStackNavigator();
  
export const Projects = () => {
    return (

            <NavigationContainer   independent={true}>
            <Stack.Navigator initialRouteName="Achats">
                <Stack.Screen  name="Achats" component={ProjectsScreenAchat} />
                <Stack.Screen  name="Ventes" component={ProjectsScreenVentes} />
                <Stack.Screen  name="Locations" component={ProjectsScreenLocations} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Create" component={CreateProject} />
                <Stack.Screen name="EditProject" component={EditProject} />
            </Stack.Navigator>
            </NavigationContainer>

    );
}





