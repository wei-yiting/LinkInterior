import { getDoc, setDoc, updateDoc, doc } from 'firebase/firestore';
import { usersCollection, firebaseTimeStamp, usersStatsRef, increment } from '../index';

/** 建立新使用者資料（並自動 +1 userSeqId） */
export const createNewUserdata = async (uid, email, username, profileUrl = '') => {
  const currentUserStatsSnap = await getDoc(usersStatsRef);
  const { totalUser = 0 } = currentUserStatsSnap.data() || {};

  await updateDoc(usersStatsRef, { totalUser: increment });

  return setDoc(doc(usersCollection, uid), {
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
  return getDoc(doc(usersCollection, uid));
};
