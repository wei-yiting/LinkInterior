/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';
import { MainWrapper } from '../styles/layoutStyledComponents/GeneralLayout';
import Logo from '../utils/logo/Logo';

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleFormSumbit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      const logInInfo = await logIn(emailRef.current.value, passwordRef.current.value);
      console.log(logInInfo.uid);
      history.push('/services');
    } catch {
      setError('Failed to log in');
    }
  };

  return (
    <MainWrapper className="flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 flex flex-col justify-center items-center">
        <div className="h-20 w-20 text-center">
          <Logo className="text-center" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-700 tracking-widest">
          登入會員系統
        </h2>
      </div>
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleFormSumbit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="email-address">
                電子信箱
              </label>
              <input
                ref={emailRef}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-main-500 focus:border-main-500 focus:z-10 sm:text-base tracking-wide"
                placeholder="電子信箱"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                密碼
              </label>
              <input
                ref={passwordRef}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-main-500 focus:border-main-500 focus:z-10 sm:text-base tracking-wide"
                placeholder="密碼"
              />
            </div>
          </div>
          {error && <div>{error}</div>}

          <div>
            <button
              disabled={loading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 tracking-widest font-semi-bold duration-150"
            >
              登入
            </button>
          </div>
        </form>
        <div className="text-base flex justify-center">
          <Link to="/sign-up">
            <span className="font-medium text-main-600 hover:text-main-500 hover:border-main-500 border-b-4 border-white duration-150">
              還沒有帳戶？點此註冊
            </span>
          </Link>
        </div>
      </div>
    </MainWrapper>
  );
};

export default LogIn;
