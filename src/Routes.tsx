import React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import Home from '@screens/Home';
import Quiz from '@screens/Quiz';
import Results from '@screens/Results';

const Stack = createStackNavigator();

export type RouteNavigationProps = StackNavigationProp<ParamListBase>;

export const routes = {
  Home: 'Home',
  Quiz: 'Quiz',
  Results: 'Results',
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={routes.Home}
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name={routes.Quiz} component={Quiz} />
        <Stack.Screen name={routes.Results} component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
