import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import { GreyBox } from '../components/boxes/grey-box.component';
import { InputAndLabel } from '../components/content/input-and-label.component';
import { InputFeedback } from '../components/content/input-feedback.component';
import { BigButton } from '../components/content/big-button.component';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  form_wrapper: {
    width: '80%'
  },

  button_wrapper: {
    marginTop: 15
  }
})

export const AddScreen = (props) => {

  return (
    <GreyBox>
      <View style={styles.container}>
        <Formik
          initialValues={{
            age: '',
            district: '',
            keyFeatures: '',
            keyCustoms: ''
          }}

          onSubmit={(values, actions) => {
            console.log(values)
            actions.resetForm()
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View style={styles.form_wrapper}>
              <InputAndLabel label="Age"
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age} />
              {touched.age && errors.age ? (
                <InputFeedback text={errors.age} />
              ) : <InputFeedback text="" />}
              <InputAndLabel label="District"
                onChangeText={handleChange('district')}
                onBlur={handleBlur('district')}
                value={values.district} />
              {touched.district && errors.district ? (
                <InputFeedback text={errors.district} />
              ) : <InputFeedback text="" />}
              <InputAndLabel label="Key features"
                onChangeText={handleChange('keyFeatures')}
                onBlur={handleBlur('keyFeatures')}
                value={values.keyFeatures} />
              {touched.keyFeatures && errors.keyFeatures ? (
                <InputFeedback text={errors.keyFeatures} />
              ) : <InputFeedback text="" />}
              <InputAndLabel label="Key customs"
                onChangeText={handleChange('keyCustoms')}
                onBlur={handleBlur('keyCustoms')}
                value={values.keyCustoms} />
              {touched.keyCustoms && errors.keyCustoms ? (
                <InputFeedback text={errors.keyCustoms} />
              ) : <InputFeedback text="" />}
              <View style={styles.button_wrapper}>
                <BigButton onPress={handleSubmit} title={"Search"} />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </GreyBox>
  )
}