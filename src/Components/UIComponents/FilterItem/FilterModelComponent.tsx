/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TouchableOpacity, Modal, View, FlatList } from 'react-native';
import CloseIcon from 'react-native-vector-icons/AntDesign';
import { FilterSortItem } from './FilterSortItem';
import { style } from './style';
import { Props } from '@root/src/Types/FilterType/FilterModelProps';
import { ProductData } from '@root/src/Types/ProductType/Product';
import { FilterType } from '@root/src/Types/FilterType/FilterType';
import SearchInputBox from '@CompositeComponents/SearchInputBox';

const FilterSortByItems = [
  { label: 'Old to new', enum: 0 },
  { label: 'New to old', enum: 1 },
  { label: 'Price high to low', enum: 2 },
  { label: 'Price low to high', enum: 3 },
];

const MODEL_SET = new Set<ProductData>();
const BRAND_SET = new Set<ProductData>();

const initialState = {
  sortBy: -1,
  brandData: new Set<ProductData>(),
  modelData: new Set<ProductData>(),
};

export const FilterModelComponent = (props: Props) => {
  const { isVisible, productData, onRequestClose, onApply } = props;
  const prodDataRef = React.useRef([...productData]);

  const [selectedItems, setSelectedItems] = useState<FilterType>({
    ...initialState,
  });
  const [brand, setBrand] = useState<ProductData[]>([...prodDataRef.current]);
  const [model, setModel] = useState<ProductData[]>([...prodDataRef.current]);
  const [brandText, setBrandText] = useState('');
  const [modelText, setModelText] = useState('');


  React.useEffect(() => {
    const _productData = [...prodDataRef.current];
    if (brandText !== '') {
      const newBrandData = [..._productData].filter(e =>
        e.brand.toLocaleLowerCase().includes(brandText.toLocaleLowerCase()),
      );
      setBrand(newBrandData);
      return;
    } else {
      setBrand([...prodDataRef.current]);
    }
  }, [brandText, productData]);

  React.useEffect(() => {
    const _productData = [...prodDataRef.current];
    if (modelText !== '') {
      const newModelData = [..._productData].filter(e =>
        e.model.toLocaleLowerCase().includes(modelText.toLocaleLowerCase()),
      );
      setModel(newModelData);
      return;
    } else {
      setModel([...prodDataRef.current]);
    }

  }, [modelText, productData]);


  const renderBrandList = React.useCallback(({ item }: { item: ProductData }) => (<FilterSortItem
    key={item.id}
    label={item.brand}
    isRadioButton={false}
    productData={item}
    onCheckBoxPress={data => {
      if (BRAND_SET.has(data)) {
        BRAND_SET.delete(data);
      } else {
        BRAND_SET.add(data);
      }
      setSelectedItems({
        ...selectedItems,
        brandData: BRAND_SET,
      });
    }}
    isSelected={selectedItems.brandData.has(item)}
  />), [selectedItems]);

  const renderModelList = React.useCallback(({ item }: { item: ProductData }) => (
    <FilterSortItem
      key={item.id}
      label={item.model}
      isRadioButton={false}
      productData={item}
      onCheckBoxPress={data => {
        if (MODEL_SET.has(data)) {
          MODEL_SET.delete(data);
        } else {
          MODEL_SET.add(data);
        }
        setSelectedItems({
          ...selectedItems,
          modelData: MODEL_SET,
        });
      }}
      isSelected={selectedItems.modelData.has(item)}
    />
  ), [selectedItems]);

  const renderBrandFlatList = React.useCallback(() => (
    <FlatList
      initialNumToRender={10}
      maxToRenderPerBatch={12}
      data={brand}
      renderItem={renderBrandList}
      keyExtractor={item => item.id}
      style={style.flatListStyle}
    />
  ), [brand, renderBrandList]);

  const renderModelFlatList = React.useCallback(() => (
    <FlatList
      initialNumToRender={10}
      maxToRenderPerBatch={12}
      data={model}
      renderItem={renderModelList}
      keyExtractor={item => item.id}
      style={style.flatListStyle}
    />
  ), [model, renderModelList]);

  return (
    <Modal
      visible={isVisible}
      onRequestClose={() => {
        onRequestClose();
        setSelectedItems({
          modelData: initialState.modelData,
          brandData: initialState.brandData,
          sortBy: initialState.sortBy,
        });
        setBrandText('');
        setModelText('');
      }}
      animationType="none">
      <View style={style.modalContainer}>
        <View style={style.modalHeaderContainer}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setSelectedItems({
                modelData: initialState.modelData,
                brandData: initialState.brandData,
                sortBy: initialState.sortBy,
              });
              onRequestClose();
            }}>
            <CloseIcon name={'close'} size={36} color={'black'} />
          </TouchableOpacity>
          <Text style={style.modalHeaderTextStyle}>Filter</Text>
        </View>

        <Text style={style.sortLabelStyle}>Sort By</Text>
        <View style={style.sortItemContainerStyle}>
          {FilterSortByItems.map(itemData => (
            <FilterSortItem
              key={itemData.enum}
              label={itemData.label}
              isRadioButton={true}
              enumNumber={itemData.enum}
              onRadioButtonPress={data => {
                setSelectedItems(prev => ({
                  ...prev,
                  sortBy: data === selectedItems.sortBy ? -1 : data,
                }));
              }}
              isSelected={selectedItems?.sortBy === itemData.enum}
            />
          ))}
        </View>

        <View style={style.dividerStyle} />

        <Text style={style.sortLabelStyle}>Brand</Text>
        <SearchInputBox
          shouldScaleViaStyle
          onChangeText={text => {
            setBrandText(text);
          }}
        />
        {renderBrandFlatList()}
        <View style={style.dividerStyle} />

        <Text style={style.sortLabelStyle}>Model</Text>
        <SearchInputBox
          shouldScaleViaStyle
          onChangeText={text => {
            setModelText(text);
          }}
        />
        {renderModelFlatList()}
        <TouchableOpacity
          style={style.applyButtonStyle}
          onPress={() => {
            onApply(selectedItems);
            onRequestClose();
            setBrandText('');
            setModelText('');
          }}>
          <Text style={style.applyButtonTextStyle}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
