/* eslint-disable prettier/prettier */
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from '@Store/Reducer/CartReducer';
import createSagaMiddleware from 'redux-saga';
import productReducer from './Reducer/ProductReducer';
import { saga } from '@Saga/saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteReducer from './Reducer/FavoriteReducer';
const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  storage: AsyncStorage,
  version: 1,
  key: 'root',
  blacklist: ['product'],
};

const rootReducer = combineReducers({
  cart: cartSlice,
  favorite: FavoriteReducer,
  product: productReducer,
});


export const persistReducers = persistReducer(persistConfig, rootReducer);



export const store = configureStore({
    reducer: persistReducers,
    middleware: [sagaMiddleWare],
    // middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare),
});

sagaMiddleWare.run(saga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
