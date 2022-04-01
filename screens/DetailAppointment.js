import React, { useState, useEffect,useContext } from 'react';
import { View, StyleSheet,Text,Linking} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const DetailAppointment = ({route,navigation}) => {
    const { itemPerson } = route.params;

    const makeCall = (numCall) => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:' + numCall;
        } else {
          phoneNumber = 'telprompt:'+ numCall;
        }
    
        Linking.openURL(phoneNumber);
      };


      const makeSMS = (numSMS) => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'sms:' + numSMS;
        } else {
          phoneNumber = 'smsprompt:'+ numSMS;
        }
    
        Linking.openURL(phoneNumber);
      };
    
    return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
      <TouchableOpacity
           style= {[styles.button,{marginLeft:20}]}
           onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-ios" type="material" color="#4B4B4B"/>
        </TouchableOpacity>
        <View style={{  backgroundColor: '#FFFFFF',
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,
                        elevation: 6,
                        borderRadius: 15,
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 20,
                        paddingBottom: 20,
                        width:"90%",
                        alignSelf:'center'
                    }}>            
            <View style={{display:"flex", flexDirection:"row" , justifyContent:'space-between'}}>
                <Text style={{fontSize:20,fontWeight: "bold", marginBottom:5}}>{itemPerson.lastname} {itemPerson.firstname}</Text>
                <Text style={{marginTop:5}}>{itemPerson.date}</Text>
            </View>
            <Text>{itemPerson.typeProject}</Text>
            <Text>{itemPerson.address} {itemPerson.additional_address} {itemPerson.building}
            {itemPerson.floor} {itemPerson.residence} {itemPerson.staircase}
            </Text>
            <View style={{display:"flex", flexDirection:"row" , justifyContent:'space-between',marginTop:20}}>
                <Text style={{fontSize:20,fontWeight: "bold",color:"#F27405"}}>{itemPerson.hours}</Text>
                
      <TouchableOpacity
          style={{backgroundColor:'#F27405',borderRadius:10}}
           onPress={() => alert('Simple Button pressed')}>
             <Text style = {{color:"#FFFFFF", padding:5}}>Projet {itemPerson.reference.toString().slice(0,8)}</Text>
        </TouchableOpacity>
            </View>
        </View>
        <View style={{display:"flex", flexDirection:"row" , justifyContent:'space-between', width:"55%", marginLeft:20}}>
        <TouchableOpacity
           style= {[styles.button]}
           onPress={() => makeCall(itemPerson.phone)}>
                <Icon name="phone" type="material" color="#4B4B4B"/>
        </TouchableOpacity>
        <TouchableOpacity
           style= {[styles.button]}
           onPress={() => makeSMS(itemPerson.phone)}>
                <Icon name="chat" type="material" color="#4B4B4B"/>
        </TouchableOpacity>
        <TouchableOpacity
           style= {[styles.button]}
           onPress={() => alert('Simple Button pressed')}>
                <Icon name="my-location" type="material" color="#4B4B4B"/>
        </TouchableOpacity>
        </View>
        <View style={{  backgroundColor: '#FFFFFF',
                        shadowColor: "#000",
                        shadowOffset: {
                        width: 0,
                        height: 3,
                        },
                        shadowOpacity: 0.27,
                        shadowRadius: 4.65,

                        elevation: 6,
                        borderRadius: 10,
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 20,
                        paddingBottom: 60,
                        width:"90%",
                        alignSelf:'center'
                    }}>              
           <Text>{itemPerson.subject}</Text>
        </View>
    </View>
    
    
    
    )

    
}

const styles = StyleSheet.create({
    
    button: {
        backgroundColor: '#FFFFFF',
        borderRadius:40,
        padding:11,
        marginTop:20,
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      
})