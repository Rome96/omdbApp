import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '@Components/DetailScreen';
import HomeScreen from '@Screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Films' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detail Films' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
};

export default StackNavigation;