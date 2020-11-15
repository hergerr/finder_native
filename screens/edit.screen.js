import React, { useState, useEffect } from 'react';
import ImagePicker from 'react-native-image-picker';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { useIsFocused } from "@react-navigation/native";
import * as Yup from 'yup';
import axios from 'axios';


import { GreyBox } from '../components/boxes/grey-box.component';
import { InputAndLabel } from '../components/content/input-and-label.component';
import { InputFeedback } from '../components/content/input-feedback.component';
import { BigButton } from '../components/content/big-button.component';
import { getToken, static_host, isEmpty, showToast } from '../settings';
import { set } from 'react-native-reanimated';

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

export const EditScreen = (props) => {
  let [file, setFile] = useState({})
  const [data, setData] = useState({});
  const [token, setToken] = useState('');
  const isFocused = useIsFocused();

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
  }, []);

  // getting data
  useEffect(() => {

    const fetchData = async () => {
      const result = await axios.get(`${static_host}/mate_offer_detail/${props.route.params.id}`);
      if (result.status === 200) {
        setData(result.data);
      }
    }

    fetchData();
  }, [token, isFocused])


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
        setFile(response) //update state to update Image
      }
    });
  }

  return (
    <GreyBox>
      <View style={styles.container}>
        <Formik
          enableReinitialize

          initialValues={{
            title: data.title,
            age: data.age !== undefined ? data.age.toString() : '',
            field_of_study: data.field_of_study,
            district: data.location,
            keyFeatures: data.features,
            keyCustoms: data.customs,
            phone: data.phone,
          }}

          onSubmit={async (values, actions) => {
            let data = new FormData();
            data.append('image', {
              uri: file.uri,
              name: file.fileName,
              type: file.type
            });
            data.append('title', values.title);
            data.append('field_of_study', values.field_of_study);
            data.append('age', values.age);
            data.append('location', values.district);
            data.append('features', values.keyFeatures);
            data.append('customs', values.keyCustoms);
            data.append('phone', values.phone);

            const headers = {
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
              Authorization: `Bearer ${token}`
            }

            data.append('id', props.route.params.id)
            const response = await axios.put(`${static_host}/user_mate_detail/`, data, { headers });
            if (response.status === 200) {
              showToast('Offer edited');
              setFile({});
              setData({});
              actions.resetForm()
            } else {
              showToast('Pass correct data');
            }
          }}

          validationSchema={Yup.object({
            title: Yup.string()
              .required('cannot be empty'),
            age: Yup.number()
              .min(0, 'must be greater or equal 0')
              .required('cannot be empty'),
            field_of_study: Yup.string()
              .required('cannot be empty'),
            district: Yup.string()
              .required('cannot be empty'),
            keyFeatures: Yup.string()
              .required('cannot be empty'),
            keyCustoms: Yup.string()
              .required('cannot be empty'),
            phone: Yup.string()
              .required('cannot be empty'),
          })}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View style={styles.form_wrapper}>
              <InputAndLabel label="Title"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title} />
              {touched.title && errors.title ? (
                <InputFeedback text={errors.title} />
              ) : <InputFeedback text="" />}
              <InputAndLabel label="Age"
                keyboardType="number-pad"
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age} />
              {touched.age && errors.age ? (
                <InputFeedback text={errors.age} />
              ) : <InputFeedback text="" />}
              <InputAndLabel label="Field of study"
                onChangeText={handleChange('field_of_study')}
                onBlur={handleBlur('field_of_study')}
                value={values.field_of_study} />
              {touched.field_of_study && errors.field_of_study ? (
                <InputFeedback text={errors.field_of_study} />
              ) : <InputFeedback text="" />}
              <Image
                style={styles.profile_photo}
                source={!isEmpty(file) ? { uri: file.uri } : // if clicked a new img
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
              <InputAndLabel label="Key features (sep. with ;)"
                onChangeText={handleChange('keyFeatures')}
                onBlur={handleBlur('keyFeatures')}
                value={values.keyFeatures} />
              {touched.keyFeatures && errors.keyFeatures ? (
                <InputFeedback text={errors.keyFeatures} />
              ) : <InputFeedback text="" />}
              <InputAndLabel label="Key customs (sep. with ;)"
                onChangeText={handleChange('keyCustoms')}
                onBlur={handleBlur('keyCustoms')}
                value={values.keyCustoms} />
              {touched.keyCustoms && errors.keyCustoms ? (
                <InputFeedback text={errors.keyCustoms} />
              ) : <InputFeedback text="" />}
              <InputAndLabel label="Phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone} />
              {touched.phone && errors.phone ? (
                <InputFeedback text={errors.phone} />
              ) : <InputFeedback text="" />}
              <View style={styles.button_wrapper}>
                <BigButton onPress={handleSubmit} title={"Edit"} />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </GreyBox>
  )
}