import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import { UserContext } from "../user-context";

export default function LogoutScreen({ navigation }) {
  const contextUser = useContext(UserContext);

  //Action pour la deconnexion
  const disconnect = () => {
    contextUser.logout()
    navigation.navigate("Home")
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>Logout Screen</Text>

      <Button title="Déconnexion" accessibilityLabel="Se déconnecter"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={() => { disconnect() }} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    backgroundColor: "#33AACC"
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
  }
})