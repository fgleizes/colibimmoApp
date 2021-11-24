/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/Header';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import SavedScreen from './screens/Saved';
import ReferScreen from './screens/Refer';
import DrawerItems from './constants/DrawerItems';
import { Icon } from 'react-native-elements'
import { getHeaderTitle } from '@react-navigation/elements';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="front"
        initialRouteName="Profile"
      >
        {
          DrawerItems.map(drawer =>
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
                drawer.name === 'Profile' ? ProfileScreen
                  : drawer.name === 'Settings' ? SettingsScreen
                    : drawer.name === 'Saved Items' ? SavedScreen
                      : ReferScreen
              }
            />
          )
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;