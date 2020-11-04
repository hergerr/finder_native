import React from 'react';
import { View, StyleSheet } from 'react-native';

import { GreyBox } from '../components/boxes/grey-box.component';
import { ListCard } from '../components/boxes/list-card.component';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  card_wrapper: {
    marginBottom: 10
  }
})

export const ListScreen = (props) => {

  return (
    <GreyBox>
      <View style={styles.container}>

        <View style={styles.card_wrapper}>
          <ListCard />
        </View>
        <View style={styles.card_wrapper}>
          <ListCard />
        </View>
        <View style={styles.card_wrapper}>
          <ListCard />
        </View>

        <View style={styles.card_wrapper}>
          <ListCard />
        </View>
        <View style={styles.card_wrapper}>
          <ListCard />
        </View>
        <View style={styles.card_wrapper}>
          <ListCard />
        </View>
      </View>
    </GreyBox>
  )
}