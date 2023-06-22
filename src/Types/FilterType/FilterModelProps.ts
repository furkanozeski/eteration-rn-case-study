/* eslint-disable prettier/prettier */
import {ProductData} from '../ProductType/Product';
import { FilterType } from './FilterType';

export type Props = {
  isVisible: boolean;
  productData: ProductData[],
  onRequestClose: () => void;
  onApply: (data: FilterType) => void
};
