import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
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
    marginVertical: 15
  }, 

  profile_photo: {
    width: 100,
    height: 100,
    marginVertical: 10
  },

  photo_button: {
    backgroundColor: 'lightgray',
    alignItems: "center",
    justifyContent: 'center',
    width: 100,
    height: 40,
    marginVertical: 10,
    borderRadius: 5
  },

  button_text: {
    color: 'black'
  }
})

export const AddScreen = (props) => {
  var [fileUri, SetFileuri] = useState()

  // https://swairaq.medium.com/image-picker-in-react-native-74ab25da57b3
  const chooseImage = () => {
    let options = {
      title: 'Select Avatar',
      cameraType: 'front',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        SetFileuri(response.uri) //update state to update Image
      }
    });
  }

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
              <Image
                style={styles.profile_photo}
                source={fileUri ? { uri: fileUri } : // if clicked a new img
                  require('../assets/images/default.jpg')} //else show random
              />
              <TouchableOpacity onPress={chooseImage} style={styles.photo_button}>
                <Text style={styles.button_text}>Add Photo</Text>
              </TouchableOpacity>
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