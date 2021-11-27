import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment from 'moment';
import { ListItem } from 'react-native-elements'
import { DataTable } from 'react-native-paper';


const AppointmentList = () => {
  const [listAppointment, setListAppointment] = useState({})

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTYzNzkzODQ5NywiZXhwIjoxNjM3OTQyMDk3LCJuYmYiOjE2Mzc5Mzg0OTcsImp0aSI6Ijh2OUF6YjFqU0c2Q20xeGMiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.4_o0uc7lE9sAO9AmpC4F6Mw2IUTZLEg08Vb_mg6lPts"
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
    
      <ScrollView style={styles.scrollView}>
        <DataTable style={styles.container}>
          <DataTable.Header>
            <DataTable.Title>Nom</DataTable.Title>
            <DataTable.Title>Projet</DataTable.Title>
            <DataTable.Title numeric>Date</DataTable.Title>
            <DataTable.Title numeric>Heure</DataTable.Title>
          </DataTable.Header>
        </DataTable>
      {listAppointment.length && listAppointment.map((itemAppointment) => (
        // <View key={index} style={styles.container}>
        //   <Text>id: {itemAppointment.id}</Text>
        //   <Text>Sujet: {itemAppointment.subject}</Text>
        //   <Text>Projet id: {itemAppointment.person_appointment[0].id_Project}</Text>
        //   <Text>Début: {Moment(itemAppointment.start_datetime).format('d MMM YYYY')} {Moment(itemAppointment.start_datetime).format('h:mm')}</Text>
        //   <Text>Fin: {Moment(itemAppointment.end_datetime).format('d MMM YYYY')} {Moment(itemAppointment.end_datetime).format('h:mm')}</Text> */}
      
          <DataTable>
            <DataTable.Row style={styles.container}>
              <DataTable.Cell>{itemAppointment.subject}</DataTable.Cell>
              <DataTable.Cell>{itemAppointment.subject}</DataTable.Cell>
              <DataTable.Cell>{Moment(itemAppointment.start_datetime).format('d MMM YYYY')}</DataTable.Cell>
              <DataTable.Cell>{Moment(itemAppointment.start_datetime).format('h:mm')}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
      
        // </View>
      
      ))}
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  scrollView: {
    flex:1,
    paddingTop: 80,
    width: "100%"
  },
  container:{
    backgroundColor: "white",
  }
});

export default AppointmentList;