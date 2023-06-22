/* eslint-disable prettier/prettier */
import {ProductData} from '../ProductType/Product';

export interface FilterType {
  sortBy: number;
  brandData: Set<ProductData>;
  modelData: Set<ProductData>;
}
