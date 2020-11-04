import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Burger } from '../content/burger.component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export const GreyBox = (props) => {

  return (
    <ScrollView style={styles.container}>
      <Burger />
      {props.children}
    </ScrollView>
  )
}