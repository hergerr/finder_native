import React from 'react';
import { View, Text } from 'react-native';


import { COLORS } from '../../colors';

export const CloudBox = (props) => {

  const cloudStyle = (style) => {
    if (style === 'send') {
      return {
        borderColor: COLORS.custom_orange,
        width: '40%',
        marginLeft: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
      }
    } else {
      return {
        paddingVertical: 10,
        alignSelf: 'flex-end',
        marginRight: 10,
        width: '40%',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
      }

    }
  }

  return (
    <View style={cloudStyle(props.type)}>
      <Text>
        damkldsakldm askllksaml kaslkmdasmkl
        asda
        sdasd
        sdasdads
      </Text>
    </View>
  )
}