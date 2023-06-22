/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { style } from './style';
import { FavoriteIcon } from '@Asset/Icon/Icon';

export const ProductCardItem = (props: {
  price: String;
  name: String;
  image: string;
  isFavorite: boolean;
  onPress: () => void;
  onAddToCard: () => void
}) => {
  const { price, name, image, isFavorite, onPress, onAddToCard } = props;

  return (
    <View style={style.productCardItemContainerStyle}>
      <View>
        <Image
          source={{ uri: image }}
          style={style.productCardItemImageStyle}
          resizeMethod="resize"
        />
        <TouchableOpacity 
          style={{position: 'absolute', right: 4, top: 6}}
          onPress={() => {
            if (typeof onPress === 'function') {
              onPress();
            }
          }}
        >
          <FavoriteIcon color={isFavorite ? '#FFB800' : 'gray'}/>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          marginBottom: 15,
        }}>
        <Text style={style.priceTextStyle}>{price} ₺</Text>
        <Text
          style={{ ...style.priceTextStyle, color: '#000000', marginTop: 15 }}>
          {name}
        </Text>
      </View>

      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => typeof onAddToCard === 'function' ? onAddToCard() : null}
      >
        <Text style={style.buttonTextStyle}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
