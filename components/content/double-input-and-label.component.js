import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },

  column: {
    flexDirection: 'column'
  },

  input: {
    backgroundColor: 'white',
    width: 150
  },

  label: {
    fontSize: 10
  },
  
  title: {
    marginBottom: 10
  }

})

export const DoubleInputAndLabel = (props) => {
  return (
    <View>
      <Text style={styles.title}>Age</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>from</Text>
          <TextInput style={styles.input} />
        </View>

        <View>
          <Text style={styles.label}>to</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  )
}