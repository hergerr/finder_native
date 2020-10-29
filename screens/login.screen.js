import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import { StartBox } from '../components/boxes/start-box.component';
import { BigButton } from '../components/content/big-button.component';
import { BigInput } from '../components/content/big-input.component'

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
          onSubmit={(values, actions) => {
            console.log(values)
            actions.resetForm()
          }
          }>

          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.inputs_wrapper}>
              <BigInput
                onChangeText={handleChange('login')}
                onBlur={handleBlur('login')}
                value={values.login}
                placeholder="Login"
              />
              <BigInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              <BigButton onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </StartBox>
  )
}