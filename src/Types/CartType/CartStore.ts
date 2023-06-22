/* eslint-disable prettier/prettier */
import {ProductData} from '../ProductType/Product';

export interface CartStore {
  totalCount: number;
  totalPrice: number;
  products: ProductData[];
}

