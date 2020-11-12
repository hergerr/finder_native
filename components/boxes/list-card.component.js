import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { static_host } from '../../settings';

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
  const url = `${static_host}${props.image}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate('DetailScreen', {
          id: props.id
        })
      }}>
      <Image
        style={styles.profile_photo}
        source={{ uri: url }}
      />
      <View style={styles.desc}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.age}</Text>
        <Text>{props.location}</Text>
        <Text>#{props.features.replace(/;/g, ' #')}</Text>
        <Text>#{props.customs.replace(/;/g, ' #')}</Text>
      </View>
      <View style={styles.heart_wrapper}>
        <HeartButtom />
      </View>

    </TouchableOpacity>
  )
}