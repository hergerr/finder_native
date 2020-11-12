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

  let cards = data.map((element, index) => (
    <View style={styles.message_wrapper} key={index}>
      <MessageCard
        id={element.id}
        key={element.id}
        subject={element.subject}
        last_message={element.message.slice(-1)[0].content}
        email={element.members[1].email}
      />
    </View>

  ));

  return (
    <GreyBox>
      <View style={styles.wrapper}>
        {cards}
      </View>

    </GreyBox>
  )
}