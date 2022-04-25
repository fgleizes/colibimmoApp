import React, { useState, useEffect,useContext } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import DropDownPicker from 'react-native-dropdown-picker';
import { UserContext } from '../user-context';
import { Button} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const AppointmentList = ({navigation}) => {
  
  const [listAppointment, setListAppointment] = useState({})

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY29saWJpbW1vLmNkYS52ZS5tYW51c2llbi1lY29sZWxhbWFudS5mclwvcHVibGljXC91c2VyXC9sb2dpbiIsImlhdCI6MTY0MjU4NDAzMiwiZXhwIjoxNjQyNTg3NjMyLCJuYmYiOjE2NDI1ODQwMzIsImp0aSI6Ild5T0NKSnU4RzgxOE9UeGsiLCJzdWIiOjIzLCJwcnYiOiJhMzRmNDg4NzQ3YzQxZjFkMWEwMzU1ODQxNjYzZmFmMTkyNzAzYTJiIn0.xHy4Q-HtrFopNm08MJ_UliKbD3Kagouecl3A9WhN7Xc"
  useEffect(() => {
    var date = Moment(new Date()).format('DD MMM YYYY')
    setCurrentDate(date)
    setItems(Moment.monthsShort().map(elem => ({label: elem, value: elem})))
    let show = true
    if(context.token && show) {
      getAppointment(context.token)
        .then(response =>{
          if(response.status === 200){
            setListAppointment(response.data)
          }
        })
    }

}, [context.token,listAppointment]);

  return  (
    
    <View>
      
        <View style={styles.viewDate}>
          <Text style={styles.textStyle}>{currentDate}</Text>
        </View>
        <View style={styles.viewSeparator}></View> 
        <View style={{display:"flex", flexDirection:"row", width:"75%"}}>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="COLIBIMMO"
        placeholder="mois"
        />
        <View style={{width: "30%"}}>
        <Button
        title="Refresh"
        buttonStyle={{
          backgroundColor: '#F27405'
        }}
        onPress = {()=>{
          let obj = Object.freeze(value);
          obj = setValue(null)
        }}
        />
        </View>
        </View>
      <FlatList
      contentContainerStyle={{marginBottom:'15%'}}
      data={listAppointment}
      renderItem={({ item }) => (
         <View style={{width:'91%',
         display:Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none',
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
         elevation: 7}}>
          <View style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none', 
                        flexDirection: 'column',
                        alignItems: "center",}}>
            <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('D') }</Text>
            <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('MMM') }</Text>
          </View>
  
          <View style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none',
                      flexDirection: 'column',
                      order: 1,
                      width:'55%',
                      paddingLeft: '6%',
                      paddingRight: '6%',
                      paddingTop: '3%',
                      paddingBottom: '3%',}}>
            <Text style={styles.projectWordStyle}>{item.person_appointment_project.map(x=>x.person.lastname)} {item.person_appointment_project.map(x=>x.person.firstname)}</Text>
            <Text style={styles.projectWordStyle}>{item.person_appointment_project.map(x=>x.reference)}</Text>
          </View>
          <Text style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none',paddingRight:'5%'}}>{ Moment(item.start_datetime).format('h:mm') }</Text>
          <Button
          
          onPress={()=> navigation.navigate('AppointmentDetail',{itemPerson:{
                                                                              'lastname': item.person_appointment_project.map(x=>x.person.lastname),
                                                                              'firstname': item.person_appointment_project.map(x=>x.person.firstname),
                                                                              'reference': item.person_appointment_project.map(x=>x.reference),
                                                                              'subject': item.subject,
                                                                              'address': item.person_appointment_project.map(x=>x.address.number)+ " " + item.person_appointment_project.map(x=>x.address.street),
                                                                              'additional_address': item.person_appointment_project.map(x=>x.address.additional_address),
                                                                              'building': item.person_appointment_project.map(x=>x.address.building),
                                                                              'floor': item.person_appointment_project.map(x=>x.address.floor),
                                                                              'residence': item.person_appointment_project.map(x=>x.address.residence),
                                                                              'typeProject': item.person_appointment_project.map(x=>x.typeProject.name),
                                                                              'staircase': item.person_appointment_project.map(x=>x.address.staircase),
                                                                              'phone': item.person_appointment_project.map(x=>x.person.phone),
                                                                              'hours': Moment(item.start_datetime).format('h:mm'),
                                                                              'date': Moment(item.start_datetime).format('DD/MM/YYYY')
                                                                            }})}
                icon={{
                  name: 'eye',
                  type: 'feather',
                  color:'#F27405',
                  size:26,
                  
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                }}
              
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
    dateWordStyle:{
      fontSize:19,
      fontWeight: "bold",
      paddingLeft: '2%',
    },
    projectWordStyle:{
      fontSize:16
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

