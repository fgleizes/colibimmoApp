/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { UserContextProvider} from "./user-context";
import { NavigationContainer } from '@react-navigation/native';
import { MyDrawer } from './components/Drawer';

const App = () => {

  return (
    <UserContextProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </UserContextProvider>
  );
};

export default App;