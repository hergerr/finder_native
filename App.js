import 'react-native-gesture-handler';
import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { COLORS } from './colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  title: {
    marginTop: 20,
    fontSize: 40,
    color: COLORS.custom_orange,
    textAlign: 'center',
    fontFamily: "NovaSlim-Regular",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
});


const image = "./assets/images/background.jpg"


const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ImageBackground source={require(image)} style={styles.image}>
          <Text style={styles.title}>finder</Text>
          <Button onPress={(e) => {
          }} title="Klik"></Button>
        </ImageBackground>
      </View>
    </NavigationContainer>
  );
};


export default App;
