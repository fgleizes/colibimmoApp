import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './ProjectDetail';
import CreateProject from './CreateProjectScreen';
import ProjectsScreenAchat from '../components/ProjectsListAchats';
import ProjectsScreenVentes from '../components/ProjectsListVentes';
import ProjectsScreenLocations from '../components/ProjectsListLocations';
import EditProject from './EditProject';

const Stack = createNativeStackNavigator();
  
const ProjectsScreen = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Achats">
                <Stack.Screen name="Achats" component={ProjectsScreenAchat} />
                <Stack.Screen name="Ventes" component={ProjectsScreenVentes} />
                <Stack.Screen name="Locations" component={ProjectsScreenLocations} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Create" component={CreateProject} />
                <Stack.Screen name="EditProject" component={EditProject} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default ProjectsScreen;

