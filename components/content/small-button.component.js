import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.custom_orange,
    borderRadius: 5,
    paddingHorizontal: 45,
    height: 50,
    justifyContent: "center"
  },

  button_content: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Lato-Regular'
  }
});

export const SmallButton = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5} style={styles.button}>
      <Text style={styles.button_content}>{props.title}</Text>
    </TouchableOpacity>
  )
}