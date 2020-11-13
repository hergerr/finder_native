import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

const styles = StyleSheet.create({
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
})


export const CardContent = (props) => {

  return (
    <>
      <Image
        style={styles.profile_photo}
        source={{ uri: props.url }}
      />
      <View style={styles.desc}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.age}</Text>
        <Text>{props.location}</Text>
        <Text>#{props.features.replace(/;/g, ' #')}</Text>
        <Text>#{props.customs.replace(/;/g, ' #')}</Text>
      </View>
    </>
  )
}