import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { GreyBox } from '../components/boxes/grey-box.component';
import { SmallButton } from '../components/content/small-button.component';
import { InputFeedback } from '../components/content/input-feedback.component';
import { static_host } from '../settings';

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

export const DetailScreen = (props) => {
  const id = props.route.params.id;
  const [data, setData] = useState({});
  const url = `${static_host}/mate_offer_detail/${id}`

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setData(result.data);
    }
    fetchData();
  }, [url])

  console.log(data);

  let features = null, customs = null;
  if (data !== {}) {
    features = data.features.split(';').map((element, index) => (
      <Text style={styles.section_content} key={index}>{element}</Text>
    ))
    customs = data.customs.split(';').map((element, index) => (
      <Text style={styles.section_content} key={index}>{element}</Text>
    ))
  }

  return (
    <GreyBox>
      <View>
        <Text style={styles.title}>{data.title}</Text>
        <Image
          style={styles.profile_photo}
          source={{ uri: `${static_host}${data.image}` }}
        />
        <View style={styles.overview}>
          <Text>{data.age}</Text>
          <Text>{data.field_of_study}</Text>
          <Text>{data.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.section_title}>Features</Text>
          <View >
            {features}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.section_title}>Customs</Text>
          <View >
            {customs}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.section_title}>Contact</Text>
        <View >
          <Text style={styles.section_content}>{data.phone}</Text>
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