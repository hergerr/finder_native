import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { CardContent } from '../content/card-content.component';
import { static_host } from '../../settings';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },

  heart_wrapper: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto'
  }
})

const HeartButtom = (props) => {
  if (props.liked)
    return <Icon.Button name="heart" backgroundColor="white" color="black" />
  else
    return <Icon.Button name="hearto" backgroundColor="white" color="black" />
};


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
      <CardContent {...props} url={url} />
      <View style={styles.heart_wrapper}>
        <HeartButtom liked={props.liked}/>
      </View>

    </TouchableOpacity>
  )
}