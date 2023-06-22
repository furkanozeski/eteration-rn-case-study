/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, FlatList, SafeAreaView, View} from 'react-native';
import SearchInputBox from '@CompositeComponents/SearchInputBox/index';
import {FilterItem} from '@UIComponents/FilterItem/FilterItem';
import {ProductCardItem} from '@UIComponents/ProductCardItem/ProductCardItem';
import { useFavoriteSave, useFavoriteState } from '@Context/FavoriteContext';
import { mockData } from '@root/mockdata';
import { FilterModelComponent } from '@UIComponents/FilterItem/FilterModelComponent';
import { AddToCart } from '@root/src/Store/Reducer/CartReducer';
import { useAppDispatch } from '@Hooks/hooks';
import { ProductData } from '@root/src/Types/ProductType/Product';
import { useAppData } from '@Context/AppExecutor';



function HomeScreen() {
  let cartModel: ProductData;
  const {add} = useFavoriteSave();
  const favorite = useFavoriteState();
  const dispatch = useAppDispatch();
  const {productData} = useAppData();
  const appDataRef = React.useRef(productData)
  const [product, setProduct] = React.useState(appDataRef.current);

  React.useEffect(() => {
    if (Array.isArray(favorite) && favorite.length > 0) {
      let valueInProduct = product.map(data => ({
        ...data,
        isFavorite: favorite.find((el) => el.id === data.id)?.isFavorite ?? false,
      }));
      setProduct(valueInProduct);
    } else {
      setProduct(appDataRef.current);
    }
  }, [favorite]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SearchInputBox />
      <FilterItem />
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
                  isFavorite: !item.isFavorite
                }
                add(newItem);
              }}
              onAddToCard={() => {
                const newVal = {
                  ...item,
                  count: 1
                }
                dispatch(AddToCart(newVal));
              }}
            />
            <View style={{marginRight: 5}} />
          </>
        )}
        // extraData={appDataRef.current}
        keyExtractor={item => item.id}
        numColumns={2}
        key={2}
        style={{}}
        contentContainerStyle={{
          justifyContent: 'center',
        }}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
      />
      <FilterModelComponent />
    </SafeAreaView>
  );
}

export default HomeScreen;
