import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    backgroundColor: 'rgba(0,0,0,0.4)', // 40% opaque
    borderColor: 'black',
    borderWidth: 2,
    color: 'white',
    borderRadius: 5,
    opacity: 30,
  }
})

export const BigInput = (props) => {

  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#fff"
      {...props}
    />
  )
}