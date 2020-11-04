import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.head}>from</Text>
        <Text>john.magorty@onet.pl</Text>
      </View>

      <View>
        <Text style={styles.head}>from</Text>
        <Text style={styles.subject}>Peaceful Piwniczak</Text>
        <Text style={styles.content}>Hello, I am interesested in that offer, could
              you send me more photos of living room and ...</Text>
      </View>
    </View>
  )
}