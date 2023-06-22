/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React, { memo } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@Screens/Home';
import { BottomBarDestinations } from '@Routes/BottomBarDestinations';
import Icon from  'react-native-vector-icons/Ionicons';
import MIcon from  'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '@Screens/Cart';
import Favorite from '@Screens/Favorite';
import { useAppSelector } from '@Hooks/hooks';

const Tab = createBottomTabNavigator();

const MemoizedHomeIcon = memo(({color}) => <Icon name={'md-home-outline'} size={34}  color={color} />);
const MemoizedChartIcon = memo(({color}) => <Icon name={'ios-basket-outline'} size={34} color={color} />);
const MemoizedFavoriteIcon = memo(({color}) => <Icon name={'ios-star-outline'} size={34} color={color} />);
const MemoizedProfileIcon = memo(({color}) => <MIcon name={'account-outline'} size={34} color={color} />);

export function TabBar() {
  const cartData = useAppSelector((state) => state.cart.totalCount);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel:'',
        tabBarOptions: {
          activeTintColor: 'rgba(42, 89, 254, 1)', // Aktif ikonun mavi renkte olmasını sağlar
          inactiveTintColor: 'gray', // Pasif ikonların gri renkte olmasını sağlar
        },
      }}
    >
      <Tab.Screen
        name={BottomBarDestinations.Home.route}
        component={HomeScreen}
        options={{
            headerShown: false,
            title: undefined,
            tabBarIcon: ({ focused, color }) => <MemoizedHomeIcon color={color}/>,
            unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={BottomBarDestinations.Cart.route}
        component={Cart}
        options={{
            headerShown: false,
            title: undefined,
            tabBarIcon: ({ color }) => <MemoizedChartIcon color={color}/>,
            tabBarBadge: cartData > 0 ? cartData : undefined,
            unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={BottomBarDestinations.Favorite.route}
        component={Favorite}
        options={{
            headerShown: false,
            title: undefined,
            tabBarIcon: ({color}) => {
              return <MemoizedFavoriteIcon color={color}/>;
            },
            unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={BottomBarDestinations.User.route}
        component={Favorite}
        options={{
            headerShown: false,
            title: undefined,
            tabBarIcon: ({color}) => {
              return <MemoizedProfileIcon color={color}/>;
            },
            unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
}
