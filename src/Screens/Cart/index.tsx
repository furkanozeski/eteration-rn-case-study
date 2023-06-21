/* eslint-disable prettier/prettier */
import { mockData } from '@root/mockdata';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { style } from './style';

type CardItemType = {
    productName: String | string,
    price: number | string | String,
    productCount: number,
}

const CartItem = (props: CardItemType) => {
    const {productCount, productName, price} = props;

    return (
        <View style={style.cartItemMainContainer}>
            <View style={{}}>
                <Text style={style.productNameText}>
                    {productName}
                </Text>
                <Text style={style.priceText}>
                    {price} ₺
                </Text>
            </View>

            <View style={style.itemCountContainer}>
                <TouchableOpacity style={style.decrementButtonStyle}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={style.countTextStyle}>{productCount}</Text>
                <TouchableOpacity style={style.incrementButtonStyle}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
 };

const Cart = () => {
  return (
    <View style={style.mainContainer}>
      <View style={style.secondaryContainer}>
      <CartItem
        productCount={0}
        productName={mockData[0].name}
        price={mockData[0].price}
      />

      <View style={style.tertiaryContainer}>
        <View style={style.countAndTotalViewStyle}>
            <Text style={style.totalTextStyle}>Total: </Text>
            <Text style={style.priceTextStyle}>12312312312 ₺</Text>
        </View>
        <TouchableOpacity style={style.completeButtonStyle}>
            <Text style={style.completeButtonTextStyle}>
                Complete
            </Text>
        </TouchableOpacity>
      </View>

      </View>
    </View>
  );
};
export default Cart;
