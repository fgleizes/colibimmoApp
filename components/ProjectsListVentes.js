import React, { useState,useEffect, useContext } from 'react';
import { View, Image,Text, StyleSheet,ScrollView,FlatList, Button } from "react-native";
import Filtre from './Filtre'
import {getProjects, getProjectsVentes} from '../api/projectAPI'
import {RenderProjectCard} from './RenderProjectCard'
import { UserContext } from '../user-context';
import { getProfile } from '../api/userAPI';
export const ProjectsScreenVentes = ({navigation}) => {
    const [listProjects, setListProjects] = useState({})
    const Context = useContext(UserContext);
    const token = Context.token;
    


    
    useEffect(() => {
        if(token) {
            getProjectsVentes(token)
                .then(response =>{
                    if(response.status === 200){
                        setListProjects(response.data)
                        
                    }
                })
        }
    }, [token]);

return (
        
        <View style={stylesListItem.ContainerCard}>
        {/* FILTRE CARD PROJECT */}
        <Filtre navigation={navigation}></Filtre>
        {/* LISTE CARDS PROJECT  */}
        <FlatList  data={listProjects}
            renderItem={({item}) => <RenderProjectCard navigation={navigation} item={item} idProject={item} />}
            keyExtractor={item=>item.id}
        />
        </View>
    
  );
}

const stylesListItem = StyleSheet.create ({
    ContainerCard:{
        paddingTop: 35,
        paddingBottom:60,
        padding:20,
        minHeight: 600
    }
})