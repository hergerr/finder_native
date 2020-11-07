import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { StartBox } from '../components/boxes/start-box.component';
import { BigButton } from '../components/content/big-button.component';
import { BigInput } from '../components/content/big-input.component'
import { InputFeedback } from '../components/content/input-feedback.component';
import { showToast, static_host } from '../settings';

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 10
  },
});

export const RegisterScreen = (props) => {

  return (
    <StartBox>
      <View style={styles.container}>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            repeatedPassword: ''
          }}

          validationSchema={Yup.object({
            username: Yup.string()
              .required('required'),
            email: Yup.string()
              .email('invalid email address')
              .required('required'),
            password: Yup.string()
              .required('password is required'),
            repeatedPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'passwords must match')
          })}

          onSubmit={(values, actions) => {
            axios.post(`${static_host}/accounts/register/`,
              { username: values.username, email: values.email, password: values.password, password_confirm: values.password })
              .then(res => {
                if (res.status === 201) {
                  showToast("Registration was succesful. Now confirm your account by clicking URL sent to your email.")
                }
              }).catch(error => {
                const errors = error.response.data;
                let message = '';
                for (const type in errors) {
                  message = message.concat(`${errors[type]}`)
                }
                message = message.replace(/,/g, '\n');
                showToast('Registration errors occured')
                showToast(message);
                console.log(message);
              });
            actions.resetForm()
          }
          }>

          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.inputs_wrapper}>

              <BigInput
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                placeholder="username"
              />
              {touched.username && errors.username ? (
                <InputFeedback text={errors.username} />
              ) : <InputFeedback text="" />}

              <BigInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="email"
              />
              {touched.email && errors.email ? (
                <InputFeedback text={errors.email}></InputFeedback>
              ) : <InputFeedback text="" />}

              <BigInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="password"
                secureTextEntry={true}
              />
              {touched.password && errors.password ? (
                <InputFeedback text={errors.password}></InputFeedback>
              ) : <InputFeedback text="" />}

              <BigInput
                onChangeText={handleChange('repeatedPassword')}
                onBlur={handleBlur('repeatedPassword')}
                value={values.repeatedPassword}
                placeholder="repeat password"
                secureTextEntry={true}
              />
              {touched.repeatedPassword && errors.repeatedPassword ? (
                <InputFeedback text={errors.repeatedPassword}></InputFeedback>
              ) : <InputFeedback text="" />}



              <BigButton onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </StartBox>
  )
}