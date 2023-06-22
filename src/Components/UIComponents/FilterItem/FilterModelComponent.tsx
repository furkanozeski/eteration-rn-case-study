/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity,  Modal, View, FlatList} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { FilterSortItem } from './FilterSortItem';
import { style } from './style';
import { Props } from '@root/src/Types/FilterType/FilterModelProps';

const FilterSortByItems = [
  {label: 'Old to new', enum: 0},
  {label: 'New to old', enum: 1},
  {label: 'Price high to low', enum: 2},
  {label: 'Price low to high', enum: 3},
];

export const FilterModelComponent = (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {isVisible, productData, onRequestClose, onSelectFilter, onSelectBrand, onSelectModel} = props;
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onRequestClose}
      animationType="slide"
    >
      <View style={style.modalContainer}>
        <View
          style={style.modalHeaderContainer}>
          <TouchableOpacity style={{}} onPress={onRequestClose}>
            <CloseIcon name={'close'} size={36} color={'black'} />
          </TouchableOpacity>
          <Text
            style={style.modalHeaderTextStyle}>
            Filter
          </Text>
        </View>

        <Text
          style={style.sortLabelStyle}>
          Sort By
        </Text>
        <View style={style.sortItemContainerStyle}>
          {FilterSortByItems.map(itemData => (
            <FilterSortItem
              key={itemData.enum}
              label={itemData.label}
              isRadioButton={true}
              enumNumber={itemData.enum}
              onRadioButtonPress={(data) => {
                onSelectFilter(data);
              }}
            />
          ))}
        </View>

        <View style={style.dividerStyle} />

        <Text style={style.sortLabelStyle}>
          Brand
        </Text>
        <FlatList
          data={productData}
          renderItem={({item}) => (
            <FilterSortItem
              key={item.id}
              label={item.brand}
              isRadioButton={false}
              productData={item}
              onCheckBoxPress={(data) => {
                onSelectBrand(data);
              }}
            />
          )}
          keyExtractor={item => item.id}
          style={style.flatListStyle}
        />

        <View style={style.dividerStyle} />

        <Text style={style.sortLabelStyle}>
          Model
        </Text>
        <FlatList
          data={productData}
          renderItem={({item}) => (
            <FilterSortItem
              key={item.id}
              label={item.model}
              isRadioButton={false}
              productData={item}
              onCheckBoxPress={(data) => {
                onSelectModel(data);
              }}
            />
          )}
          keyExtractor={item => item.id}
          style={style.flatListStyle}
        />
        <TouchableOpacity
          style={style.applyButtonStyle}
          onPress={() => {
          }}
        >
          <Text
            style={style.applyButtonTextStyle}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
