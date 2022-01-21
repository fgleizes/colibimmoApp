import React, { useState,useEffect } from 'react';
import { View, Image,Text, StyleSheet,ScrollView,FlatList } from "react-native";
import Filtre from './Filtre'
import {getProjects} from '../api/projectAPI'
import {RenderProjectCard} from './RenderProjectCard'

export const ProjectsScreen = ({navigation}) => {
    const [listProjects, setListProjects] = useState({})
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTY0MjQxNzI1OCwiZXhwIjoxNjQyNDIwODU4LCJuYmYiOjE2NDI0MTcyNTgsImp0aSI6IkVLY3NGVGFaNlRiRjBBb1EiLCJzdWIiOjIzLCJwcnYiOiJhMzRmNDg4NzQ3YzQxZjFkMWEwMzU1ODQxNjYzZmFmMTkyNzAzYTJiIn0.vYJip9X97-01Tor6cKctBdnvTY4QpzD-ihZtX8my9ds"

    useEffect(() => {
        if(token) {
            getProjects(token)
                .then(response =>{
                    if(response.status === 200){
                        setListProjects(response.data)
                        console.log(listProjects)
                    }
                })
        }
    }, [token]);

return (
        
        <View style={stylesListItem.ContainerCard}>
        {/* FILTRE CARD PROJECT */}
        <Filtre></Filtre>
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
        paddingTop:70,
        paddingBottom:60,
        padding:20,
    }
})