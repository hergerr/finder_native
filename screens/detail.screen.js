import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

import { GreyBox } from '../components/boxes/grey-box.component';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 10
  },

  profile_photo: {
    width: '100%',
    height: 200
  },

  overview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 100
  },

  section: {
    paddingVertical: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 5
  },

  section_title: {
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10
  },

  section_content: {
    textAlign: 'center',
    marginBottom: 7
  },

  white_line: {
    width: '100%',
    height: 3
  }
})

export const DetailScreen = () => {
  return (
    <GreyBox>
      <View>
        <Text style={styles.title}>Peaceful Piwniczak</Text>
        <Image
          style={styles.profile_photo}
          source={require('../assets/images/example.jpg')}
        />
        <View style={styles.overview}>
          <Text>32</Text>
          <Text>Computer Science</Text>
          <Text>Krzyki</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.section_title}>Features</Text>
          <View >
            <Text style={styles.section_content}>quiet</Text>
            <Text style={styles.section_content}>gamer</Text>
            <Text style={styles.section_content}>nerd</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.section_title}>Customs</Text>
          <View >
            <Text style={styles.section_content}>always cleaning</Text>
            <Text style={styles.section_content}>up early</Text>
            <Text style={styles.section_content}>no parties</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.section_title}>Contact</Text>
        <View >
          <Text style={styles.section_content}>533 354 345</Text>

        </View>
      </View>
    </GreyBox>
  )
}