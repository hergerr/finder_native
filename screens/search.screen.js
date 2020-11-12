import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Formik } from 'formik';

import { GreyBox } from '../components/boxes/grey-box.component';
import { InputAndLabel } from '../components/content/input-and-label.component';
import { DoubleInputAndLabel } from '../components/content/double-input-and-label.component'
import { BigButton } from '../components/content/big-button.component';
import { InputFeedback } from '../components/content/input-feedback.component';
import { ListScreen } from './list.screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  title: {
    color: 'black',
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    textAlign: "center"
  },

  form_wrapper: {
    width: '80%'
  },

  button_wrapper: {
    marginTop: 15
  }
})

export const SearchScreen = (props) => {

  return (
    <GreyBox>
      <View style={styles.container}>
        <Text style={styles.title}>Search flatmates</Text>
        <Formik
          initialValues={{
            ageFrom: '1',
            ageTo: '100',
            district: '',
            keyFeatures: '',
            keyCustoms: ''
          }}

          onSubmit={(values, actions) => {
            props.navigation.navigate('ListScreen', {
              searchParams: values
            })
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View style={styles.form_wrapper}>
              <DoubleInputAndLabel title="Age"
                fromOnChangeText={handleChange('ageFrom')}
                fromOnBlur={handleBlur('ageFrom')}
                fromValue={values.ageFrom}
                toOnChangeText={handleChange('ageTo')}
                toOnBlur={handleBlur('ageTo')}
                toValue={values.ageTo}
              />
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