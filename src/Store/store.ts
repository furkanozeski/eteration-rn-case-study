/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import saga from '@Saga/saga';
import cartSlice from '@Store/Reducer/CartReducer';
import createSagaMiddleware from 'redux-saga';
import productReducer from './Reducer/ProductReducer';

const sagaMiddleWare = createSagaMiddleware();

// const rootReducer = {
//   cart: cartSlice,
//   product: productReducer,
// };

export const store = configureStore({
    reducer: {
      cart: cartSlice,
      product: productReducer,
    },
    middleware: [sagaMiddleWare],
    // middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleWare),
});

sagaMiddleWare.run(saga);



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
