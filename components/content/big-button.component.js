import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.custom_orange,
    borderRadius: 5,
    paddingHorizontal: 90,
    paddingVertical: 10
  },

  button_content: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Lato-Regular'
  }
});

export const BigButton = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5} style={styles.button}>
      <Text style={styles.button_content}>{props.title}</Text>
    </TouchableOpacity>
  )
}