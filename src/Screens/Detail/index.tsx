/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import { style } from './style';
import { useAppDispatch } from '@Hooks/hooks';
import { AddToCart } from '@Store/Reducer/CartReducer';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { FavoriteIcon } from '@Asset/Icon/Icon';

export default function DetailScreen({route}) {
  const {data} = route.params;
  const dispatch = useAppDispatch()
  return (
    <View style={style.mainContainer}>
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flexGrow:0.45}}
        >
            <Image
                source={{
                    uri: data.image,
                }}
                resizeMethod="resize"
                resizeMode="stretch"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{flex: 1}}
            />
            <View  style={{position: 'absolute', right: 4, top: 6}}>
              <FavoriteIcon color={data.isFavorite ? '#FFB800' : 'gray'}/>
            </View>
        </View>
      <Text style={style.productNameStye}>
        {data.name}
      </Text>
      <Text style={style.productDescriptionStye}>
        {data.description}
      </Text>

      <View style={style.bottomLineContainer}>
        <View>
            <Text>Price: </Text>
            <Text>{data.price} ₺</Text>
        </View>
        <TouchableOpacity 
          style={style.addToCartButtonStyle}
          onPress={() => {
            const newVal = {
              ...data,
              count: 1,
            };
            dispatch(AddToCart(newVal));
          }}
        >
            <Text style={style.addToCartTextStyle}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
