/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView} from 'react-native';
import NavigationHost from './src/Navigation/NavigationHost';
import {FavoriteContextProvider} from '@Context/FavoriteContext/index';
import { Provider } from 'react-redux';
import { store } from '@root/src/Store/store';
import { AppExecutor } from '@Context/AppExecutor';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Provider store={store} >
        <FavoriteContextProvider>
          <AppExecutor>
            <NavigationHost />
          </AppExecutor>
        </FavoriteContextProvider>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
