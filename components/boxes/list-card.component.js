import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

import { CardContent } from '../content/card-content.component';
import { static_host, getToken, showToast } from '../../settings';

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



export const ListCard = (props) => {
  const url = `${static_host}${props.image}`;
  const navigation = useNavigation();
  const [liked, setLiked] = useState(props.liked);
  const [token, setToken] = useState();

  // getting token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const t = await getToken()
        setToken(t);
      } catch (e) {
        console.log('Błąd')
      }
    }
    fetchToken();
  }, [])


  // https://stackoverflow.com/a/54866051/12422260
  useEffect(() => {
    setLiked(props.liked);
  }, [props.liked])

  const HeartButtom = () => {
    if (liked)
      return <Icon.Button name="heart" backgroundColor="white" color="black" onPress={async (e) => {
        if (token) {
          const result = await axios.delete(`${static_host}/delete_liked_mate_offer/`, {
            headers: {
              Authorization: `Bearer ${token}`
            },
            data: {
              id: props.id
            }
          }
          );
          if (result.status === 200) {
            setLiked(!liked);
          } else {
            console.log(result.status);
          }
        }
      }}
      />
    else
      return <Icon.Button name="hearto" backgroundColor="white" color="black" onPress={async (e) => {
        if (token) {
          const result = await axios.post(`${static_host}/add_mate_offer_to_liked/`, { id: props.id }, {
            headers: { Authorization: `Bearer ${token}` },
          }
          )
          if (result.status === 200) {
            setLiked(!liked);
          }
        }
      }} />
  };


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
        <HeartButtom liked={props.liked} id={props.id} />
      </View>

    </TouchableOpacity>
  )
}