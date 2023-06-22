/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput} from 'react-native';
// import {SearchIcon} from '@Asset/Icon/Icon';
import { style } from './style';
import SearchIcon from 'react-native-vector-icons/AntDesign';
type Props = {
  shouldScaleViaStyle: boolean;
  onChangeText: (text: string) => void
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchInputBox = (props: Props) => {
  const {shouldScaleViaStyle, onChangeText} = props
  return (
    <View style={shouldScaleViaStyle ? style.scaledSearchContainerStyle : style.searchContainerStyle}>
      <View style={shouldScaleViaStyle ? style.scaledSearchIconContainerStyle : style.searchIconContainerStyle}>
        <SearchIcon  name="search1" size={shouldScaleViaStyle ? 12 : 24}/>
      </View>
      <TextInput
        style={shouldScaleViaStyle ? style.scaledTextInputStyle : style.textInputStyle}
        placeholder="Search"
        placeholderTextColor={'#616B8A'}
        onChangeText={(text) => {onChangeText(text);}}
      />
    </View>
  );
};


export default SearchInputBox;
