import React from 'react';
import { View, Image,Text, StyleSheet,ScrollView } from "react-native";
import CardComponent from '../components/ProjectCard'
import Filtre from '../components/Filtre'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, Button } from 'react-native-elements'
import {DetailsScreen} from './ProjectDetail'


function ProjectsScreen({navigation}) {
  return (
    <View style={styles.ContainerCard}>
      {/* FILTRE CARD PROJECT */}
      <Filtre></Filtre>
      {/* LISTE CARDS PROJECT  */}
      <View style ={stylesCard.Card}>
        <Image style={stylesCard.Img} source={require ('../IMG/imgAppart.jpg')}/>
        <View style={stylesCard.Info}>
            <View style={stylesCard.Txt}>
                <Text style={stylesCard.Ref} name="referenceProjet">FG73653</Text>
                <View style={stylesCard.nomPrenom} name="nomPrenom"><Text style={{marginRight:5}} name="prenom">Florent</Text><Text name="nom">GLEIZE</Text></View>
                <View style={stylesCard.adresse} name="adresse"><Text style={{marginRight:5}} name="adresseCodePostal">78000</Text><Text name="adresseVille">Versailles</Text></View>
                <View style={stylesCard.propertyInfo} name="propertyInfo"><Text style={{marginRight:5}} name="typeProperty">Appartement T2</Text><Text name="propertyArea">36 m²</Text></View>
            </View>
            {/* BOUTON TO DETAIL PROJECT  */}
           <Button 
           icon={<Icon 
            name="eye"
                type="feather"
                size={24}
                color="#F27405"
            
            />}
                buttonStyle={stylesCard.Icon} 
                type="clear"
                onPress={() => navigation.navigate('Details')} 
            />
        </View>
    </View>
    </View>
    
  );
}
  
function DetailsScreenFun({ navigation }) {
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
  
  const Stack = createNativeStackNavigator();
  
  function App() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ProjectsScreen} />
          <Stack.Screen name="Details" component={DetailsScreenFun} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;

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

//styles listCard

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
        borderRadius:10,
        maxHeight:150,
        
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
