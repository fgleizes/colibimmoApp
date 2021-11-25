import React, { useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { BsEye, BsEyeSlash } from "react-icons/bs";

export const LoginForm = (props) => {
  const handleSubmit = props.handleSubmit
  const [mail, onChangeMail] = useState("")
  const [password, onChangePassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword =() => {
    if (showPassword === false) {
      setShowPassword(true)
    } else {
      setShowPassword(false)
    }
  }

const validMail = () => {
  onChangeMail()
}
const validPassword = () => {
  onChangePassword()
}

  return (
    <SafeAreaView>
      <Input 
        inputStyle={styles.input}
        containerStyle={styles.containerInput}
        label="Votre adresse email :"
        labelStyle={styles.label}
        // placeholder="Saisissez votre email"
        // placeholderTextColor={styles.input}
        leftIcon={{ type: "material", name: "alternate-email", color: "#fbfbfb" }}
        autoComplete="email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={validMail}
      />
      <Input 
        inputStyle={styles.input}
        containerStyle={styles.containerInput}
        label="Votre mot de passe :"
        labelStyle={styles.label}
        // placeholder="Saisissez votre mot de passe"
        // placeholderTextColor={{ color: "#fbfbfb"}}
        leftIcon={{ type: "material", name: "lock-outline", color: "#fbfbfb" }}
        rightIcon={
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            type="material-community"
            size={24}
            color="#fbfbfb"
            onPress={togglePassword}
          />
        }
        autoComplete="password"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={validPassword}
        secureTextEntry={!showPassword}
      />
      <Button 
        title="Se connecter"
        type="solid"
        buttonStyle={styles.button}
        containerStyle={styles.containerButton}
        raised
        onPress={() => handleSubmit(mail,password)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "#fbfbfb"
  },
  containerInput: {
    paddingHorizontal: 10,
  },
  label: {
    color: "#fbfbfb",
    fontWeight: "400"
  },
  button: {
    height: 50,
    paddingHorizontal: 30,
    backgroundColor: "#F27405"
  },
  containerButton: {
    margin: 10
  }
})