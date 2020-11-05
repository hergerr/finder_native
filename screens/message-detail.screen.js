import React from 'react';
import { View, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { GreyBox } from '../components/boxes/grey-box.component';
import { SmallButton } from '../components/content/small-button.component';
import { InputFeedback } from '../components/content/input-feedback.component';
import { CloudBox } from '../components/boxes/cloud-box.component';

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
    marginTop: 10
  }

})

export const MessageDetail = (props) => {

  return (
    <GreyBox>
      <ScrollView style={styles.message_container}>
        <View style={styles.cloud_wrapper}>
          <CloudBox type="send" />
        </View>
        <View style={styles.cloud_wrapper}>
          <CloudBox type="received" />
          <CloudBox type="send" />
        </View>
        <View style={styles.cloud_wrapper}>
          <CloudBox type="send" />
        </View>
      </ScrollView>
      <Formik
        initialValues={{
          message: ''
        }}

        validationSchema={Yup.object({
          message: Yup.string().required('Required')
        })}

        onSubmit={(values, actions) => {
          console.log(values)
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