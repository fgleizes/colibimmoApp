import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';

const AppointmentList = () => {
  const [listAppointment, setListAppointment] = useState({})

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTY0MDcwMjc3OCwiZXhwIjoxNjQwNzA2Mzc4LCJuYmYiOjE2NDA3MDI3NzgsImp0aSI6IlJYUGU5R2QxWTQ3RzdRNGoiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.n2xXtdoB0-UKo9iuZyFi2Kdc9rUNEAD3w-7QVnXy4iE"
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
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text>: <Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text> }
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text>: <Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text> }
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text>: <Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('D/MM/YYYY') }</Text> }
          {item.id%2 == 0?  <Text style={styles.tableGrey}>{ Moment(item.start_datetime).format('h:mm') }</Text>: <Text style={styles.tableWhite}>{ Moment(item.start_datetime).format('h:mm') }</Text> }
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
      flexDirection: "row",
      justifyContent:'space-between',
      marginTop:145
    },
    table:{
      flexDirection: "row",
    },

    tableWhite:{
      backgroundColor:'white',
      padding:15
    },
    tableGrey:{
      backgroundColor:'#E5E5E5',
      padding:15
    }
  }
);

export default AppointmentList;