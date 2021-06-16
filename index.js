

import {AppRegistry} from 'react-native';
import Home from './src/screen/Home';
import {name as appName} from './app.json';
import AnotherScreen from './src/screen/AnotherScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => AnotherScreen);
