/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { SafeAreaView } from 'react-native';
import NavigationHost from './src/Navigation/NavigationHost';
import { FavoriteContextProvider } from '@Context/FavoriteContext/index';
import { Provider } from 'react-redux';
import { persistor, store } from '@root/src/Store/store';
import { AppExecutor } from '@Context/AppExecutor';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Provider store={store} >
        <PersistGate persistor={persistor} loading={null}>
          <FavoriteContextProvider>
            <AppExecutor>
              <NavigationHost />
            </AppExecutor>
          </FavoriteContextProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
