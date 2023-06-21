/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@Screens/Home';
import { BottomBarDestinations } from '../Routes/BottomBarDestinations';

const Tab = createBottomTabNavigator();

export function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={BottomBarDestinations.Home.route}
        component={HomeScreen}
        options={{
            headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
