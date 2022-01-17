import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';


const AppointmentList = () => {
  const [listAppointment, setListAppointment] = useState({})
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTY0MjQwOTIyNSwiZXhwIjoxNjQyNDEyODI1LCJuYmYiOjE2NDI0MDkyMjUsImp0aSI6IkEyeGd0MGhMSnhIYmVNTGMiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ._P4A1U9ji_o-2Kl2hiDA8BhDc1N8g-sGf3G6aAxsYJQ"

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
    <View>
          <View style={styles.tableHead}>
          <Text>Nom</Text>
          <Text>Projet</Text>
          <Text>Date</Text>
          <Text>Heure</Text>
          </View>
      <FlatList
      data={listAppointment}
      renderItem={({ item }) => (
        <View style={styles.table}>
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text>:<Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text> }
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text>:<Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text> }
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text>:<Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text> }
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('h:mm') }</Text>:<Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('h:mm') }</Text> }
        </View>
      )}
      keyExtractor={itemAppointement => itemAppointement.id}
      />
    </View>  
  );
}

const styles = StyleSheet.create(
  {
    tableHead:{
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop:115
    },
    table:{
      flexDirection: 'row',
    },

    tableWhite:{
      backgroundColor:'white',
      padding:13
    },
    tableGrey:{
      backgroundColor:'#E5E5E5',
      padding:13
    }
  }
);


export default AppointmentList;