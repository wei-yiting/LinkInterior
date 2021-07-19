import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../utils/firebase';
import { createNewUserdata, getUserData } from '../utils/firebase/firestore/users';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password, username, profileUrl) => {
    const userInfo = await auth.createUserWithEmailAndPassword(email, password);
    return createNewUserdata(userInfo.user.uid, email, username, profileUrl);
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        (async () => {
          const userData = await getUserData(user.uid);
          setCurrentUser(userData.data());
          setLoading(false);
        })();
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const valueProvided = {
    currentUser,
    signUp,
    logIn,
    logOut,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={valueProvided}>{!loading && children}</AuthContext.Provider>;
};

export default AuthContextProvider;
