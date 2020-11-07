import { ToastAndroid } from 'react-native';

let static_host = 'http://51.83.130.30:8000'
const showToast = (text) => {
  ToastAndroid.show(text, ToastAndroid.SHORT);
};

export { static_host, showToast } 