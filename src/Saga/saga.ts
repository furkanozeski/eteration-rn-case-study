/* eslint-disable prettier/prettier */
import {call, takeLatest, put } from 'redux-saga/effects';
import AxiosService from '@Service/index';
import { ProductData } from '../Types/ProductType/Product';


const fetchProdutcsFromApi = () => {
    return AxiosService.GetProducts()
        .then((response) => ({response}))
        .catch((error) => ({error}));
}

export function* fetchProdutcs() {
    const {response, error} = yield call(fetchProdutcsFromApi);
    if (response) {
        let productData: ProductData[] = response.data;
        const newProductData = productData.map((data) => {
            return {
                ...data,
                isFavorite: data?.isFavorite === undefined ? false : data?.isFavorite,
                count: data?.count === undefined ? 0 : data?.count,
            };
        });
        yield put({type: 'Product/SetProducts', payload: newProductData});
    } else {
        console.log(error);
    }
}


export function* watchFetchProduct() {
    yield takeLatest('GetProduct', fetchProdutcs);
}


export default function* saga() {
    try {
        yield call(watchFetchProduct);
    } catch (error) {
        console.log('saga error', error);
    }
  }
