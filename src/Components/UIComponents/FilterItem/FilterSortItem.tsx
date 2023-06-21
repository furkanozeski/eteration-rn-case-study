/* eslint-disable prettier/prettier */
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native';
import RadioButtonIcon from 'react-native-vector-icons/Ionicons';
import CheckboxIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type FilterSortItemTypes = {
  label: string | String;
  isRadioButton: Boolean | boolean;
  onPress: () => void;
};

export const FilterSortItem = (props: FilterSortItemTypes) => {
  const {label, isRadioButton, onPress} = props;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', marginLeft: 24, marginBottom: 12}}>
      {isRadioButton ? (
        <>
          <TouchableOpacity
            onPress={() => (typeof onPress === 'function' ? onPress() : null)}>
            <RadioButtonIcon
              name={'radio-button-off-outline' || 'radio-button-on-outline'}
              size={18}
            />
          </TouchableOpacity>
          <Text>{label}</Text>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => (typeof onPress === 'function' ? onPress() : null)}>
            <CheckboxIcon
              name={'checkbox-blank-outline' || 'checkbox-marked'}
              size={18}
            />
          </TouchableOpacity>
          <Text>{label}</Text>
        </>
      )}
    </View>
  );
};
