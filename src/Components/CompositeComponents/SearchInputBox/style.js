/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  //Search Box
  searchIconContainerStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: 'absolute',
    top: 10,
    left: 13,
  },
  searchContainerStyle: {
    marginVertical: 14,
    marginRight: 14,
    marginLeft: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(217, 217, 217, 0.1)',
  },
  textInputStyle: {
    paddingVertical: 9,
    paddingLeft: 41,
    fontSize: 18,
    lineHeight: 21.94,
    fontWeight: '500',
  },
  scaledSearchIconContainerStyle: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  scaledSearchContainerStyle: {
    marginHorizontal: 20,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(217, 217, 217, 0.3)',
  },
  scaledTextInputStyle: {
    paddingVertical: 2,
    paddingLeft: 41,
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '500',
  },
});
