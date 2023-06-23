/* eslint-disable prettier/prettier */
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from '@Store/Reducer/CartReducer';
import createSagaMiddleware from 'redux-saga';
import productReducer from './Reducer/ProductReducer';
import { saga } from '@Saga/saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};



export const persistedReducer = persistReducer(persistConfig, cartSlice);

const rootReducer = combineReducers({
  cart: persistedReducer,
  product: productReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleWare],
    // middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare),
});

sagaMiddleWare.run(saga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
