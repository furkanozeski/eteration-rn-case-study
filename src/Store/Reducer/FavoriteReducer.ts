/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {ProductData} from '@root/src/Types/ProductType/Product';

const initialState: ProductData[] = [];

const favoriteReducer = createSlice({
  name: 'Favorite',
  initialState,
  reducers: {
    SetFavorite: (state, action: PayloadAction<ProductData[]>) => {
      console.log(action);
      state.push(...action.payload);
      return state;
    },
  },
});

export const {SetFavorite} = favoriteReducer.actions;

export default favoriteReducer.reducer;
