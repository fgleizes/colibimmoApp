import React from "react";
import { View, Image,Text, StyleSheet,ScrollView } from "react-native";
import { Icon, Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateProject } from './CreateProjectScreen';

const Stack = createNativeStackNavigator();

// export const Projects = () => {
//     return (
//         <NavigationContainer independent={true}>
//         <Stack.Navigator initialRouteName="Home">
//             <Stack.Screen name="Home" component={DetailsScreen} />
//         </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

export default function DetailsScreen({navigation,route}) {
  const {idProject} = route.params
  const dataOptions = idProject.option_project
  const dataRooms = idProject.room_project
  console.log(dataOptions)
  return (
    <>
      <Image style={styles.imgAmbiance} source={require ('../IMG/imgAppart.jpg')}/>
      <ScrollView style ={styles.ContainerCard}>
          {/* BOUTON RETOUR */}
        <View style={styles.buttonsHeader}>
            <View style={styles.buttonLeft}>
                <Button 
                    icon={
                        <Icon 
                            name="arrow-back-ios"
                            type="MaterialIcons"
                            size={24}
                            color="#4B4B4B"
                        />
                    }
                    buttonStyle={styles.ButtonBack} title="" onPress={() => navigation.goBack() } 
                />
            </View>
            <View style={styles.ButtonsRight}>
                <View>
                    <Button 
                        icon={<Icon 
                            name="create"
                            type="MaterialIcons"
                            size={24}
                            color="#4B4B4B"
                        />
                    }
                    buttonStyle={styles.ButtonUpdate} title="" onPress={() => navigation.goBack() } />
                </View>
                <View>                    
                    <Button 
                        icon={<Icon 
                            name="delete-outline"
                            type="MaterialIcons"
                            size={26}
                            color="#4B4B4B"
                        />
                    }
                    buttonStyle={styles.ButtonDelete} title="" onPress={() => navigation.goBack() } />
                </View>
                <View>
                    <Button 
                        icon={<Icon 
                            name="add"
                            type="MaterialIcons"
                            size={30}
                            color="#4B4B4B"
                        />
                    }
                    buttonStyle={styles.ButtonCreate} title="" onPress={() => navigation.navigate("Create")} />
                </View>
            </View>
        </View>
        
        {/* ENTETE DECRIPTION PROJET */}
        
        <View style={styles.detailInfoProject}>
            <View style={styles.têteDetailProject}>
                <Text style={styles.RefDetailProject} >{idProject.reference}</Text>
                <Text>{idProject.created_at}</Text>
            </View>
            <Text>type : {idProject.id_Type_project.name}</Text>
            <Text>status : {idProject.id_Statut_project.name}</Text>
            <Text>{idProject.description}</Text>
        </View>
        {/* CTA PAGE PROFIL CONTACT  */}
        <View style={styles.detailContactProject}>
            <View style={styles.nomPrenom}><Text style={styles.prenom} >{idProject.id_Person.firstname} </Text><Text style={styles.nom}>{idProject.id_Person.lastname}</Text></View>
            <Button 
           icon={<Icon 
            name="eye"
                type="feather"
                size={24}
                color="#fff"
            />}
                buttonStyle={styles.IconContact} 
                type="clear"
                onPress={() => navigation.navigate('Details')} 
            />
        </View>
        {/* DESCRIPTION PROPERTY */}
        <View style={styles.propertyInfoCta}>
            <View style={styles.propertyInfo}>
                <View style={styles.typePropertyPrice}>
                  <Text style={styles.typePropertyTxt}>Appartement T2</Text><Text>{idProject.area}m²</Text>
                  <Text style={styles.pricePropertyTxt}>{idProject.price} €</Text>
                </View>

                
                <Text>{idProject.id_Address.number} {idProject.id_Address.street}</Text>

                <View style={styles.CpCity}>
                  <Text style={styles.CP}>{idProject.id_Address.City.zip_code}</Text>
                  <Text>{idProject.id_Address.City.name}</Text>
                </View>

                <Text style={styles.roomOptionTitle}>Room</Text>

                <View style={styles.listOptionProperty}>
                    {/* <Icon></Icon>
                     */}
                    {dataRooms.map(room =>
                        <Text>{room.name} {room.area}m² | </Text>
                    )}
                </View>


                <Text style={styles.roomOptionTitle}>Option</Text>

                <View style={styles.listOptionProperty}>
                    {/* <Icon   
                        name="eye"
                        type="feather"
                        size={24}
                        color="#fff">
                    </Icon> */}
                    {dataOptions.map(option => 
                      <Text>{option.name} | </Text>
                    )}
                </View>
            </View>
            <Button title="VOIR LES IMAGES" buttonStyle={styles.ctaShowImg}></Button>
        </View> 
        <View style={styles.gestionAgent}>
            <Text style={styles.gestionAgentText}>Bien géré par {idProject.id_PersonAgent.firstname} {idProject.id_PersonAgent.lastname}</Text>
        </View>
        
        
      </ScrollView>
      </>
    );
  }

const styles = StyleSheet.create ({
    ContainerCard:{
        paddingTop:70,
        padding:20,
    },

//Icon header


    ButtonsRight:{
        flexDirection:'row',
    },

    buttonLeft:{
        flexDirection:'row',
    },

    buttonsHeader:{
        flexDirection:'row',
        justifyContent:"space-between",
    },

    

    ButtonBack:{
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        paddingLeft:15,
    },

    ButtonDelete:{
        marginLeft:20,
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        // paddingLeft:22,
    },

    ButtonUpdate:{
        marginLeft:20,
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        // paddingLeft:22,
    },

    ButtonCreate:{
        marginLeft:20,
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        // paddingLeft:21,
    },

//gestion Agent

    gestionAgent:{
        marginTop:20,
        
    },

    gestionAgentText:{
        fontSize:18,
        fontWeight:"bold",
    },

//styles DetailProject
    
    detailInfoProject:{
        backgroundColor:'white',
        marginTop:20,
        padding:10,
        flexDirection:'column',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
    têteDetailProject:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },

    RefDetailProject:{
        fontWeight:'bold',
    },
    detailContactProject:{
        flexDirection:'row',
        marginTop:10,
        padding:10,
        backgroundColor:'#F27405',
        borderRadius:10,
        
    },
    prenom:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        
    },
    nom:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        
    },
    IconContact:{
        position:'relative',
        
    },
    nomPrenom:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
    },
    imgAmbiance:{
        position:'absolute',
        top:-250,
        opacity:0.7,
    },

    // STYLES PROPERTY INFO 

    propertyInfoCta:{
        
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        
        marginTop:10,
    },
    propertyInfo:{
        padding:10,
    },

    typePropertyPrice:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    typePropertyTxt:{
        fontWeight:'bold',
    },
    pricePropertyTxt:{
        fontWeight:'bold',
        fontSize:16,
    },
    CpCity:{
        flexDirection:'row',
        
    },
    CP:{
        marginRight:5,
    },
    ctaShowImg:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#F27405',
    },
    roomOptionTitle:{
        fontWeight:'bold',
        marginTop:10,
    },
    listOptionProperty:{
        flexDirection:'row',
    }
})