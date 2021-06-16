

import {AppRegistry} from 'react-native';
import React from 'react'
import Home from './src/screen/Home';
import {name as appName} from './app.json';
import AnotherScreen from './src/screen/AnotherScreen';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Main);
