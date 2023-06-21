/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {Dimensions, FlatList, Modal, SafeAreaView, Text, Touchable, TouchableOpacity, View} from 'react-native';
import SearchInputBox from '@CompositeComponents/SearchInputBox/index';
import {FilterItem} from '@UIComponents/FilterItem/FilterItem';
import {ProductCardItem} from '@UIComponents/ProductCardItem/ProductCardItem';
import { useFavoriteSave, useFavoriteState } from '@Context/FavoriteContext';
import { mockData } from '@root/mockdata';
import { FilterModelComponent } from '@UIComponents/FilterItem/FilterModelComponent';
import DetailScreen from '@Screens/Detail';
import Cart from '@Screens/Cart';







function HomeScreen() {
  const favorite = useFavoriteState();
  const save = useFavoriteSave();
  const {width} = Dimensions.get('screen');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <SearchInputBox />
      <FilterItem />
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <>
            <ProductCardItem
              price={item.price}
              name={item.name}
              image={item.image}
              onPress={() => {
                save.add(item);
              }}
              id={item.id}
            />
            <View style={{marginRight: 5}} />
          </>
        )}
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
