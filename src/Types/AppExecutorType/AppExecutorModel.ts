/* eslint-disable prettier/prettier */
import {ProductData} from '../ProductType/Product';

export interface AppExecutorModel {
  hasInitialDataLoaded: boolean;
  productData: ProductData[];
}
