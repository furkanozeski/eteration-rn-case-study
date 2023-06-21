/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 10,
  },
  addToCartButtonStyle: {
    backgroundColor: 'rgba(42, 89, 254, 1)',
    borderRadius: 4,
    marginHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.1,
  },
  addToCartTextStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21,
    paddingVertical: 7,
    paddingHorizontal: 14,
    textAlign: 'center',
  },
  productNameStye: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 23,
    color: 'black',
  },
  productDescriptionStye: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: 'black',
    textAlign: 'left',
    marginTop: 15,
  },
  bottomLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexGrow: 0.50,
  }

});
