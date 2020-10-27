import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import { COLORS } from '../colors';
import { Burger } from '../components/burger.component';

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
  }
});

const image = "../assets/images/background.jpg";

export const HomeScreen = (props) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={require(image)} style={styles.image}>
        <View style={styles.header}>
          <Burger />
          <Text style={styles.title}>finder</Text>
        </View>
      </ImageBackground>
    </View>
  )
}