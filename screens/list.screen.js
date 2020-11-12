import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';

import { GreyBox } from '../components/boxes/grey-box.component';
import { ListCard } from '../components/boxes/list-card.component';
import { static_host } from '../settings';
import { TextInput } from 'react-native-gesture-handler';

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
  const url = `${static_host}/search_mates/?ageFrom=${params.ageFrom}&ageTo=${params.ageTo}&district=${params.district}&features=${params.keyCustoms}&customs=${params.keyCustoms}`

  // https://pl.reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setData(result.data);
    }
    fetchData();
  }, [url])

  let list = <Text>{''}</Text>
  if (data) {
    list = data.map((element, index) => {
      return <View style={styles.card_wrapper} key={index}>
        <ListCard />
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