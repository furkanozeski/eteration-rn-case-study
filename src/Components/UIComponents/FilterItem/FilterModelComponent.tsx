/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { mockData } from '@root/mockdata';
import { Text, TouchableOpacity,  Modal, View, FlatList} from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { FilterSortItem } from './FilterSortItem';
import { style } from './style';


const FilterSortByItems = [
  {label: 'Old to new', enum: 0},
  {label: 'New to old', enum: 1},
  {label: 'Price high to low', enum: 2},
  {label: 'Price low to high', enum: 3},
];



export const FilterModelComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal visible={modalVisible}>
      <View style={style.modalContainer}>
        <View
          style={style.modalHeaderContainer}>
          <TouchableOpacity style={{}}>
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
              onPress={() => {
                console.log('tikladin simdi');
              }}
            />
          ))}
        </View>

        <View style={style.dividerStyle} />

        <Text style={style.sortLabelStyle}>
          Brand
        </Text>
        <FlatList
          data={mockData}
          renderItem={({item}) => (
            <FilterSortItem
              key={item.id}
              label={item.brand}
              isRadioButton={false}
              onPress={() => {
                console.log('tikladin simdi');
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
          data={mockData}
          renderItem={({item}) => (
            <FilterSortItem
              key={item.id}
              label={item.brand}
              isRadioButton={false}
              onPress={() => {
                console.log('tikladin simdi');
              }}
            />
          )}
          keyExtractor={item => item.id}
          style={style.flatListStyle}
        />
        <TouchableOpacity
          style={style.applyButtonStyle}>
          <Text
            style={style.applyButtonTextStyle}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
