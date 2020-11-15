import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";

import { GreyBox } from '../components/boxes/grey-box.component';
import { OfferCard } from '../components/boxes/offer-card.component';
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

export const OfferScreen = (props) => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState();
  const isFocused = useIsFocused();

  // getting token
  // https://stackoverflow.com/a/62703838/12422260
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const t = await getToken()
        setToken(t);
      } catch (e) {
        console.log('Bład')
      }
    }
    fetchToken();
  }, [])

  // getting data
  // https://pl.reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
  useEffect(() => {
    const url = `${static_host}/user_mate_list/`;

    const fetchData = async () => {
      if (token) {
        const result = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(result.data);
      }
    }
    fetchData();
  }, [token, isFocused])



  const deleteCard = async (id) => {
    const url = `${static_host}/user_mate_detail/`

    try {
      if (token) {
        const result = await axios.delete(url,
          {
            headers: { Authorization: `Bearer ${token}` },
            data:  { id: id }
          }
          )
        if (result.status === 200) {
          showToast('Offer deleted')
        } else {
          showToast('Error occured while deleting offer')
        }
        setData(result.data)
      }
    } catch (e) {
      console.log('Błąd');
      console.log(e);
    }
  }

  let list = <Text>{''}</Text>
  if (data) {
    list = data.map((element, index) => {
      return <View style={styles.card_wrapper} key={index}>
        <OfferCard {...element} deleteCard={deleteCard} />
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