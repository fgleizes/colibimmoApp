import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment from 'moment';

const AppointmentList = () => {
  const [listAppointment, setListAppointment] = useState({})

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTY0MjU4NDAzMiwiZXhwIjoxNjQyNTg3NjMyLCJuYmYiOjE2NDI1ODQwMzIsImp0aSI6Ild5T0NKSnU4RzgxOE9UeGsiLCJzdWIiOjIzLCJwcnYiOiJhMzRmNDg4NzQ3YzQxZjFkMWEwMzU1ODQxNjYzZmFmMTkyNzAzYTJiIn0.xHy4Q-HtrFopNm08MJ_UliKbD3Kagouecl3A9WhN7Xc"
  useEffect(() => {
    if(token) {
      getAppointment(token)
        .then(response =>{
          if(response.status === 200){
            const listAppointment = response.data
            setListAppointment(listAppointment)
          }
        })
    }
}, [token]);
  return (
    <View style={styles.container}>
      {listAppointment.length && listAppointment.map((itemAppointment, index) => (
        <View key={index}style={{ margin: 20 }}>
          <Text>id: {itemAppointment.id}</Text>
          <Text>Sujet: {itemAppointment.subject}</Text>
          <Text>Projet id: {itemAppointment.person_appointment[0].id_Project}</Text>
          <Text>Début: {Moment(itemAppointment.start_datetime).format('d MMM YYYY')} {Moment(itemAppointment.start_datetime).format('h:mm')}</Text>
          <Text>Fin: {Moment(itemAppointment.end_datetime).format('d MMM YYYY')} {Moment(itemAppointment.end_datetime).format('h:mm')}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default AppointmentList;