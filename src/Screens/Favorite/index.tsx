/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View} from 'react-native';
import { useFavoriteSave, useFavoriteState } from '@Context/FavoriteContext';
import ActivityIndicatorItem, { Loading } from '@UIComponents/ActivityIndicatorItem';
import { ProductCardItem } from '@UIComponents/ProductCardItem/ProductCardItem';
import { useAppDispatch } from '@Hooks/hooks';
import { AddToCart } from '@Store/Reducer/CartReducer';
import { ProductData } from '@root/src/Types/ProductType/Product';

export default function Favorite() {
  let cartModel: ProductData;
  const favorite = useFavoriteState();
  const {remove} = useFavoriteSave();
  const dispatch = useAppDispatch();
  return (
    Array.isArray(favorite) && favorite.length > 0 ?
      (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
            <FlatList
            data={favorite}
            ListEmptyComponent={Loading}
            renderItem={({item}) => (
              <ProductCardItem
                name={item.name}
                image={item.image}
                onAddToCard={() => {
                  cartModel = {...item, count: 1};
                  dispatch(AddToCart(cartModel));
                }}
                onPress={() => {
                  remove(item);
                }}
                price={item.price}
                isFavorite={item.isFavorite}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
            key={2}
          />
        </View>
      )
      :
      (
        <ActivityIndicatorItem label={'Your favorite is empty'}/>
      )
  )
}
