/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import ActivityIndicatorItem from '@UIComponents/ActivityIndicatorItem';
import { AppExecutorModel } from '@root/src/Types/AppExecutorType/AppExecutorModel';
import { ProductData } from '@root/src/Types/ProductType/Product';
import { useAppSelector } from '@Hooks/hooks';
import { useDispatch } from 'react-redux';

const AppData: AppExecutorModel = {
    hasInitialDataLoaded: false,
    productData: new Array<ProductData>()
} 

const AppExecutorContext = React.createContext<AppExecutorModel>(AppData);


export const AppExecutor = ({children}: {children: React.ReactNode}) => {
    const productData = useAppSelector((state) => state.product);
    const [product, setProduct] = useState<ProductData[]>(productData);
    const [isDataLoaded, setIsDataLoaded] = useState(AppData.hasInitialDataLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
      if (productData.length < 1) {
        dispatch({type: 'GetProduct'});
      } else {
        setProduct(productData);
        setIsDataLoaded(true);
      }
      return () => {};
    }, [productData, dispatch]);

    AppData.hasInitialDataLoaded = isDataLoaded;
    AppData.productData = product;
    return (
        <AppExecutorContext.Provider value={AppData}>
            {
                isDataLoaded ?
                (children)
                :
                (
                    <ActivityIndicatorItem label=''/>
                )
            }
        </AppExecutorContext.Provider>
      );
};

export const useAppData = () => React.useContext(AppExecutorContext);
