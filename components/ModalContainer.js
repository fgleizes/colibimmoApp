import React, { useState,useEffect, useContext } from 'react';
import { View, Image,Text, StyleSheet,ScrollView,FlatList } from "react-native";
import Filtre from './Filtre'
import {getNotesProject} from '../api/projectAPI'
import { UserContext } from '../user-context';
import Moment  from 'moment';


export function ModalContainer({idProject}) {
  const [listNotes, setListNotes] = useState({})
  const Context = useContext(UserContext);
  const token = Context.token;
  const idNote = idProject


  
  useEffect(() => {
      if(token) {
        getNotesProject(token,idNote)
              .then(response =>{
                  if(response.status === 200){
                      setListNotes(response.data)
                      
                  }
              })
      }
  }, [token]);

    return (
    
    <View>

        <FlatList  data={listNotes}
            renderItem={({item}) => 
            <View style={{margin:5,}} item={item} >
              <View style={{flexDirection: 'row', justifyContent:'flex-start',}}>
                <Text style={{fontSize:18,fontWeight:"bold",flexGrow:4,}} >{item.title}</Text>
                <Text style={{fontSize:12,fontWeight:"thin",textAlign: 'right'}} > {Moment(item.created_at).format("Do MMM YY") }</Text>
              </View>
              <Text style={{marginBottom:10,}}>{item.content_text}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center'}} />
              </View>
            </View>
          
          }
            keyExtractor={item=>item.id}
        />
    </View>
    )
  }



