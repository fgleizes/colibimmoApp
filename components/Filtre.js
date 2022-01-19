import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import { enumDeclaration } from '@babel/types';

const Filtre = () => (
    <View style={stylesFiltre.Filtre}>
        <Text style={stylesFiltre.Txt1}>achat</Text><Text style={stylesFiltre.Txt}>ventes</Text><Text style={stylesFiltre.Txt}>location</Text>
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

    Txt:{
        padding:5,
        paddingRight:15,
        paddingLeft:15,
        fontSize:14,
        color:'#F27405',
        backgroundColor:'#F3E7DC',
        borderRadius:50,
        fontWeight:'bold',
        
    },
    Txt1:{
        color:'#fff',
        padding:5,
        paddingRight:15,
        paddingLeft:15,
        fontSize:14,
        backgroundColor:'#F27405',
        borderRadius:50,
        fontWeight:'bold',
        // alignSelf:flex-end,
    }

})
export default Filtre;