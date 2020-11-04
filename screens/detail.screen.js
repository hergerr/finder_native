import React from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { GreyBox } from '../components/boxes/grey-box.component';
import { SmallButton } from '../components/content/small-button.component';
import { InputFeedback } from '../components/content/input-feedback.component';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 10
  },

  profile_photo: {
    width: '100%',
    height: 200
  },

  overview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 100
  },

  section: {
    paddingVertical: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 5
  },

  section_title: {
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10
  },

  section_content: {
    textAlign: 'center',
    marginBottom: 7
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
  }
})

export const DetailScreen = () => {
  return (
    <GreyBox>
      <View>
        <Text style={styles.title}>Peaceful Piwniczak</Text>
        <Image
          style={styles.profile_photo}
          source={require('../assets/images/example.jpg')}
        />
        <View style={styles.overview}>
          <Text>32</Text>
          <Text>Computer Science</Text>
          <Text>Krzyki</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.section_title}>Features</Text>
          <View >
            <Text style={styles.section_content}>quiet</Text>
            <Text style={styles.section_content}>gamer</Text>
            <Text style={styles.section_content}>nerd</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.section_title}>Customs</Text>
          <View >
            <Text style={styles.section_content}>always cleaning</Text>
            <Text style={styles.section_content}>up early</Text>
            <Text style={styles.section_content}>no parties</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.section_title}>Contact</Text>
        <View >
          <Text style={styles.section_content}>533 354 345</Text>
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
        </View>
      </View>
    </GreyBox>
  )
}