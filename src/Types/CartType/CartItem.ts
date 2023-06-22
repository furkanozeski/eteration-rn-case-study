/* eslint-disable prettier/prettier */
export type CardItemType = {
  productName: String | string;
  price: number | string | String;
  productCount: number;
  onAdd: () => void;
  onRemove: () => void;
};
