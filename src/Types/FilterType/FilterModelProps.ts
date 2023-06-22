/* eslint-disable prettier/prettier */
import {ProductData} from '../ProductType/Product';
import {FilterEnum} from './FilterEnum';

export type Props = {
  isVisible: boolean;
  productData: ProductData[],
  onRequestClose: () => void;
  onSelectFilter: (data: FilterEnum) => void;
  onSelectBrand: (data: ProductData) => void;
  onSelectModel: (data: ProductData) => void;
};
