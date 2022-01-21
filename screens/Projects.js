import React, { useState,useEffect } from 'react';
import { View, Image,Text, StyleSheet,FlatList } from "react-native";
import Filtre from '../components/Filtre'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, Button } from 'react-native-elements'
import DetailsScreen from './ProjectDetail'
import {getProjects, getMainImageProject} from '../api/projectAPI'
import { CreateProject } from './CreateProjectScreen';


const Stack = createNativeStackNavigator();
  
export const Projects = () => {
    return (
        <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={ProjectsScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Create" component={CreateProject} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
const RenderProjectCard = ({item,navigation,idProject}) => {
    // const [mainImageProject, setmainImageProject] = useState()

    // useEffect(() => {
    //     getMainImageProject(item.id)
    //         .then(response => {
    //             if (response.status === 200) {
    //                 setmainImageProject(response.data)
    //                 console.log(mainImageProject)
    //             }
    //         })
    // }, []);
    return (
        <View style ={stylesListItem.Card}>   
            <Image style={stylesListItem.Img} source={require ('../IMG/imgAppart.jpg')}/>
            <View style={stylesListItem.Info}>
                <View style={stylesListItem.Txt}>
                    <Text style={stylesListItem.Ref} name="referenceProjet">{item.reference}</Text>
                    <View style={stylesListItem.nomPrenom} name="nomPrenom"><Text style={{marginRight:5}} name="prenom">{item.id_Person.firstname}</Text><Text name="nom">{item.id_Person.lastname}</Text></View>
                    <View style={stylesListItem.adresse} name="adresse"><Text style={{marginRight:5}} name="adresseCodePostal">{item.id_Address.City.zip_code}</Text><Text name="adresseVille">{item.id_Address.City.name}</Text></View>
                    <View style={stylesListItem.propertyInfo} name="propertyInfo"><Text style={{marginRight:5}} name="typeProperty">Appartement T2</Text><Text name="propertyArea">{item.area}</Text></View>
                </View>
                {/* BOUTON TO DETAIL PROJECT  */}
            <Button 
            icon={<Icon 
                name="eye"
                    type="feather"
                    size={24}
                    color="#F27405"
                
                />}
                    buttonStyle={stylesListItem.Icon} 
                    type="clear"
                    onPress={() => navigation.navigate('Details',{idProject : idProject})} 
                />
            </View>
        </View>
    )
}

const ProjectsScreen = ({navigation}) => {
    const [listProjects, setListProjects] = useState({})

    useEffect(() => {
        getProjects()
            .then(response =>{
                if(response.status === 200){
                    setListProjects(response.data)
                    console.log(listProjects)
                }
            })
    }, []);

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
        // paddingLeft:20,
        // paddingRight:20,
        paddingBottom:60
    },

   
    Card:{
        flexDirection:'row',
        
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        borderRadius:10,
        maxHeight:150,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        
    },
    nomPrenom:{
        flexDirection:'row',
    },
    adresse:{
        flexDirection:'row',
    },
    propertyInfo:{
        flexDirection:'row',
    },
    
    Ref:{
        fontSize:12,
        fontWeight:'bold',
    },
    Prenom:{
        fontSize:12,
    },
    Nom:{
        fontSize:12,
    },
    adresseCodePostal:{
        fontSize:10,
    },
    adresseVille:{
        fontSize:10,
    },
    propertyArea:{
        fontSize:10,
    },
    typeProperty:{
        fontSize:10,
    },
    
    Img:{
        flex:0.36,
        borderRadius:10,
        maxHeight:120,
        
    },
    Txt:{
        flex:1,
        maxHeight:100,
        margin:10,
        fontFamily:'arial',
    },
    Info:{
        flexDirection:'column',
        flex:0.64,
        maxHeight:120
    },

    Icon:{
        textAlign:'right',
        alignSelf: 'flex-end',
        margin:10,
        
    }

})
