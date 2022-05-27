import React from "react";
import { View,StyleSheet,Modal,Image,Text,TouchableOpacity,Animated,ScrollView } from "react-native";
import { Icon, Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateProject } from './CreateProjectScreen';
import { ModalContainer } from '../components/ModalContainer';
import Moment  from 'moment';
const Stack = createNativeStackNavigator();



export default function EditProject ({navigation}) {
   
    return (
        <ScrollView style ={styles.ContainerForm}>
            <View style={styles.buttonsHeader}>
                <View style={styles.buttonLeft}>
                    <Button 
                        icon={
                            <Icon 
                                name="arrow-back-ios"
                                type="MaterialIcons"
                                size={24}
                                color="#4B4B4B"
                            />
                        }
                        buttonStyle={styles.ButtonBack} title="" onPress={() => navigation.goBack() } 
                    />
                </View>
                
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: '700' }}>Edit project</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    ContainerForm:{
        paddingTop:70,
        padding:20
    },
    buttonLeft:{
        flexDirection:'row',
    },
    ButtonBack:{
        backgroundColor:'#fff',
        borderRadius:50,
        width:50,
        height:50,
        paddingLeft:15,
    },
})