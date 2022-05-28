import React, { useState, useEffect,useContext } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { getAppointment } from '../api/appointmentAPI';
import Moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { UserContext } from '../user-context';
import { Button} from 'react-native-elements';

export const AppointmentList = ({navigation}) => {
  
  const [listAppointment, setListAppointment] = useState({})
  const context = useContext(UserContext)
  const [currentDate, setCurrentDate] = useState('')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState()
  
  useEffect(() => {
    var date = Moment(new Date()).format('DD MMM YYYY')
    setCurrentDate(date)
    const months = Moment.monthsShort()
    if(months) {

      setItems(Moment.monthsShort().map(elem => ({label: elem, value: elem})))
    }

    if(context.token) {
      getAppointment(context.token)
        .then(response =>{
          if(response && response.status === 200){
            setListAppointment(response.data)
          }
        })
    }

}, [context.token]);

  return  (
    <View>
      <View style={styles.viewDate}>
        <Text style={styles.textStyle}>{currentDate}</Text>
      </View>
      <View style={styles.viewSeparator}></View> 
        
      <View style={{ paddingLeft: 20, paddingBottom: 20, display: "flex", flexDirection: "row", width: "75%" }}>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          width: '31%',
          alignItems:'center',
          borderColor: '#B4B4B4',
          backgroundColor:'E5E5E5',
          color:'6B6B6B'
        }}
        placeholder="mois"
        />
        <View style={{ width: "30%", alignItems: "center", }}>
          <Button
            title="Refresh"
            buttonStyle={{
              backgroundColor: '#F27405',
              height: 50,
            }}
            onPress={() => {
              let obj = Object.freeze(value);
              obj = setValue(null)
            }}
          />
        </View>
      </View>
      
      {listAppointment &&
        <FlatList
          contentContainerStyle={{marginBottom:'15%'}}
          data={listAppointment}
          zIndex={-1}
          renderItem={({ item }) => (
            <View 
              style={{
                height: 110,
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
                elevation: 7,
              }}
            >
            <View style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none', flexDirection: 'column', alignItems: "center"}}>
              <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('D') }</Text>
              <Text style={styles.dateWordStyle}>{ Moment(item.start_datetime).format('MMM') }</Text>
            </View>
    
            <View 
              style={{
                display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none',
                flexDirection: 'column',
                justifyContent: "space-around",
                order: 1,
                width:'59%',
                paddingLeft: 10,
                paddingRight: 0,
                paddingTop: 10,
                paddingBottom: 10,
                height: '100%'
              }}
            >
              {item.person_appointment_project.map((x, key) => (
                <View key={key}>
                  <Text style={styles.projectWordStyle}>{x.person.lastname + " " + x.person.firstname}</Text>
                  <Text style={fontSize=10}>{x.reference}</Text>
                </View>
              ))}
            </View>
            
            <Text style={{display: Moment(item.start_datetime).format('MMM') == value || value == null ? 'flex' : 'none',paddingRight:10}}>{ Moment(item.start_datetime).format('h:mm') }</Text>

            <Button
              onPress={()=> navigation.navigate('AppointmentDetail',{itemPerson:{
                'lastname1': item.person_appointment_project[0].person.lastname,
                'firstname1': item.person_appointment_project[0].person.firstname,
                'lastname2': item.person_appointment_project[1] && item.person_appointment_project[1].person.lastname,
                'firstname2': item.person_appointment_project[1] && item.person_appointment_project[1].person.firstname,
                'reference': item.person_appointment_project.map(x=>x.reference),
                'subject': item.subject,
                'address': item.person_appointment_project.map(x => x.project.address && x.project.address.number + " " + x.project.address.street),
                'additional_address': item.person_appointment_project.map(x => x.project.address && x.project.address.additional_address),
                'building': item.person_appointment_project.map(x => x.project.address && x.project.address.building),
                'floor': item.person_appointment_project.map(x => x.project.address && x.project.address.floor),
                'residence': item.person_appointment_project.map(x => x.project.address && x.project.address.residence),
                'typeProject': item.person_appointment_project.map(x=>x.typeProject.name),
                'staircase': item.person_appointment_project.map(x => x.project.address && x.project.address.staircase),
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
      }
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
      marginTop:'15%',
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

