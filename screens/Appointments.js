import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppointmentList } from '../components/AppointmentList';
import { DetailAppointment } from './DetailAppointment';


const Stack = createNativeStackNavigator();

const AppointmentsScreen =()=> {
  return (
      <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="ListAppointment">
              <Stack.Screen name="ListAppointment" component={AppointmentList} />
              <Stack.Screen name="AppointmentDetail" component={DetailAppointment} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default AppointmentsScreen;