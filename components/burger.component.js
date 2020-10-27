import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../colors';

export const Burger = (props) => {

  const navigation = useNavigation();

  return (
    <Icon.Button name="navicon"
      color={COLORS.custom_orange} size={50}
      iconStyle={{ marginRight: 0 }} borderRadius={0}
      backgroundColor="transparent"
      onPress={() => { navigation.toggleDrawer() }}
    />
  )
} 
