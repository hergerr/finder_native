import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { GreyBox } from '../components/boxes/grey-box.component';
import { SmallButton } from '../components/content/small-button.component';
import { InputFeedback } from '../components/content/input-feedback.component';
import { CloudBox } from '../components/boxes/cloud-box.component';
import { static_host, getToken, isEmpty } from '../settings';

const styles = StyleSheet.create({
  message_container: {
    backgroundColor: 'white',
    width: '100%',
    height: 400
  },

  form_wrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  input: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    marginRight: 20
  },

  cloud_wrapper: {
    marginTop: 10,
    marginBottom: 10
  }

})

export const MessageDetail = (props) => {
  const scrollViewRef = useRef();
  const [data, setData] = useState({});
  const [userId, setUserId] = useState();
  const [token, setToken] = useState('');

  const convId = props.route.params.id;

  const userUrl = `${static_host}/get_user_id/`
  const dataUrl = `${static_host}/get_conversation/${convId}`


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

  // getting current user id
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const result = await axios.get(userUrl, {
            headers: { Authorization: `Bearer ${token}` }
          })
          setUserId(result.data)
        }
      } catch (e) {
        console.log('Błąd');
      }
    }
    fetchData();
  }, []);

  // getting messages
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const result = await axios.get(dataUrl, {
            headers: { Authorization: `Bearer ${token}` }
          })
          setData(result.data);
        }
      } catch (e) {
        console.log('Błąd');
      }
    }
    fetchData();
  }, [convId]);

  let messages = <Text>{''}</Text>

  if (!isEmpty(data)) {
    messages = data.message.map(element => {
      if (element.owner === userId)
        return <View style={styles.cloud_wrapper} key={element.datetime}>
          <CloudBox type="send" content={element.content} />
        </View>
      else {
        return <View style={styles.cloud_wrapper} key={element.datetime}>
          <CloudBox type="receive" content={element.content} />
        </View>
      }
    })
  } 

  return (
    <GreyBox>
      <ScrollView
        style={styles.message_container}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
      {messages}
      </ScrollView>
      <Formik
        initialValues={{
          message: ''
        }}

        validationSchema={Yup.object({
          message: Yup.string().required('Required')
        })}

        onSubmit={(values, actions) => {
          actions.resetForm()
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form_wrapper}>
            <View>
              <TextInput
                multiline={true}
                scrollEnabled={true}
                style={styles.input}
                onChangeText={handleChange('message')}
                onBlur={handleBlur('message')}
                value={values.message}
              />
              {touched.message && errors.message ? (
                <InputFeedback text={errors.message} />
              ) : <InputFeedback text="" />}
            </View>
            <SmallButton title="send" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </GreyBox>
  )
}