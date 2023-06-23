/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View} from 'react-native';
import { useFavoriteState } from '@Context/FavoriteContext';
import ActivityIndicatorItem, { Loading } from '@UIComponents/ActivityIndicatorItem';
import { ProductCardItem } from '@UIComponents/ProductCardItem/ProductCardItem';
import { useAppDispatch, useAppSelector } from '@Hooks/hooks';
import { AddToCart } from '@Store/Reducer/CartReducer';
import { HandleFavorite } from '@Store/Reducer/FavoriteReducer';

export default function Favorite() {
  const favorite = useAppSelector((s) => s.favorite);
  const [favoriteData, setFavoriteData] = React.useState([...favorite])
  const dispatch = useAppDispatch();
  return (
    Array.isArray(favorite) && favorite.length > 0 ?
      (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
            <FlatList
            data={favoriteData}
            ListEmptyComponent={Loading}
            renderItem={({item}) => (
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
