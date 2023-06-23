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
            state.totalCount += 1;
            state.totalPrice += parseInt(action.payload.price, 10);
            const incomingCartItem = state.products.find(e => e.id === action.payload.id);
            if (incomingCartItem !== undefined) {
                incomingCartItem.count += 1;
                const indexOf = state.products.indexOf(incomingCartItem);
                state.products.splice(indexOf, indexOf + 1, incomingCartItem);
            } else {
                state.products.push(action.payload);
            }

            return state;
        },
        RemoveFromChart: (state, action: PayloadAction<ProductData>) => {
            const newData = state.products.find(e => e.id === action.payload.id);
            if (newData !== undefined) {
                newData.count -= 1;
                const indexOf = state.products.indexOf(newData);
                if (newData.count === 0) {
                    state.products.splice(indexOf, indexOf + 1);
                } else {
                    state.products.splice(indexOf, indexOf + 1, newData);
                }
                state.totalCount -= 1;
                state.totalPrice -= parseInt(action.payload.price, 10);
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
