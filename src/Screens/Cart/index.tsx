/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { style } from './style';
import { useAppDispatch, useAppSelector } from '@Hooks/hooks';
import { AddToCart, RemoveFromChart } from '@Store/Reducer/CartReducer';
import ActivityIndicatorItem, { Loading } from '@UIComponents/ActivityIndicatorItem';
import { ProductData } from '@root/src/Types/ProductType/Product';
import { CardItemType } from '@root/src/Types/CartType/CartItem';



const CartItem = (props: CardItemType) => {
    const { productCount, productName, price, onAdd, onRemove } = props;

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
                <TouchableOpacity 
                    style={style.decrementButtonStyle}
                    onPress={() => typeof onRemove === 'function' ? onRemove() : null}
                >
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={style.countTextStyle}>{productCount}</Text>
                <TouchableOpacity 
                    style={style.incrementButtonStyle}
                    onPress={() => typeof onAdd === 'function' ? onAdd() : null}
                >
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



const Cart = ({ data, totalPrice }: { data: ProductData[], totalPrice: number }) => {
    const dispatch = useAppDispatch();

    return (
        <View style={style.mainContainer} accessibilityElementsHidden>
            <View style={style.secondaryContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <>
                            <CartItem
                                productCount={item.count}
                                productName={item.name}
                                price={item.price}
                                onAdd={() => {
                                    dispatch(AddToCart(item));
                                }}
                                onRemove={() => {
                                    dispatch(RemoveFromChart(item));
                                }}
                            />
                        </>
                    )}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={Loading}
                />
                <View style={style.tertiaryContainer}>
                    <View style={style.countAndTotalViewStyle}>
                        <Text style={style.totalTextStyle}>Total: </Text>
                        <Text style={style.priceTextStyle}>{totalPrice} ₺</Text>
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

const CartScreen = () => {
    const {totalPrice, products} = useAppSelector((state) => state.cart);
    return (
        Array.isArray(products) && products.length > 0 ? (
            <Cart data={products} totalPrice={totalPrice} />
        ) : (
            <ActivityIndicatorItem label={'Your cart is empty'}/>
        )
    );
};
export default CartScreen;
