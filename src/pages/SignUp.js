/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { Link, useHistory } from 'react-router-dom';

import { singleImageCompressAndStorage } from '../utils/imageProcess/imageCompressAndStorage';
import Loader from '../components/shared/Loader';
import UploadImageForm from '../components/shared/UploadImageForm';
import Logo from '../utils/logo/Logo';
import { useAuth } from '../contexts/AuthContext';

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default function SignUp() {
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [localProfileUrl, setLocalProfileUrl] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(true);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  const handleFormSumbit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      let profileStorageUrl;
      if (image) {
        profileStorageUrl = await singleImageCompressAndStorage(image, 'userProfile', 600);
      }
      await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value,
        profileStorageUrl,
      );

      history.push('/log-in');
    } catch {
      setError('Failed to create an account');
    }
    return 'log-in';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center pt-12 sm:px-6 lg:px-8 pb-20 ">
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
              {localProfileUrl ? (
                <div className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 relative">
                  {profileLoaded ? null : <Loader />}
                  <ProfileImage
                    src={localProfileUrl}
                    alt="顯示圖片"
                    onLoad={() => {
                      setProfileLoaded(true);
                    }}
                  />
                </div>
              ) : (
                <span className="h-32 w-32 rounded-full overflow-hidden bg-gray-100 relative">
                  {profileLoaded ? (
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <Loader />
                  )}
                </span>
              )}
              <UploadImageForm
                url={localProfileUrl}
                image={image}
                setImage={setImage}
                setUrl={setLocalProfileUrl}
                setProfileLoaded={setProfileLoaded}
              >
                <div className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                  {localProfileUrl ? '更新顯示圖片' : '選擇顯示圖片'}
                </div>
              </UploadImageForm>
            </div>
          </div>
          {error && <div>{error}</div>}
          <form className="space-y-6" onSubmit={handleFormSumbit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                顯示名稱
              </label>
              <div className="mt-1">
                <input
                  ref={usernameRef}
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
                  ref={emailRef}
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
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
                密碼確認
              </label>
              <div className="mt-1">
                <input
                  ref={passwordConfirmRef}
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-main-500 focus:border-main-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500 disabled:bg-gray-200 duration-150"
              >
                註冊
              </button>
            </div>
          </form>
          <div className="text-base flex justify-center mt-5">
            <Link to="/log-in">
              <span className="font-medium text-main-600 hover:text-main-500 hover:border-main-500 border-b-4 border-white duration-150">
                已有帳戶？點此登入
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
