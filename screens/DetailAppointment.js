import React, { useState, useEffect,useContext } from 'react';
import { View, StyleSheet,Text,Linking} from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';



export const DetailAppointment = ({route}) => {
    const { itemPerson } = route.params;

    const makeCall = () => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${1234567890}';
        } else {
          phoneNumber = 'telprompt:${1234567890}';
        }
    
        Linking.openURL(phoneNumber);
      };


      const makeSMS = () => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'sms:${1234567890}';
        } else {
          phoneNumber = 'smsprompt:${1234567890}';
        }
    
        Linking.openURL(phoneNumber);
      };
    
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                        width:"98%"
                    }}>            
            <View style={{display:"flex", flexDirection:"row" , justifyContent:'space-between'}}>
                <Text>{itemPerson.lastname} {itemPerson.firstname}</Text>
                <Text>{itemPerson.date}</Text>
            </View>
            <Text>{itemPerson.address} {itemPerson.additional_address} {itemPerson.building}
            {itemPerson.floor} {itemPerson.residence} {itemPerson.staircase}
            </Text>
            <View style={{display:"flex", flexDirection:"row" , justifyContent:'space-between'}}>
                <Text>{itemPerson.hours}</Text>
                <Text>Projet {itemPerson.reference.toString().slice(0,8)}</Text>
            </View>
        </View>
        <View style={{display:"flex", flexDirection:"row" , justifyContent:'space-between', width:"55%"}}>
        <TouchableOpacity
           style= {[styles.button]}
           onPress={makeCall()}>
                <Icon name="phone" type="material" color="#4B4B4B"/>
        </TouchableOpacity>
        <TouchableOpacity
           style= {[styles.button]}
           onPress={makeSMS()}>
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
                        paddingBottom: 60
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
        marginTop:10,
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65
      },
})