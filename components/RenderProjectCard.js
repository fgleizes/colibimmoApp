import React from 'react';
import { View, Image,Text, StyleSheet } from "react-native";
import { Icon, Button } from 'react-native-elements';

export function RenderProjectCard({item,navigation,idProject})  {
    return (
        <View style ={stylesListItem.Card}>   
            <Image style={stylesListItem.Img} source={require ('../IMG/imgAppart.jpg')}/>
            <View style={stylesListItem.Info}>
                <View style={stylesListItem.Txt}>
                    <Text style={stylesListItem.Ref} name="referenceProjet">{item.reference}</Text>
                    <View style={stylesListItem.nomPrenom} name="nomPrenom">
                        <Text style={{marginRight:5}} name="prenom">{item.person.firstname}</Text>
                        <Text name="nom">{item.person.lastname}</Text>
                    </View>
                    { item.address && 
                        <View style={stylesListItem.adresse} name="adresse">
                            <Text style={{marginRight:5}} name="adresseCodePostal">{item.address.city.zip_code}</Text>
                            <Text name="adresseVille">{item.address.city.name}</Text>
                        </View>
                    }
                    <View style={stylesListItem.propertyInfo} name="propertyInfo">
                        <Text style={{marginRight:5}} name="typeProperty">{/*item.type.property.name*/}Appartement</Text>
                        <Text name="propertyArea">{item.area} m2</Text>
                    </View>
                </View>
                {/* BOUTON TO DETAIL PROJECT  */}
                <Button 
                    icon={
                        <Icon 
                            name="eye"
                            type="feather"
                            size={24}
                            color="#F27405"
                        />
                    }
                    buttonStyle={stylesListItem.Icon} 
                    type="clear"
                    onPress={() => navigation.navigate('Details',{idProject : idProject})} 
                />
            </View>
        </View>
    )
}

const stylesListItem = StyleSheet.create ({
    ContainerCard:{
        paddingTop:70,
        paddingBottom:60
    },

    
    Card:{
        flexDirection:'row',
        
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        borderRadius:10,
        maxHeight:150,
        marginBottom:10,
        
        
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