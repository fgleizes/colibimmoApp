import * as React from 'react';
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { LoginForm } from '../components/LoginForm';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginScreen() {
  // const contextUser = useContext(UserContext);
  // const [isLoggin, setIsLoggin] = useState()

  const handleSubmit = (mail, password) => {
    // login(mail, password).then(response => {
    //   if (response.status === 200) {
    //     const token = response.data.access_token
    //     getProfile(token)
    //       .then(response => {
    //         if (response.status === 200) {
    //           contextUser.login(token, { firstname: response.data.firstname, lastname: response.data.lastname })
    //           setIsLoggin(true)
    //         }
    //       })
    //   }
    //   else {
    //     setIsLoggin(false)
    //   }
    // })
    alert(`Mail : ${mail} ; Password : ${password}; \nVous êtes connecté !`)
  }

  return (
    <View style={{ 
      flex: 1, 
      // alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <LinearGradient 
        locations={[0.0, 0.1, 1.0]}
        colors={['#f27405', '#ac5304', 'rgba(0, 0 , 0, 0.9)']}
        style={styles.linearGradient}
      >
      {/* <Text h1 h1Style={{ marginBottom: 50, alignSelf: "center" }}>Connexion :</Text> */}
        <LoginForm handleSubmit={handleSubmit} />
      </LinearGradient>
    </View>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
});