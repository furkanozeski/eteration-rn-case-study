/* eslint-disable prettier/prettier */
import {ProductData} from '../ProductType/Product';

export type FilterSortItemTypes = {
  label: string | String;
  isRadioButton: Boolean | boolean;
  enumNumber?: number;
  productData?: ProductData,
  onRadioButtonPress?: ((data: number) => void | undefined);
  onCheckBoxPress?: ((data: ProductData) => void | undefined);
};
