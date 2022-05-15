import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import { Icon, Button } from 'react-native-elements'
import { enumDeclaration } from '@babel/types';

 const Filtre = ({navigation}) => (
    <View style={stylesFiltre.Filtre}>
        <Button titleStyle={{color:'#F27405',}} buttonStyle={stylesFiltre.ButtonFiltre} title="Achats" onPress={() => navigation.navigate('Achats')}></Button>
        <Button titleStyle={{color:'#F27405',}} buttonStyle={stylesFiltre.ButtonFiltre} title="Ventes" onPress={() => navigation.navigate('Ventes')}></Button>
        <Button titleStyle={{color:'#F27405',}} buttonStyle={stylesFiltre.ButtonFiltre} title="Locations" onPress={() => navigation.navigate('Locations')}></Button>
    </View>
);

const stylesFiltre =StyleSheet.create ({
    Filtre:{
        fontSize:14,
        flexDirection:'row',
        marginBottom:25,
        marginTop:5,
        justifyContent: 'space-around'
    },


        
    
    ButtonFiltre:{
        width:90,
        backgroundColor:'#fff',
        borderRadius:40,
        borderWidth:1,
        borderColor:'#F27405',
        color:'#F27405',
    },

})
export default Filtre;