import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { enumDeclaration } from '@babel/types';

 const Filtre = ({navigation}) => (
    <View style={stylesFiltre.Filtre}>
        <Button title="Achats" onPress={() => navigation.navigate('Achats')}></Button>
        <Button title="Ventes" onPress={() => navigation.navigate('Ventes')}></Button>
        <Button title="Locations" onPress={() => navigation.navigate('Locations')}></Button>
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


        
    
    Txt1:{
        
        padding:5,
        paddingRight:15,
        paddingLeft:15,
        fontSize:14,
        
        
        fontWeight:'bold',
        // alignSelf:flex-end,
    }

})
export default Filtre;