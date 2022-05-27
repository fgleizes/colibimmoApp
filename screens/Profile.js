// import * as React from 'react';
import React, { useContext } from 'react';
import { View, Text } from "react-native";
import { UserContext } from "../user-context";

export default function ProfileScreen() {
  const contextUser = useContext(UserContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>Profile Screen</Text>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>{`${contextUser.user.firstname} ${contextUser.user.lastname}`}</Text>
    </View>
  );
}