/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  productCardItemContainerStyle: {
    marginVertical: 15,
    width: '45%',
    padding: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 1,
    shadowColor: 'rgba(0,0,0, 0.80)',
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowRadius: 4,
    marginHorizontal: 10,
  },
  productCardItemImageStyle: {
    minWidth: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  buttonStyle: {
    paddingVertical: 8,
    paddingHorizontal: 11,
    backgroundColor: '#2A59FE',
    borderRadius: 4,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.5,
  },
  priceTextStyle: {
    color: '#2A59FE',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
});
