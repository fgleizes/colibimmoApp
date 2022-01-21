import React from "react";
import { Icon, Button } from 'react-native-elements'
import { View, Image,Text, StyleSheet,ScrollView,FlatList } from "react-native";



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
        padding:20,
        paddingBottom:60
    },
})