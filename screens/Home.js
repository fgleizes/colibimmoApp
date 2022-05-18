import React, { useContext } from 'react';
import { View, Text } from "react-native";
import { UserContext } from "../user-context";


export default function HomeScreen() {
  const contextUser = useContext(UserContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: '700' }}>Bienvenue</Text>
      { contextUser.isLoggedIn && 
        <Text style={{ fontSize: 28, fontWeight: '700' }}>{`${contextUser.user.firstname} ${contextUser.user.lastname}`}</Text>
      }
      <Text style={{ fontSize: 32, fontWeight: '700' }}>sur ColibImmo</Text>
    </View>
  );
}