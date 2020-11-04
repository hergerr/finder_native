import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },

  profile_photo: {
    width: 100,
    height: 100,
    margin: 10
  },

  title: {
    fontFamily: 'Lato-Bold',
  },

  desc: {
    padding: 10,
    justifyContent: 'space-around'
  },

  heart_wrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto'
  }
})

const HeartButtom = (props) => (
  <Icon.Button name="hearto" backgroundColor="white" color="black" />
);


export const ListCard = (props) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.profile_photo}
        source={require('../../assets/images/example.jpg')}
      />
      <View style={styles.desc}>
        <Text style={styles.title}>Peaceful piwniczak</Text>
        <Text>32</Text>
        <Text>Krzyki</Text>
        <Text>#quiet #gamer #nerd</Text>
        <Text>#always cleaning #up early</Text>
      </View>
      <View style={styles.heart_wrapper}>
        <HeartButtom />
      </View>

    </View>
  )
}