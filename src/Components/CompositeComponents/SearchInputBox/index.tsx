/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
import {SearchIcon} from '@Asset/Icon/Icon';
import { style } from './style';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearhInputBox = (props: any) => {
  return (
    <View style={style.searchContainerStyle}>
      <View style={style.searchIconContainerStyle}>
        <SearchIcon />
      </View>
      <TextInput
        style={style.textInputStyle}
        placeholder="Search"
        placeholderTextColor={'#616B8A'}
      />
    </View>
  );
};


export default SearhInputBox;
