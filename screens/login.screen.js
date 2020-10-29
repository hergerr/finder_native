import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import { StartBox } from '../components/boxes/start-box.component';
import { BigButton } from '../components/content/big-button.component';

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 70
  },

  input: {
    alignSelf: "stretch",
    backgroundColor: 'rgba(0,0,0,0.4)', // 40% opaque
    borderColor: 'black',
    borderWidth: 2,
    color: 'white',
    borderRadius: 5,
    opacity: 30,
    marginBottom: 30,
  }
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
          onSubmit={values => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.inputs_wrapper}>
              <TextInput
                onChangeText={handleChange('login')}
                onBlur={handleBlur('login')}
                value={values.login}
                style={styles.input}
                placeholder="Login"
                placeholderTextColor="#fff"
              />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#fff"
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