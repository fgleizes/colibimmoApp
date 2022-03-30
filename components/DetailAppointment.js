import React, { useState, useEffect,useContext } from 'react';
import { View, StyleSheet,Text,Dimensions,ScrollView } from 'react-native';
import { oneGetAppointment } from '../api/appointmentAPI';
import Moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import DropDownPicker from 'react-native-dropdown-picker';
import { UserContext } from '../user-context';
import { Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Projects } from '../screens/Projects';
import AppointmentsScreen from '../screens/Appointments';
import { getOnePerson } from '../api/personAPI';




export const DetailAppointment = ({route}) => {
    const { itemPerson } = route.params;
    
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>itemId: {itemPerson.lastname} {itemPerson.firstname}</Text>
                        <Text>itemId: {itemPerson.address}</Text>
                        <Text>itemId: {itemPerson.date} à {itemPerson.hours}</Text>
                        <Text>itemId: {itemPerson.reference}</Text>
                        <Text>itemId: {itemPerson.subject}</Text>
                        <Text>itemId: {itemPerson.additional_address}</Text>
                        <Text>itemId: {itemPerson.building}</Text>
                        <Text>itemId: {itemPerson.floor}</Text>
                        <Text>itemId: {itemPerson.residence}</Text>
                        <Text>itemId: {itemPerson.staircase}</Text>
    </View>
    
    )
}