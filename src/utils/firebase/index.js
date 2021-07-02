import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAlHD8N6ru23sdoj80lAJ6iZ2G09oPVknA',
  authDomain: 'linkinterior-450c8.firebaseapp.com',
  projectId: 'linkinterior-450c8',
  storageBucket: 'linkinterior-450c8.appspot.com',
  messagingSenderId: '134359721744',
  appId: '1:134359721744:web:24ff89fac01ea3e3e26795',
  measurementId: 'G-DCDN8VC2FJ',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase };
