import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HeadlineStack from './src/Navigation/HeadlinesStack';

export default function App() {
  return (
    <NavigationContainer>
      <HeadlineStack />
    </NavigationContainer>
  );
}
