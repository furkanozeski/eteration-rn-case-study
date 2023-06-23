/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabBar } from './TabNavGraph';
import { TopLevelDestionations } from '@Routes/TopLevelDestinations';

const Stack = createNativeStackNavigator();


export default function NavigationHost() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={TopLevelDestionations.Home}
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen
          name={TopLevelDestionations.Home}
          component={TabBar}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'rgba(42, 89, 254, 1)',
            },
            title: 'E-Market',
            headerTitleStyle: {
              color: 'white',
              fontSize: 29,
              fontWeight: '800',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
