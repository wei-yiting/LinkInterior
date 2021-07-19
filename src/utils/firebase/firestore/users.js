import { usersCollection, firebaseTimeStamp } from '../index';

export const createNewUserdata = (uid, email, username, profileUrl = '') => {
  return usersCollection.doc(uid).set({
    email,
    username,
    profileUrl,
    createdAt: firebaseTimeStamp(),
  });
};

export const getUserData = (uid) => {
  return usersCollection.doc(uid).get();
};
