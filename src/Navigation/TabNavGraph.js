/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React, { memo } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomBarDestinations } from '@Routes/BottomBarDestinations';
import Icon from  'react-native-vector-icons/Ionicons';
import MIcon from  'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '@Screens/Cart';
import Favorite from '@Screens/Favorite';
import Account from '@Screens/Account';
import NestedNav from './NestedNav';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const MemoizedHomeIcon = memo(({color}) => <Icon name={'md-home-outline'} size={34}  color={color} />);
const MemoizedChartIcon = memo(({color}) => <Icon name={'ios-basket-outline'} size={34} color={color} />);
const MemoizedFavoriteIcon = memo(({color}) => <Icon name={'ios-star-outline'} size={34} color={color} />);
const MemoizedProfileIcon = memo(({color}) => <MIcon name={'account-outline'} size={34} color={color} />);

export function TabBar() {
  const cartData = useSelector((state) => state.cart.totalCount);
  const [badge, setBadge] = React.useState(cartData)

  React.useEffect(() => {setBadge(cartData)}, [cartData]);
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
        component={NestedNav}
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
              tabBarIcon: ({ color }) => <MemoizedChartIcon color={color}/>,
              tabBarBadge: badge > 0 ? badge : '',
              tabBarBadgeStyle: {
                backgroundColor: badge === 0 ? 'white' : 'rgba(42, 89, 254, 1)',
                zIndex: badge === 0 ? -99 : 99,
                overflow: badge === 0 ? 'hidden' : undefined,
              },
              unmountOnBlur: true,
          }}
        />
      <Tab.Screen
        name={BottomBarDestinations.Favorite.route}
        component={Favorite}
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
            tabBarIcon: ({color}) => {
              return <MemoizedFavoriteIcon color={color}/>;
            },
            unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name={BottomBarDestinations.User.route}
        component={Account}
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
