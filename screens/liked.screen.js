import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';

import { GreyBox } from '../components/boxes/grey-box.component';
import { LikedCard } from '../components/boxes/liked-card.component';
import { static_host, getToken, showToast } from '../settings';

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

export const LikedScreen = (props) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const url = `${static_host}/get_liked_mate_offers/`

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

  // getting data
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const result = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
          })
          setData(result.data)
        }
      } catch (e) {
        console.log('Błąd');
      }
    }
    fetchData();
  }, [token]);

  const deleteCard = async (id) => {
    const url = `${static_host}/delete_liked_mate_offer/`
    try {
      if (token) {
        const result = await axios.delete(url,
          {
            headers: { Authorization: `Bearer ${token}` },
            data:  { id: id }
          }
          )
        if (result.status === 200) {
          showToast('Offer deleted from liked')
        } else {
          showToast('Error occured while deleting from liked')
        }
        setData(result.data)
      }
    } catch (e) {
      console.log('Błąd');
    }
  }

  let list = <Text>{''}</Text>
  if (data) {
    list = data.map((element, index) => {
      return <View style={styles.card_wrapper} key={index}>
        <LikedCard {...element} deleteCard={deleteCard}/>
      </View>
    })
  }

  return (
    <GreyBox>
      <View style={styles.container}>
        {list}
      </View>
    </GreyBox>
  )
}