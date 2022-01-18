import React, { useContext } from 'react';
import { Icon } from 'react-native-elements'
import { StyleSheet, Text, View} from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Header from './Header'
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SigninScreen from '../screens/Signin';
import LogoutScreen from '../screens/Logout';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import AppointmentsScreen from '../screens/Appointments';

import { DrawerItems } from '../constants/DrawerItems';
import { UserContext } from "../user-context";

const Drawer = createDrawerNavigator();
const loggedItems = ['Appointments', 'Profile', 'Logout'];
const unloggedItems = ['Login', 'Signin'];

export const MyDrawer = () => {
  const contextUser = useContext(UserContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "back"
      }}
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent  {...props} />}
    >
      {DrawerItems.filter(item => contextUser.isLoggedIn ? !unloggedItems.includes(item.name) : !loggedItems.includes(item.name)).map(drawer =>
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
            drawerActiveTintColor: '#F27405',
            drawerItemStyle: { marginVertical: 10 },
            drawerIcon: ({ focused }) =>
              <Icon
                name={drawer.iconName}
                type={drawer.iconType}
                size={24}
                color={focused ? "#F27405" : "gray"}
              />
            ,
            headerShown: true,
            header: ({ navigation, route, options }) => {
              const title = getHeaderTitle(options, route.name);

              return (
                <Header screen={title} />
              );
            }
          }}
          component={
            drawer.name === 'Appointments' ? AppointmentsScreen
              : drawer.name === 'Profile' ? ProfileScreen
                : drawer.name === 'Settings' ? SettingsScreen
                  : drawer.name === 'Login' ? LoginScreen
                    : drawer.name === 'Signin' ? SigninScreen
                      : drawer.name === 'Logout' ? LogoutScreen 
                        : HomeScreen
          }
        />
      )}
      {/* {contextUser.isLoggedIn ? (
          <>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Appointments" component={AppointmentsScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Logout" component={LogoutScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </>
        )
      } */}
      {/* <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Appointments" component={AppointmentsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
}

export function CustomDrawerContent(props) {
  const contextUser = useContext(UserContext);

  /**
   * Partie pour cacher proprement des objets dans le menu.
   * Cela permet qu'elle soit connu dans Navigation et donc que l'on puisse allez vers les vues voulus
   */
  const { state, ...rest } = props; // Copie des props dans le state et rest (qui va contenir tout dans filtrage)

  //New state va contenir ce que l'on va garder.
  const newState = { ...state }

  //Quand on n'est pas connecté
  if (!contextUser.isLoggedIn) {
    newState.routes = newState.routes.filter(item => (!loggedItems.includes(item.name)))
  } else {
    newState.routes = newState.routes.filter(item => (!unloggedItems.includes(item.name)))
  }

  return (
    <React.Fragment>
      <DrawerContentScrollView {...props}>
        {contextUser.isLoggedIn &&   
          <View style={styles.container}>
            <Text>{`${contextUser.user.firstname} ${contextUser.user.lastname}`}</Text>
          </View>
        }
        {/* <View style={styles.container}>
          <Text>{contextUser.isLoggedIn ? `${contextUser.user.firstname} ${contextUser.user.lastname}` : 'Connectez ou Inscrivez vous'}</Text>
        </View> */}
        <DrawerItemList state={newState} {...rest} />
      </DrawerContentScrollView>
      {logoutButton}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  }
})