import { usersCollection, firebaseTimeStamp, usersStatsRef, increment } from '../index';

export const createNewUserdata = async (uid, email, username, profileUrl = '') => {
  const currentUserStats = await usersStatsRef.get();
  const { totalUser } = currentUserStats.data();
  usersStatsRef.update({ totalUser: increment });
  return usersCollection.doc(uid).set({
    email,
    username,
    profileUrl,
    createdAt: firebaseTimeStamp(),
    publishStatus: 0,
    userSeqId: totalUser + 1,
    userUid: uid,
  });
};

export const getUserData = (uid) => {
  return usersCollection.doc(uid).get();
};
