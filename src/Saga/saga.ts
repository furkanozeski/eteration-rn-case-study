/* eslint-disable prettier/prettier */
import { call, takeLatest, put, all, takeEvery, spawn } from 'redux-saga/effects';
import AxiosService from '@Service/index';
import { ProductData } from '../Types/ProductType/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartStore } from '../Types/CartType/CartStore';


const fetchProdutcsFromApi = () => {
    return AxiosService.GetProducts()
        .then((response) => ({ response }))
        .catch((error) => ({ error }));
}

export function* fetchProdutcs() {
    const { response, error } = yield call(fetchProdutcsFromApi);
    if (response) {
        let productData: ProductData[] = response.data;
        const newProductData = productData.map((data) => {
            return {
                ...data,
                isFavorite: data?.isFavorite === undefined ? false : data?.isFavorite,
                count: data?.count === undefined ? 0 : data?.count,
            };
        });
        yield put({ type: 'Product/SetProducts', payload: newProductData });
    } else {
        console.log(error);
    }
}


export function* watchFetchProduct() {
    yield takeLatest('GetProduct', fetchProdutcs);
}


export function* fetchFavorite() {
    const persistData: CartStore = yield call(AsyncStorage.getItem, 'persist:root');
    console.log('persistFavoriteData', persistData);
}

export function* watchPersist() {
    yield takeEvery('GetFavorite', fetchFavorite);
}

export function* saga() {
    const sagas = [
        watchFetchProduct,
        watchPersist,
    ];

    yield all(sagas.map(d =>
        spawn(function* () {
            while (true) {
                try {
                    yield call(d)
                    break
                } catch (e) {
                    console.log(e)
                }
            }
        }))
    );
}


