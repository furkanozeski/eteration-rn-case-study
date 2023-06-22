/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit';
import { ProductData } from '@root/src/Types/ProductType/Product';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initialState: ProductData[] = [];

const productReducer = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        SetProducts: (state, action: PayloadAction<ProductData[]>) => {
            state.push(...action.payload);
            return state;
        },
    },
});

export const {SetProducts} = productReducer.actions;

export default productReducer.reducer;
