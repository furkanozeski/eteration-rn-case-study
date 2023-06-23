/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopLevelDestionations} from '@Routes/TopLevelDestinations';
import HomeScreen from '@Screens/Home';
import {BottomBarDestinations} from '@Routes/BottomBarDestinations';
import DetailScreen from '@Screens/Detail';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {Touchable, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator();

export default function NestedNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={TopLevelDestionations.Home}
        component={HomeScreen}
        options={{
          headerShown: true,
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
      <Stack.Screen
        name={BottomBarDestinations.Home.destinations.details}
        component={DetailScreen}
        options={({route}) => ({
          headerShown: true,
          title: route.params.data.name,
          headerStyle: {
            backgroundColor: 'rgba(42, 89, 254, 1)',
          },
          headerLeft: (props) => {
            <TouchableOpacity>
              <BackIcon name={'arrow-back-outline'} size={36} color={'#ffff'}/>
            </TouchableOpacity>;
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 29,
            fontWeight: '800',
          },
        })}
      />
    </Stack.Navigator>
  );
}
