import React, { useState } from 'react';
import { UserContext } from '../user-context';
import { login, getProfile } from '../api/userAPI';
import { SafeAreaView, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

export const LoginForm = ({setIsLogin}) => {
  const contextUser = React.useContext(UserContext);
  const [mail, onChangeMail] = useState("")
  const [password, onChangePassword] = useState("")
  const [mailErrorMsg, setMailErrorMsg] = useState()
  const [passwordErrorMsg, setPasswordErrorMsg] = useState()
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword =() => {
    if (showPassword === false) {
      setShowPassword(true)
    } else {
      setShowPassword(false)
    }
  }

  const handleSubmit = (mail, password) => {
    login(mail, password).then(response => {
      if (response.status == 200) {
        const token = response.data.access_token
        getProfile(token).then(response => {
          if (response.status === 200) {
            contextUser.login(token, { firstname: response.data.firstname, lastname: response.data.lastname })
            setIsLogin(true)
          }
        })
      } else {
        setIsLogin(false)
      }
    })
  }

  const validForm = (mail,password) => {
    var mailFormatIsValid = false
    var passwordFormatIsValid = false
    var emailformat = /.+\@.+\..{2}/;
    if(mail === "") {
      setMailErrorMsg("L'adresse email est obligatoire.")
    } else if (!mail.match(emailformat)) {
      setMailErrorMsg("L'email ne correspond pas au format requis. (ex: mail@mail.fr)")
    } else {
      setMailErrorMsg("")
      mailFormatIsValid = true
    }
    // Au moins 6 caractères, une majuscule, un chiffre :
    // var passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    if (password === "") {
      setPasswordErrorMsg("Le mot de passe est obligatoire.")
    } else {
      setPasswordErrorMsg("")
      passwordFormatIsValid = true
    }
    // else if (!password.match(passwordFormat)) {
    //   setPasswordErrorMsg("Au moins 6 caractères, une majuscule, un chiffre")
    // }
    if (mailFormatIsValid && passwordFormatIsValid) {
      handleSubmit(mail,password)
    }
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
        errorMessage={mailErrorMsg}
        renderErrorMessage={true}
        leftIcon={{ type: "material", name: "alternate-email", color: "#fbfbfb" }}
        autoComplete="email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={onChangeMail}
      />
      <Input 
        inputStyle={styles.input}
        containerStyle={styles.containerInput}
        label="Votre mot de passe :"
        labelStyle={styles.label}
        // placeholder="Saisissez votre mot de passe"
        // placeholderTextColor={{ color: "#fbfbfb"}}
        errorMessage={passwordErrorMsg}
        leftIcon={{ type: "material", name: "lock-outline", color: "#fbfbfb" }}
        rightIcon={{ type: "material-community", name: showPassword ? "eye-off-outline" : "eye-outline", size: 24, color: "#fbfbfb", onPress: togglePassword }}
        autoComplete="password"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={onChangePassword}
        secureTextEntry={!showPassword}
      />
      <Button 
        title="Se connecter"
        type="solid"
        buttonStyle={styles.button}
        containerStyle={styles.containerButton}
        raised
        onPress={() => validForm(mail,password)}
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