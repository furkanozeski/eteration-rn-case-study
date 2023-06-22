/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export const Loading = () => <ActivityIndicator size="large" color="#0000ff" />;

export default function ActivityIndicatorItem({label}: {label: string}) {
  return (
    <View style={style.mainContainer}>
      <Text style={style.textStyle}>{label}</Text>
      <Loading />
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
});
