import * as React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppointmentList } from '../components/AppointmentList';
import { DetailAppointment } from '../components/DetailAppointment';


const Stack = createNativeStackNavigator();

export const AppointmentsScreen =()=> {
  return (
      <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="ListAppointment">
              <Stack.Screen name="ListAppointment" component={AppointmentList} />
              <Stack.Screen name="AppointmentDetail" component={DetailAppointment} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

