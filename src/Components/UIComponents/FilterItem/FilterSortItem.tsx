/* eslint-disable prettier/prettier */
import { FilterSortItemTypes } from '@root/src/Types/FilterType/FilterSortItemTypes';
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native';
import RadioButtonIcon from 'react-native-vector-icons/Ionicons';
import CheckboxIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const FilterSortItem = (props: FilterSortItemTypes) => {
  const {label, isRadioButton, enumNumber, productData, isSelected,  onRadioButtonPress, onCheckBoxPress} = props;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', marginLeft: 24, marginBottom: 12}}>
      {isRadioButton ? (
        <>
          <TouchableOpacity
            onPress={() => (typeof onRadioButtonPress === 'function' ? onRadioButtonPress(enumNumber!!) : null)}>
            <RadioButtonIcon
              name={ isSelected ? 'radio-button-on-outline' : 'radio-button-off-outline'}
              size={18}
            />
          </TouchableOpacity>
          <Text>{label}</Text>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => (typeof onCheckBoxPress === 'function' ? onCheckBoxPress(productData!!) : null)}>
            <CheckboxIcon
              name={isSelected ? 'checkbox-marked' : 'checkbox-blank-outline'}
              size={18}
            />
          </TouchableOpacity>
          <Text>{label}</Text>
        </>
      )}
    </View>
  );
};
