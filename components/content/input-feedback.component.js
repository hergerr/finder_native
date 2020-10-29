import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 15,
    marginBottom: 5,
  }
})

export const InputFeedback = (props) => {

  return (
    <Text style={styles.text}>
      {props.text}
    </Text>
  )
}