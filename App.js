// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import StoreScreen from './src/screens/StoreScreen';
import OrderScreen from './src/screens/OrderScreen';
import BroadcastsScreen from './src/screens/BroadcastsScreen';
import KontactScreen from './src/screens/KontactScreen';
import KorzinaScreen from './src/screens/KorzinaScreen';
import {
  faBars,
  faClose,
  faBell,
  faCheckSquare,
  faShoppingCart,
  faAngleLeft,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(
  faBars,
  faClose,
  faBell,
  faCheckSquare,
  faShoppingCart,
  faAngleLeft,
  faTrash,
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Store"
          component={StoreScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Broadcasts"
          component={BroadcastsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Kontact"
          component={KontactScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Korzina"
          component={KorzinaScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
