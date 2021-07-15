/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import Loader from '../components/shared/Loader';
import UploadImageForm from '../components/shared/UploadImageForm';
import Main from '../styles/layout/GeneralLayout';
import Logo from '../utils/logo/Logo';

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const SignUp = () => {
  const [profileUrl, setProfileUrl] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(false);

  return (
    <Main className="min-h-screen bg-gray-50 flex flex-col justify-center pt-12 sm:px-6 lg:px-8 pb-20 ">
      <div className="h-16 w-16 sm:mx-auto">
        <Logo className="text-center" />
      </div>
      <h2 className="mt-6 text-center text-2xl font-semibold text-gray-700 tracking-widest">
        註冊會員
      </h2>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex flex-col justify-center">
            <label htmlFor="photo" className="sr-only">
              顯示圖片
            </label>
            <div className="mt-1 flex flex-col items-center">
              {profileUrl ? (
                <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 relative">
                  {profileLoaded ? null : <Loader />}
                  <ProfileImage
                    src={profileUrl}
                    alt="顯示圖片"
                    onLoad={() => {
                      setProfileLoaded(true);
                    }}
                  />
                </div>
              ) : (
                <span className="h-32 w-32 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
              <UploadImageForm url={profileUrl} setUrl={setProfileUrl}>
                <div className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                  {profileUrl ? '更新顯示圖片' : '選擇顯示圖片'}
                </div>
              </UploadImageForm>
            </div>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                顯示名稱
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                電子信箱
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                密碼
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
              >
                註冊
              </button>
            </div>
          </form>
          <div className="text-base flex justify-center mt-5">
            <Link to="/logIn">
              <span className="font-medium text-main-600 hover:text-main-500">
                已有帳戶？點此登入
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default SignUp;

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/

/* <Main className="flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 flex flex-col justify-center items-center">
        <div className="h-20 w-20 text-center">
          <Logo className="text-center" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-semibold text-gray-700 tracking-widest">
          註冊會員
        </h2>
      </div>
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                顯示名稱
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              電子信箱
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              密碼
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 tracking-widest font-semi-bold"
            >
              註冊
            </button>
          </div>
        </form>
        <div className="text-base flex justify-center">
          <Link to="/logIn">
            <span className="font-medium text-main-600 hover:text-main-500">
              已有帳戶？點此登入
            </span>
          </Link>
        </div>
      </div>
    </Main>
  ); */
