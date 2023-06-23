/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ProductData} from '@root/src/Types/ProductType/Product';

const initialState: ProductData[] = [];

const favoriteReducer = createSlice({
  name: 'Favorite',
  initialState,
  reducers: {
    HandleFavorite: (state, action: PayloadAction<ProductData>) => {
      const valueInState = state.find(item => item.id === action.payload.id);
      if (valueInState) {
        const index = state.indexOf(valueInState);
        state.splice(index, 1);
      } else {
        state.push({...action.payload, isFavorite: true});
      }
    },
  },
});

export const {HandleFavorite} = favoriteReducer.actions;

export default favoriteReducer.reducer;
