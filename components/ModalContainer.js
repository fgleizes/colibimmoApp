import React, { useState,useEffect } from 'react';
import { View, Image,Text, StyleSheet,ScrollView,FlatList } from "react-native";
import Filtre from './Filtre'
import {getProjects} from '../api/projectAPI'

export function ModalContainer({  }) {
   
    return (
    
    <View>
        <View >
              <Text style={{textAlign:'left',}}>
                  hello
              </Text>
        </View>

        <Text style={{ fontSize: 20, textAlign: 'left'}}>
          NOTES
        </Text>
    </View>
    )
  }



