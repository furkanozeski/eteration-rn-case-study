/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from './style';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FilterItem = (props: any) => {
  return (
    <View style={style.mainContainer}>
      <Text style={style.filterLabel}>Filter:</Text>
      <TouchableOpacity style={style.filterButtonStyle}>
        <Text style={style.filterButtonTextStyle}>Select Filter</Text>
      </TouchableOpacity>
    </View>
  );
};
