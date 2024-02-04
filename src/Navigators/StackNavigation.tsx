import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RouteKey from './RouteKey';
import {AppStackParamList} from './types';
import HomeScreen from 'src/Screens/HomeScreen';
import DetailScreen from 'src/Screens/DetailScreen';
import FavoriesScreen from 'src/Screens/FavoriesScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName={RouteKey.HomeScreen}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={RouteKey.HomeScreen} component={HomeScreen} />
    <Stack.Screen name={RouteKey.DetailScreen} component={DetailScreen} />
    <Stack.Screen name={RouteKey.FavoriesScreen} component={FavoriesScreen} />
  </Stack.Navigator>
);
