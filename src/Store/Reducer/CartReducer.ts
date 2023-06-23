/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {CartStore } from '@root/src/Types/CartType/CartStore';
import { ProductData } from '@root/src/Types/ProductType/Product';

const initialState: CartStore = {
    totalCount: 0,
    totalPrice: 0.0,
    products: [],
};

export const cartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        AddToCart: (state, action: PayloadAction<ProductData>) => {
            const newItem = action.payload;
            const existingItem = state.products.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.count++;
            } else {
                state.products.push({ ...newItem, count: 1 });
            }
            state.totalCount++;
            state.totalPrice += parseInt(newItem.price, 10);
        },
        RemoveFromChart: (state, action: PayloadAction<ProductData>) => {
            const item = action.payload;
            const existingItem = state.products.find(e => e.id === item.id);

            if (existingItem) {
                if (existingItem.count === 1) {
                state.products = state.products.filter(e => e.id !== item.id);
                } else {
                existingItem.count--;
                }
                state.totalCount--;
                state.totalPrice -= parseInt(existingItem.price, 10);
            }
        },
        SetCartState: (state, action: PayloadAction<CartStore>) => {
            return {
                ...state,
                ...action,
            };
        },
    },
});

export const {AddToCart, RemoveFromChart, SetCartState} = cartSlice.actions;

export default cartSlice.reducer;
