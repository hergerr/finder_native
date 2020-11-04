import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MessageCard } from '../components/boxes/message-card.component';

import { GreyBox } from '../components/boxes/grey-box.component';

const styles = StyleSheet.create({
  wrapper: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  message_wrapper: {
    marginBottom: 10
  }
})

export const MessageListScreen = (props) => {

  return (
    <GreyBox>
      <View style={styles.wrapper}>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
      </View>

    </GreyBox>
  )
}