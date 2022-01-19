import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { LoginForm } from '../components/LoginForm';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [isLoggin, setIsLogin] = useState(null)

  useEffect(() => {
    if(isLoggin) {
      navigation.navigate("Home");
    }
  }, [isLoggin]);

  useEffect(() => {
    if (isLoggin) {
      navigation.navigate("Home");
    }
    return () => {
      setIsLogin(false)
    }
  }, [isLoggin])

  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center'
    }}>
      <LinearGradient 
        locations={[0.0, 0.1, 1.0]}
        colors={['#f27405', '#ac5304', 'rgba(0, 0 , 0, 0.9)']}
        style={styles.linearGradient}
      >
        <LoginForm setIsLogin={setIsLogin}/>
        <Text style={styles.errorMsg}>{isLoggin !== null && !isLoggin && "L'adresse mail ou le mot de passe n'existe pas."}</Text>
      </LinearGradient>
    </View>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 200,
    paddingHorizontal: 10
  },
  errorMsg: {
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 20,
    height: 40,
    color: "red"
  }
});