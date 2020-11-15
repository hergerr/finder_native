import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CardContent } from '../content/card-content.component';
import { static_host, getToken } from '../../settings';

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


export const OfferCard = (props) => {
  const url = `${static_host}${props.image}`;
  const navigation = useNavigation();
  const [token, setToken] = useState();

  // getting token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const t = await getToken()
        setToken(t);
      } catch (e) {
        console.log('Błąd')
        console.log(e);
      }
    }
    fetchToken();
  }, []);


  const BinButton = (props) => (
    <Icon.Button name="trash-o" backgroundColor="white" color="black" onPress={() => props.deleteCard(props.id)}/>
  );

  const EditButton = (props) => (
    <Icon.Button name="edit" backgroundColor="white" color="black" onPress={() => {
      navigation.navigate('EditScreen', {id: props.id})
    }}/>
  )

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
        <BinButton id={props.id} deleteCard={props.deleteCard}/>
        <EditButton id={props.id}/>
      </View>

    </TouchableOpacity>
  )
}