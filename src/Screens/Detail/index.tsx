/* eslint-disable prettier/prettier */
import { mockData } from '@root/mockdata';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { style } from './style';

export default function DetailScreen() {
  return (
    <View style={style.mainContainer}>
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flexGrow:0.45}}
        >
            <Image
                source={{
                    uri: mockData[0].image,
                }}
                resizeMethod="resize"
                resizeMode="stretch"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{flex: 1}}
            />
        </View>
      <Text style={style.productNameStye}>
        {mockData[0].name}
      </Text>
      <Text style={style.productDescriptionStye}>
        {mockData[0].description}
      </Text>

      <View style={style.bottomLineContainer}>
        <View>
            <Text>Price: </Text>
            <Text>{mockData[0].price} ₺</Text>
        </View>
        <TouchableOpacity style={style.addToCartButtonStyle} >
            <Text style={style.addToCartTextStyle}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
