import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { getAppointment } from './api/appointmentAPI';
import Moment from 'moment';

const appointmentList = () => {
  const [listAppointment, setListAppointment] = useState({})

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzNzg0MDM2NCwiZXhwIjoxNjM3ODQzOTY0LCJuYmYiOjE2Mzc4NDAzNjQsImp0aSI6IkNjQnZhMmZaSHdLenZYNnoiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.TikUsWFOmmIK37LMWbLk4etTSk0-1TpADHgg4wlukSY"
  useEffect(() => {
    if(token) {
        getAppointment(token)
        .then(reponse =>{
          if(reponse.status === 200){
            const listAppointment = reponse.data
            setListAppointment(listAppointment)
          }
        })
       
    }
}, [token]);
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header style={{ borderBottomWidth: 0 }}>
          <DataTable.Title style={{fontWeight: 'bold'}}>Nom</DataTable.Title>
          <DataTable.Title>Projet</DataTable.Title>
          <DataTable.Title >Date</DataTable.Title>
          <DataTable.Title >Heure</DataTable.Title>
        </DataTable.Header>
        
         { 
          listAppointment.length && listAppointment.map((itemAppointment) => (
            <DataTable.Row key={itemAppointment.id}>
              <DataTable.Cell>lili</DataTable.Cell>
              <DataTable.Cell>john@kindacode.com</DataTable.Cell>
              <DataTable.Cell>{Moment(itemAppointment.start_datetime).format('d MMM YYYY')}</DataTable.Cell>
              <DataTable.Cell>{Moment(itemAppointment.start_datetime).format('h:mm')}</DataTable.Cell>
            </DataTable.Row>))
        }
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});

export default appointmentList;


