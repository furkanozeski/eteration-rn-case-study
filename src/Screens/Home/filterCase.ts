/* eslint-disable prettier/prettier */
import {FilterEnum} from '@root/src/Types/FilterType/FilterEnum';
import {FilterType} from '@root/src/Types/FilterType/FilterType';
import {ProductData} from '@root/src/Types/ProductType/Product';

export const filterDataDispatcher = (
  data: FilterType,
  product: ProductData[],
): ProductData[] => {
  let sortedProduct;
  let _data = {...data};

  sortedProduct = [...filterDataByPriorty(_data.sortBy, product)];
  sortedProduct = [...filterDataByBrand(_data.brandData, sortedProduct)];
  sortedProduct = [...filterDataByModel(_data.modelData, sortedProduct)];
  return [...sortedProduct];
};

function filterDataByPriorty(
  sortNum: number,
  product: ProductData[],
): ProductData[] {
  if (sortNum < 0) {
    return product;
  }

  switch (sortNum) {
    case FilterEnum.OLD_TO_NEW:
      product.sort((prev, next) => (prev.createdAt < next.createdAt ? -1 : 1));
      break;
    case FilterEnum.NEW_TO_OLD:
      product.sort((prev, next) => (prev.createdAt < next.createdAt ? 1 : -1));
      break;
    case FilterEnum.PRICE_HIGH_TO_LOW:
      product.sort((prev, next) => (prev.price < next.price ? 1 : -1));
      break;
    case FilterEnum.PRICE_LOW_TO_HIGH:
      product.sort((prev, next) => (prev.price < next.price ? -1 : 1));
      break;
    default:
      break;
  }

  return product;
}

const filterDataByBrand = (
  dataTobeSorted: Set<ProductData>,
  product: ProductData[],
): ProductData[] => {
  if (dataTobeSorted.size < 1) {
    return product;
  }
  const newValue = product.filter(element =>
    [...dataTobeSorted].find(e => e.brand === element.brand),
  );

  return newValue;
};

const filterDataByModel = (
  dataTobeSorted: Set<ProductData>,
  product: ProductData[],
): ProductData[] => {
  if (dataTobeSorted.size < 1) {
    return product;
  }

  const newValue = product.filter(element =>
    [...dataTobeSorted].find(e => e.model === element.model),
  );

  return newValue;
};
