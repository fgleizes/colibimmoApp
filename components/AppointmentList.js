import React, { useState, useEffect,useContext } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment, { months } from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import DropDownPicker from 'react-native-dropdown-picker';
import { UserContext } from '../user-context';



const AppointmentList = () => {
  const [listAppointment, setListAppointment] = useState({})
  const context = useContext(UserContext)
  const [currentDate, setCurrentDate] = useState('')
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState();
  
  useEffect(() => {
    var date = Moment(new Date()).format('DD MMM YYYY')
    setCurrentDate(date)
    setItems(Moment.monthsShort().map(elem => ({label: elem, value: elem})))
    
    if(context.token) {
      getAppointment(context.token)
        .then(response =>{
          if(response.status === 200){
            setListAppointment(response.data)
          }
        })
    }
    
}, [context.token]);



  return (
    <View>
        <View style={styles.viewDate}>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
        <View style={styles.viewSeparator}></View>  
        <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      theme="COLIBIMMO"
    />

      <FlatList
      style={styles.flatlistAppointement}
      data={listAppointment}
      renderItem={({ item }) => (
         <View style={styles.table}>
          <View style={{display: Moment(item.start_datetime).format('MMM') == value || value == null? 'flex' : 'none', 
                        flexDirection: 'column',
                        alignItems: "center",}}>
            <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('D') }</Text>
            <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('MMM') }</Text>
          </View>
          <View style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none',
                      flexDirection: 'column',
                      width:'55%',
                      paddingLeft: '6%',
                      paddingRight: '6%',
                      paddingTop: '3%',
                      paddingBottom: '3%',}}>
            <Text style={styles.projectWordStyle}>François Quenard {item.id}</Text>
            <Text style={styles.projectWordStyle}>12345</Text>
          </View>
          <Text style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none',paddingRight:'10%'}}>{ Moment(item.start_datetime).format('h:mm') }</Text>
          < Icon style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none'}} name='eye'
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
    dateWordStyle:{
      fontSize:19,
      fontWeight: "bold",
      paddingLeft: '2%',
    },
    projectWordStyle:{
      fontSize:16
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
    viewSeparator:{
      borderBottomWidth:1,
      borderColor:'#B4B4B4',
      marginBottom:'5%',
      marginLeft:20,
      width:327
    }
  }
);


export default AppointmentList;