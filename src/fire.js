import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDNHJdg739CSEDEK6DbVVoUYRon8vvXMOk',
  authDomain: 'jsev14project.firebaseapp.com',
  projectId: 'jsev14project',
  storageBucket: 'jsev14project.appspot.com',
  messagingSenderId: '1082033730668',
  appId: '1:1082033730668:web:879be0123021e248c61449',
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
