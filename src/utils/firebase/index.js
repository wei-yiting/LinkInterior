import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  serverTimestamp as _serverTimestamp,
  increment as _increment,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// firestore
export const firebaseTimeStamp = _serverTimestamp;
export const increment = _increment(1);

export const usersCollection = collection(db, 'users');
export const usersStatsRef = doc(db, 'users', '--stats--');
export const serviceIntroCollection = collection(db, 'serviceIntroPages');
export const servicesOverviewCollection = collection(db, 'servicesOverview');

export default app;
