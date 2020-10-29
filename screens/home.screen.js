import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import { COLORS } from '../colors';
import { Burger } from '../components/content/burger.component';
import { BigButton } from '../components/content/big-button.component';
import { NavBox } from '../components/boxes/nav-box.component';
import Icon from 'react-native-vector-icons/AntDesign';

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

  description: {
    fontSize: 30,
    marginTop: 200,
    marginBottom: 50,
    fontFamily: "NovaSlim-Regular",
    color: 'white'
  },

  box_container: {
    marginTop: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  box_desc: {
    marginTop: 10,
    color: 'white',
    fontSize: 20
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
        <Text style={styles.description}>Find flatmates in Wrocław</Text>
        <BigButton title="Search" />
        <View style={styles.box_container}>
          <NavBox>
              <Icon name='unlock' size={50} color="white"></Icon>
              <Text style={styles.box_desc}>Log in</Text>
          </NavBox>
          <NavBox>
            <Icon name='book' size={50} color="white"></Icon>
            <Text style={styles.box_desc}>Register</Text>
          </NavBox>
        </View>
      </ImageBackground>
    </View>
  )
}