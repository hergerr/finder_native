import { createContext } from 'react';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let static_host = 'http://51.83.130.30:8000'

const showToast = (text) => {
  ToastAndroid.show(text, ToastAndroid.SHORT);
};

const isSignedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('access');
    if(value !== null) {
      return true;
    } else {
      return false
    }
  } catch(e) {
    console.log(e)
  }
}

const AuthContext = createContext();

const isEmpty = (obj) => (Object.keys(obj).length === 0);

const getToken = async () => {
  try {
    const data = await AsyncStorage.getItem('access');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { static_host, showToast, isSignedIn, AuthContext, isEmpty, getToken } 