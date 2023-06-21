/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView} from 'react-native';

import NavigationHost from './src/Navigation/NavigationHost';
import {FavoriteContextProvider} from '@Context/FavoriteContext/index';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FavoriteContextProvider>
        <NavigationHost />
      </FavoriteContextProvider>
    </SafeAreaView>
  );
}

export default App;
