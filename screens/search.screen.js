import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { GreyBox } from '../components/boxes/grey-box.component';
import { InputAndLabel } from '../components/content/input-and-label.component';
import { DoubleInputAndLabel } from '../components/content/double-input-and-label.component'
import { BigButton } from '../components/content/big-button.component';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  title: {
    color: 'black',
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    textAlign: "center"
  },

  form_wrapper: {
    width: '80%'
  },

  button_wrapper: {
    marginTop: 15
  }
})

export const SearchScreen = (props) => {

  return (
    <GreyBox>
      <View style={styles.container}>
        <Text style={styles.title}>Search flatmates</Text>
        <View style={styles.form_wrapper}>

          <DoubleInputAndLabel title="Age" />
          <InputAndLabel label="District" />
          <InputAndLabel label="Key features" />
          <InputAndLabel label="Key customs" />
          <View style={styles.button_wrapper}>
            <BigButton title={"Search"} />
          </View>

        </View>

      </View>
    </GreyBox>
  )
}