import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { View, Image,Text, StyleSheet,ScrollView,FlatList } from "react-native";
import Filtre from '../components/Filtre'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, Button } from 'react-native-elements'
import DetailsScreen from './ProjectDetail'
import {getProjects} from '../api/projectAPI'
import CreateProject from './CreateProjectScreen';
import {RenderProjectCard} from '../components/RenderProjectCard'
import { ProjectsScreen } from '../components/ProjectsList';
import {DefaultContainer} from '../components/DefaultContainer'


const Stack = createNativeStackNavigator();
  
export const Projects = () => {
    return (

            <NavigationContainer   independent={true}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen  name="Home" component={ProjectsScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Create" component={CreateProject} />
            </Stack.Navigator>
            </NavigationContainer>

    );
}





