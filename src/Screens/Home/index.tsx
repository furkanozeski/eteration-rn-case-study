/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import SearchInputBox from '@CompositeComponents/SearchInputBox/index';
import { FilterItem } from '@UIComponents/FilterItem/FilterItem';
import { ProductCardItem } from '@UIComponents/ProductCardItem/ProductCardItem';
import { FilterModelComponent } from '@UIComponents/FilterItem/FilterModelComponent';
import { AddToCart } from '@root/src/Store/Reducer/CartReducer';
import { useAppDispatch, useAppSelector } from '@Hooks/hooks';
import { ProductData } from '@root/src/Types/ProductType/Product';
import { HandleFavorite } from '@Store/Reducer/FavoriteReducer';
import { Loading } from '@UIComponents/ActivityIndicatorItem';
import { filterDataDispatcher } from './filterCase';
import { FilterType } from '@root/src/Types/FilterType/FilterType';
import { BottomBarDestinations } from '@Routes/BottomBarDestinations';


function HomeScreen({navigation}) {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector((s) => s.favorite);
  const productDataRef = useRef(useAppSelector((s) => s.product));
  const sortDataRef = React.useRef<ProductData[]>([]);

  const [product, setProduct] = React.useState([...productDataRef.current]);

  const [modalVisible, setModalVisible] = React.useState(false);

  const [onEnd, setOnEnd] = useState(12);
  const [isEnd, setIsEnd] = useState(onEnd >= product.length);

  React.useEffect(() => {
    whenAddFavoriteOccur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);


  const navigateToDetail = useCallback((item: ProductData) => {
    navigation.navigate(BottomBarDestinations.Home.destinations.details, {data: item})
  }, [navigation]);

  const renderItem = React.useCallback(({ item }: { item: ProductData }) => (
    <ProductCardItem
      price={item.price}
      name={item.name}
      image={item.image}
      isFavorite={item.isFavorite}
      onPress={() => {
        dispatch(HandleFavorite(item));
      }}
      onAddToCard={() => {
        dispatch(AddToCart(item));
      }}
      onPressToImage={() => {navigateToDetail(item);}}
    />
  ), [dispatch, navigateToDetail]);

  const whenAddFavoriteOccur = React.useCallback(() => {
    if (Array.isArray(favorite) && favorite.length > 0) {
      let valueInProduct = product.map(data => ({
        ...data,
        isFavorite: favorite.find((el) => el.id === data.id)?.isFavorite ?? false,
      }));
      productDataRef.current = [...valueInProduct];
      setProduct(valueInProduct);
    } else {
      setProduct([...productDataRef.current]);
    }
 },[favorite, product]);

 const onSearchSort = React.useCallback((text: String) => {
  let searchedData;
  if (sortDataRef.current.length > 0) {
    searchedData = [...( sortDataRef.current || [])]
    .filter((element) => element.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  } else {
    searchedData = [...( productDataRef.current || [])]
    .filter((element) => element.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }
    setProduct([...searchedData]);
 }, [productDataRef]);

 const onFilterSort = React.useCallback((data: FilterType) => {
  sortDataRef.current = filterDataDispatcher(data, [...productDataRef.current]);
  setProduct([...sortDataRef.current]);
 }, [productDataRef]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <SearchInputBox shouldScaleViaStyle={false} onChangeText={onSearchSort} />
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
        initialNumToRender={12}
        maxToRenderPerBatch={7}
        windowSize={15}
        onEndReachedThreshold={0.2}
        removeClippedSubviews
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        onEndReached={() => {
          setIsEnd(onEnd >= product.length ? true : false);
          setOnEnd(onEnd + 16);
        }}
        ListFooterComponent={!isEnd ? <Loading /> : null}
        updateCellsBatchingPeriod={75}
        viewabilityConfig={{
          waitForInteraction: true,
          viewAreaCoveragePercentThreshold: 95,
          minimumViewTime: 50,
        }}
      />
      <FilterModelComponent
        isVisible={modalVisible}
        productData={productDataRef.current}
        onRequestClose={() => {
          setModalVisible(e => !e);
        }}
        onApply={onFilterSort}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
