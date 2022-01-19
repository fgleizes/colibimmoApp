import React from "react";
import { View, Image,Text, StyleSheet,ScrollView } from "react-native";
import { Icon, Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function DetailsScreen({navigation}) {
  return (
    <>
      <Image style={styles.imgAmbiance} source={require ('../IMG/imgAppart.jpg')}/>
      <ScrollView style ={styles.ContainerCard}>
          {/* BOUTON RETOUR */}
        <View>
        <Button 
        icon={<Icon 
            name="arrow-back-ios"
                type="MaterialIcons"
                size={24}
                color="#4B4B4B"
            
            />}
        buttonStyle={styles.ButtonBack} title="Go back" onPress={() => navigation.goBack() } />
        </View>
        {/* ENTETE DECRIPTION PROJET */}
        
        <View style={styles.detailInfoProject}>
            <View style={styles.têteDetailProject}>
                <Text style={styles.RefDetailProject} >REF PROJECT</Text>
                <Text>CreateAt</Text>
            </View>
            <Text>Vente</Text>
            <Text>statut : en cours</Text>
            <Text>Monsieurs GLEIZE aimerais vendre son appartement à Versailles proche gare rive droite et proche d’une crèche.</Text>
        </View>
        {/* CTA PAGE PROFIL CONTACT  */}
        <View style={styles.detailContactProject}>
            <View style={styles.nomPrenom}><Text style={styles.prenom} >Florent </Text><Text style={styles.nom}>GLEIZE</Text></View>
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
                <View style={styles.typePropertyPrice}><Text style={styles.typePropertyTxt}>Appartement T2</Text><Text style={styles.pricePropertyTxt}>320000€</Text></View>
                <Text>45 m²</Text>
                <Text>2 ter rue du parc de Clagny</Text>
                <View style={styles.CpCity}><Text style={styles.CP}>78000</Text><Text>Versailles</Text></View>
                <Text style={styles.roomOptionTitle}>Room</Text>
                    <View style={styles.listOptionProperty}>
                        <Icon></Icon>
                    </View>
                <Text style={styles.roomOptionTitle}>Option</Text>
                    <View style={styles.listOptionProperty}>
                        <Icon   
                            name="eye"
                            type="feather"
                            size={24}
                            color="#fff">
                        </Icon>
                    </View>
            </View>
            <Button title="VOIR LES IMAGES" buttonStyle={styles.ctaShowImg}></Button>
        </View> 
        
        
      </ScrollView>
      </>
    );
  }

const styles = StyleSheet.create ({
    ContainerCard:{
        paddingTop:70,
        padding: 20,
    },

//styles DetailProject
    ButtonBack:{
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        paddingLeft:25,
    },
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