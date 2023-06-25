/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import {FlatList, View} from 'react-native';
import ActivityIndicatorItem, { Loading } from '@UIComponents/ActivityIndicatorItem';
import { ProductCardItem } from '@UIComponents/ProductCardItem/ProductCardItem';
import { useAppDispatch, useAppSelector } from '@Hooks/hooks';
import { AddToCart } from '@Store/Reducer/CartReducer';
import { HandleFavorite } from '@Store/Reducer/FavoriteReducer';
import { ProductData } from '@root/src/Types/ProductType/Product';

export default function Favorite() {
  const favorite = useAppSelector((s) => s.favorite);
  const dispatch = useAppDispatch();

  const _renderIten = useCallback(({item}: {item: ProductData}) => (
    <ProductCardItem
      name={item.name}
      image={item.image}
      onAddToCard={() => {
        dispatch(AddToCart(item));
      }}
      onPress={() => {
        dispatch(HandleFavorite(item));
      }}
      price={item.price}
      isFavorite={item.isFavorite}
    />
  ), [dispatch]);
  return (
    Array.isArray(favorite) && favorite.length > 0 ?
      (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
            <FlatList
            data={favorite}
            ListEmptyComponent={Loading}
            renderItem={_renderIten}
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
