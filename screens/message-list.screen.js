import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { MessageCard } from '../components/boxes/message-card.component';
import axios from 'axios';

import { GreyBox } from '../components/boxes/grey-box.component';
import { static_host, getToken } from '../settings';

const styles = StyleSheet.create({
  wrapper: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  message_wrapper: {
    marginBottom: 10
  }
})

export const MessageListScreen = (props) => {
  const url = `${static_host}/get_user_conversations/`
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');

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

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const result = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setData(result.data);
        } catch (e) {
          console.log('Błąd')
        }
      }
    }
    fetchData();
  }, [token])

  console.log(data);

  return (
    <GreyBox>
      <View style={styles.wrapper}>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
        <View style={styles.message_wrapper}>
          <MessageCard />
        </View>
      </View>

    </GreyBox>
  )
}