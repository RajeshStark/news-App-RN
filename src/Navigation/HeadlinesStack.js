import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Headlines from '../Components/Headlines';
import SearchComponent from '../Components/Searchbar';

const Stack = createStackNavigator();

export default function HeadlineStack() {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Headlines" component={Headlines} />
      <Stack.Screen name="Searchbar" component={SearchComponent} />
    </Stack.Navigator>
  );
}