import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showToast } from '../settings';

import { StartBox } from '../components/boxes/start-box.component';
import { BigButton } from '../components/content/big-button.component';
import { BigInput } from '../components/content/big-input.component'
import { InputFeedback } from '../components/content/input-feedback.component';
import { static_host } from '../settings';

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 70
  },
})


export const LoginScreen = (props) => {

  return (
    <StartBox>
      <View style={styles.container}>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}

          validationSchema={Yup.object({
            login: Yup.string()
              .required('Required'),
            password: Yup.string()
              .required('Required'),
          })}

          onSubmit={(values, actions) => {
            axios.post(`${static_host}/token/`, { username: values.login, password: values.password })
              .then(async res => {
                if (res.status === 200) {
                  await AsyncStorage.setItem('access', res.data.access);
                  console.log('sukces');
                }
              }).catch(error => {
                showToast('Error occured in login');
              });
            actions.resetForm()
          }
          }>

          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.inputs_wrapper}>
              <BigInput
                onChangeText={handleChange('login')}
                onBlur={handleBlur('login')}
                value={values.login}
                placeholder="Login"
              />
              {touched.login && errors.login ? (
                <InputFeedback text={errors.login} />
              ) : <InputFeedback text="" />}
              <BigInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              {touched.password && errors.password ? (
                <InputFeedback text={errors.password}></InputFeedback>
              ) : <InputFeedback text="" />}
              <BigButton onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </StartBox>
  )
}