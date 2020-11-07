import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontSize: 15
  },

  input: {
    backgroundColor: 'white'
  },

})

export const InputAndLabel = (props) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} {...props}/>
    </View>
  )

}