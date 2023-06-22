/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import SearchInputBox from '@CompositeComponents/SearchInputBox/index';
import {FilterItem} from '@UIComponents/FilterItem/FilterItem';
import {ProductCardItem} from '@UIComponents/ProductCardItem/ProductCardItem';
import { useFavoriteSave, useFavoriteState } from '@Context/FavoriteContext';
import { FilterModelComponent } from '@UIComponents/FilterItem/FilterModelComponent';
import { AddToCart } from '@root/src/Store/Reducer/CartReducer';
import { useAppDispatch } from '@Hooks/hooks';
import { ProductData } from '@root/src/Types/ProductType/Product';
import { useAppData } from '@Context/AppExecutor';
import { FilterEnum } from '@root/src/Types/FilterType/FilterEnum';



function HomeScreen() {
  const dispatch = useAppDispatch();

  const {add} = useFavoriteSave();
  const favorite = useFavoriteState();
  const {productData} = useAppData();
  const appDataRef = React.useRef(productData);

  const [product, setProduct] = React.useState(appDataRef.current);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    if (Array.isArray(favorite) && favorite.length > 0) {
      let valueInProduct = product.map(data => ({
        ...data,
        isFavorite: favorite.find((el) => el.id === data.id)?.isFavorite ?? false,
      }));
      setProduct(valueInProduct);
    } else {
      setProduct(appDataRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SearchInputBox />
      <FilterItem
        onPressFilter={() => {
          setModalVisible(true);
        }}

      />
      <FlatList
        data={product}
        renderItem={({item}) => (
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
                const newVal = {
                  ...item,
                  count: 1,
                };
                dispatch(AddToCart(newVal));
              }}
            />
            <View style={{marginRight: 5}} />
          </>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
      />
      <FilterModelComponent
        isVisible={modalVisible}
        productData={product}
        onRequestClose={() => {
          setModalVisible(e => !e);
        }}
        onSelectFilter={(data: FilterEnum) => {
        }}
        onSelectBrand={(data: ProductData) => {
        }}
        onSelectModel={(data: ProductData) => {
        }}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
