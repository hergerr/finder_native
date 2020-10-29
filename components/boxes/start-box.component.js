import React from 'react';
import { StyleSheet, ImageBackground, View, Text } from 'react-native';

import { Burger } from '../content/burger.component'
import { COLORS } from '../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  title: {
    marginTop: 5,
    marginLeft: 100,
    fontSize: 40,
    color: COLORS.custom_orange,
    textAlign: 'center',
    fontFamily: "NovaSlim-Regular",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  header: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})

const image = "../../assets/images/background.jpg";

export const StartBox = (props) => {
  return (
    <View style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "position"}>
      <ImageBackground source={require(image)} style={styles.image}>
        <View style={styles.header}>
          <Burger />
          <Text style={styles.title}>finder</Text>
        </View>
        {props.children}
      </ImageBackground>
    </View>
  )
}