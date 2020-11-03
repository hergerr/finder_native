import React from 'react';
import { View, StyleSheet } from 'react-native';

import { GreyBox } from '../components/boxes/grey-box.component';
import { ListCard } from '../components/boxes/list-card.component';
const styles = StyleSheet.create({})

export const ListScreen = (props) => {

  return (
    <GreyBox>
      <ListCard/>
    </GreyBox>
  )
}