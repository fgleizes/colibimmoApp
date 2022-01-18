import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Header({ screen }) {
  const navigation = useNavigation();
  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" type="feather" size={32} color="black" style={headerStyles.buttonMenu} />
      </TouchableOpacity>
      <View>
        <Text style={headerStyles.title}>{screen}</Text>
      </View>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#fbfbfb',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // height: 100,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 30,
    paddingLeft: 10,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonMenu : {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  }
})