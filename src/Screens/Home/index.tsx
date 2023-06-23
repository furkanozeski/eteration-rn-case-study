/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import SearchInputBox from '@CompositeComponents/SearchInputBox/index';
import { FilterItem } from '@UIComponents/FilterItem/FilterItem';
import { ProductCardItem } from '@UIComponents/ProductCardItem/ProductCardItem';
import { useFavoriteSave, useFavoriteState } from '@Context/FavoriteContext';
import { FilterModelComponent } from '@UIComponents/FilterItem/FilterModelComponent';
import { AddToCart } from '@root/src/Store/Reducer/CartReducer';
import { useAppDispatch } from '@Hooks/hooks';
import { useAppData } from '@Context/AppExecutor';
import { FilterType } from '@root/src/Types/FilterType/FilterType';
import { ProductData } from '@root/src/Types/ProductType/Product';
import { FilterEnum } from '@root/src/Types/FilterType/FilterEnum';
import { BottomBarDestinations } from '@Routes/BottomBarDestinations';
import { Loading } from '@UIComponents/ActivityIndicatorItem';

const filterDataDispatcher = (data: FilterType, product: ProductData[]): ProductData[] => {
  let sortedProduct;
  let _data = { ...data };

  // if (data.brandData.size < 1 && data.modelData.size < 1 && data.sortBy < 0) {
  //   sortedProduct = [...product];
  //   return sortedProduct;
  // }

  sortedProduct = [...filterDataByPriorty(_data.sortBy, product)];
  sortedProduct = [...filterDataByBrand(_data.brandData, sortedProduct)];
  sortedProduct = [...filterDataByModel(_data.modelData, sortedProduct)];
  return [...sortedProduct];
};

function filterDataByPriorty(sortNum: number, product: ProductData[]): ProductData[] {
  if (sortNum < 0) {
    return product;
  }

  switch (sortNum) {
    case FilterEnum.OLD_TO_NEW:
      product.sort((prev, next) => prev.createdAt < next.createdAt ? -1 : 1);
      break;
    case FilterEnum.NEW_TO_OLD:
      product.sort((prev, next) => prev.createdAt < next.createdAt ? 1 : -1);
      break;
    case FilterEnum.PRICE_HIGH_TO_LOW:
      product.sort((prev, next) => prev.price < next.price ? 1 : -1);
      break;
    case FilterEnum.PRICE_LOW_TO_HIGH:
      product.sort((prev, next) => prev.price < next.price ? -1 : 1);
      break;
    default:
      break;
  }

  return product;
}

const filterDataByBrand = (dataTobeSorted: Set<ProductData>, product: ProductData[]): ProductData[] => {
  if (dataTobeSorted.size < 1) {
    return product;
  }
  const newValue = product.filter((element) => [...dataTobeSorted].find((e) => e.brand === element.brand));

  return newValue;
};

const filterDataByModel = (dataTobeSorted: Set<ProductData>, product: ProductData[]): ProductData[] => {
  if (dataTobeSorted.size < 1) {
    return product;
  }

  const newValue = product.filter((element) => [...dataTobeSorted].find((e) => e.model === element.model));

  return newValue;
};

function HomeScreen({ navigation }) {
  const dispatch = useAppDispatch();

  const { add } = useFavoriteSave();
  const favorite = useFavoriteState();
  const { productData } = useAppData();
  const appDataRef = React.useRef(productData);
  const sortDataRef = React.useRef<ProductData[]>([]);

  const [product, setProduct] = React.useState(appDataRef.current);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sortedData, setSortedData] = useState<ProductData[]>();
  const [onEnd, setOnEnd] = useState(12);
  const [isEnd, setIsEnd] = useState(false);

  React.useEffect(() => {
    if (Array.isArray(favorite) && favorite.length > 0) {
      let valueInProduct = product.map(data => ({
        ...data,
        isFavorite: favorite.find((el) => el.id === data.id)?.isFavorite ?? false,
      }));
      setProduct(valueInProduct);
      appDataRef.current = valueInProduct;
    } else {
      setProduct(appDataRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

  React.useEffect(() => {
    if (sortedData !== undefined && sortedData.length > 0) {
      setProduct(sortedData);
    }
  }, [sortedData]);

  const sort = React.useCallback((text: string) => {
      if (text === '' && !Array.isArray(sortedData)) {
        setProduct([...appDataRef.current]);
      } else {
        setProduct([...sortDataRef.current]);
      }

      if (text !== '' && Array.isArray(sortedData) && sortedData.length > 0) {
        const newValue = [...sortedData].filter((element) => element.name.toLocaleLowerCase().includes(text));
        setProduct(newValue);
        return;
      }
      if (text !== '' && !Array.isArray(sortedData)) {
        const newValue = [...product].filter((element) => element.name.toLocaleLowerCase().includes(text));
        setProduct(newValue);
        return;
      }
    },
  [product, sortedData]);

  const renderItem = React.useCallback(({ item }: {item: ProductData}) => (
    <>
      <ProductCardItem
        price={item.price}
        name={item.name}
        image={item.image}
        isFavorite={item.isFavorite}
        onPress={() => {
          const newItem = {
            ...item,
            isFavorite: !item.isFavorite,
          };
          add(newItem);
        }}
        onAddToCard={() => {
          dispatch(AddToCart(item));
        }}
        onPressToImage={() => {
          navigation.navigate(
            BottomBarDestinations.Home.destinations.details,
            {
              data: item,
            }
          );
        }}
      />
      <View style={{ marginRight: 5 }} />
    </>
  ), [add, dispatch, navigation])
console.log(onEnd);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <SearchInputBox shouldScaleViaStyle={false} onChangeText={(text) => { sort(text)}} />
      <FilterItem
        onPressFilter={() => {
          setModalVisible(true);
        }}
      />
      <FlatList
        data={product.slice(0, Math.min(onEnd, product.length))}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        initialNumToRender={12}
        maxToRenderPerBatch={24}
        windowSize={24}
        onEndReached={() => {
          const newVal = onEnd + 16;
          if (newVal < product.length) {
            setOnEnd(newVal);
          } else {
            setOnEnd(Math.min(newVal, product.length));
            setIsEnd(true);
          }
        }}
        ListFooterComponent={!isEnd ? <Loading /> : null }
        onEndReachedThreshold={0.2}
      />
      <FilterModelComponent
        isVisible={modalVisible}
        productData={appDataRef.current}
        onRequestClose={() => {
          setModalVisible(e => !e);
        }}
        onApply={(data) => {
          sortDataRef.current = filterDataDispatcher(data, [...appDataRef.current]);
          setSortedData(sortDataRef.current);
        }}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
