import React from "react";
import { View, Image,Text, StyleSheet,ScrollView,FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, Button } from 'react-native-elements'


export default function CreateProject ({navigation}) {
    return (
        <View style ={styles.ContainerCard}>
            <Text>create screen</Text>
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
    );
}

const styles = StyleSheet.create ({
    ContainerCard:{
        paddingTop:70,
        // paddingLeft:20,
        // paddingRight:20,
        paddingBottom:60
    },
})