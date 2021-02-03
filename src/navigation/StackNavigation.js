import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from '@Screens/DetailScreen';
import HomeScreen from '@Screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        // options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
};

export default StackNavigation;