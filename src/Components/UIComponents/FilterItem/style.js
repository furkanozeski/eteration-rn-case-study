/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 17,
    marginBottom: 10,
  },
  filterLabel: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 22,
    color: 'rgba(0,0,0,1)',
  },
  filterButtonStyle: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    paddingHorizontal: 38,
  },
  filterButtonTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: 'rgba(0,0,0,1)',
  },
  //Modal style
  modalContainer: {
    flex: 1,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingLeft: 14,
    width: '100%',
    alignItems: 'center',
    elevation: 12,
  },
  modalHeaderTextStyle: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '500',
    flexGrow: 0.85,
  },
  sortLabelStyle: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 17,
    marginBottom: 15,
    marginLeft: 14,
  },
  sortItemContainerStyle: {
    flexGrow: 0.35,
    flexBasis: 105,
  },
  dividerStyle: {
    height: 2,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 14,
    marginVertical: 12,
  },
  flatListStyle: {
    flexGrow: 0.35,
    flexBasis: 100,
  },
  applyButtonStyle: {
    backgroundColor: 'rgba(42, 89, 254, 1)',
    borderRadius: 4,
    marginHorizontal: 14,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 0.1,
  },
  applyButtonTextStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21,
    paddingVertical: 12,
    paddingLeft: 14,
    textAlign: 'center',
  },

});
