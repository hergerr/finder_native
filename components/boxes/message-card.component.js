import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },

  head: {
    color: COLORS.custom_orange,
    fontSize: 20,
    marginBottom: 5
  },

  subject: {
    fontFamily: 'Lato-Bold',
    marginBottom: 5
  },

  content: {
    width: 200,
    fontSize: 10
  }

})

export const MessageCard = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => {
        navigation.navigate('MessageDetail', {id: props.id});
      }}>
      <View>
        <Text style={styles.head}>from</Text>
        <Text>{props.email}</Text>
      </View>

      <View>
        <Text style={styles.head}>message</Text>
        <Text style={styles.subject}>{props.subject}</Text>
        <Text style={styles.content}>{props.last_message}</Text>
      </View>
    </TouchableOpacity>
  )
}