import React from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Burger } from '../content/burger.component';

const styles = StyleSheet.create({
  container: {

  }
})

export const GreyBox = (props) => {

  return (
    <KeyboardAvoidingView style={styles.container}  behavior={"position"}>
      <Burger />
      {props.children}
    </KeyboardAvoidingView>
  )
}