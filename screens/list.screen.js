import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';

import { GreyBox } from '../components/boxes/grey-box.component';
import { ListCard } from '../components/boxes/list-card.component';
import { static_host, getToken } from '../settings';

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
  const params = props.route.params.searchParams;
  const [data, setData] = useState([]);
  const [favIds, setFavIds] = useState([]);
  const [token, setToken] = useState();
  const url = `${static_host}/search_mates/?ageFrom=${params.ageFrom}&ageTo=${params.ageTo}&district=${params.district}&features=${params.keyCustoms}&customs=${params.keyCustoms}`

  // getting token
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
    const fetchData = async () => {
      const result = await axios.get(url);
      setData(result.data);
    }
    fetchData();
  }, [url])


  useEffect(() => {
    const url = `${static_host}/get_liked_mate_offers/`

    const fetchData = async () => {
      if (token) {
        const result = await axios.get(`${static_host}/get_liked_mate_offers/`, {
          headers: { Authorization: `Bearer ${token}` }
        })

        if (result.status === 200) {
          const favs = result.data.map((element) => (element.id))
          setFavIds(favs);
        }

      } else {
        console.log('Ni mo tokena');
      }
    }

    fetchData();

  }, [data])


  let list = <Text>{''}</Text>
  if (data) {
    list = data.map((element, index) => {
      let liked = false;
      if (favIds.includes(element.id)) {
        liked = true;
      }
      return <View style={styles.card_wrapper} key={index}>
        <ListCard {...element} liked={liked} />
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