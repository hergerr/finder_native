import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const styles  = StyleSheet.create({
  container : {
    width: 150,
    paddingVertical: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  }
})

export const NavBox = (props) => {

  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      {props.children}
    </TouchableOpacity>
  )
}