import React, { useState, useEffect } from 'react';
import { View, StyleSheet,Text, ListItem } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';




const AppointmentList = () => {
  const [listAppointment, setListAppointment] = useState({})
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL0FQSS1Db2xpYmltbW9cL3B1YmxpY1wvXC91c2VyXC9sb2dpbiIsImlhdCI6MTY0MjUxNzE2MCwiZXhwIjoxNjQyNTIwNzYwLCJuYmYiOjE2NDI1MTcxNjAsImp0aSI6IllzN2xmaFlvMkU0cFRTUGoiLCJzdWIiOjIsInBydiI6ImEzNGY0ODg3NDdjNDFmMWQxYTAzNTU4NDE2NjNmYWYxOTI3MDNhMmIifQ.90cJ2koDHQCpTXE1BSWA5iebyj8Am0Dr_HnyAC1QYOQ"
  const [currentDate, setCurrentDate] = useState('')
  
  useEffect(() => {
    var date = Moment(new Date()).format('DD MMM YYYY')
    
    setCurrentDate(date)
    if(token) {
      getAppointment(token)
        .then(response =>{
          if(response.status === 200){ 
            setListAppointment(response.data)
          }
        })
    }
}, [token]);
  return (
    <View>
     
        <View style={styles.viewDate}>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
        <View style={styles.viewBox}></View>  
      <FlatList
      style={styles.flatlistAppointement}
      data={listAppointment}
      renderItem={({ item }) => (
        <View style={styles.table}>
          <View style={styles.flexDate}>
            <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('D') }</Text>
            <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('MMM') }</Text>
          </View>
          <View style={styles.flexProject}>
            <Text style={styles.projectWordStyle}>François Quenard {item.id}</Text>
            <Text style={styles.projectWordStyle}>12345</Text>
          </View>
          <Text style={styles.textHour}>{ Moment(item.start_datetime).format('h:mm') }</Text>
          < Icon name='eye'
          type='feather'
          color='#F27405'
          size={26}
          />
        </View>
      )}
      keyExtractor={itemAppointement => itemAppointement.id}
      />
    </View>  
  );
}

const styles = StyleSheet.create(
  {
    
    table:{
      width:'91%',
      display:'flex',
      flexDirection: 'row',
      // margin: 6,
      marginLeft:20,
      marginRight:20,
      marginBottom:15,
      alignItems: 'center',
      backgroundColor:'#FFFFFF',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    flexDate:{
      display:'flex',
      flexDirection: 'column',
      alignItems: "center",
    },
    flexProject:{
      display:'flex',
      flexDirection: 'column',
      width:'55%',
      paddingLeft: '6%',
      paddingRight: '6%',
      paddingTop: '3%',
      paddingBottom: '3%',
    },
    dateWordStyle:{
      fontSize:19,
      fontWeight: "bold",
      paddingLeft: '3%',
    },
    projectWordStyle:{
      fontSize:16
    },
    textHour:{
      paddingRight:'10%'
    },
    flatlistAppointement:{
      marginBottom:'15%'
    },
    textStyle:{
      fontSize:32,
    },
    viewDate:{
      marginTop:'25%',
      marginBottom:'3%',
      width:'30%',
      marginLeft:'6%'
    },
    viewBox:{
      borderBottomWidth:1,
      borderColor:'#B4B4B4',
      marginBottom:'5%',
      marginLeft:20,
      width:327
    }
  }
);


export default AppointmentList;