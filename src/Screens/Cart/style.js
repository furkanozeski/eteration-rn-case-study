/* eslint-disable prettier/prettier */
const {StyleSheet} = require('react-native');

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginVertical: 20,
  },
  secondaryContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  tertiaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productNameText: {
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 19,
    color: 'black',
  },
  priceText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: '#2A59FE',
  },
  itemCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  incrementButtonStyle: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#D9D9D9',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  decrementButtonStyle: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  countAndTotalViewStyle: {
    flexGrow: 1, 
    justifyContent: 'center',
  },
  countTextStyle: {
    paddingVertical: 9,
    paddingHorizontal: 20,
    backgroundColor: '#2A59FE',
    color: '#ffffff',
    zIndex: 999,
  },
  totalTextStyle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2A59FE',
    lineHeight: 23,
  },
  priceTextStyle: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
    lineHeight: 23,
  },
  completeButtonStyle: {
    flexGrow: 1,
    backgroundColor: '#2A59FE',
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 6,
  },
  completeButtonTextStyle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
