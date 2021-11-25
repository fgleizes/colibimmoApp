import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'

const CardComponent = () => (
    <View style ={stylesCard.Card}>
        
        <Image style={stylesCard.Img} source={require ('../IMG/imgAppart.jpg')}/>
        <View style={stylesCard.Info}>
            <View style={stylesCard.Txt}>
                <Text style={stylesCard.Ref} name="referenceProjet">FG73653</Text>
                <View style={stylesCard.nomPrenom} name="nomPrenom"><Text style={{marginRight:5}} name="prenom">Florent</Text><Text name="nom">GLEIZE</Text></View>
                <View style={stylesCard.adresse} name="adresse"><Text style={{marginRight:5}} name="adresseCodePostal">78000</Text><Text name="adresseVille">Versailles</Text></View>
                <View style={stylesCard.propertyInfo} name="propertyInfo"><Text style={{marginRight:5}} name="typeProperty">Appartement T2</Text><Text name="propertyArea">36 m²</Text></View>
            </View>
            
            <Icon style={stylesCard.Icon} name="eye" type="feather" size={24} color="#F27405"  />
            
        </View>
    </View>
);


const stylesCard = StyleSheet.create ({
    Card:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
        borderRadius:20,
        maxHeight:100,
        
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
        borderRadius:20,
        maxHeight:100,
        
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
    },

    Icon:{
        // flex:1,
        textAlign:'right',
        alignSelf: 'flex-end',
        margin:10
    }

})


export default CardComponent;
